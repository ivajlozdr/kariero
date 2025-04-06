const deepl = require("deepl-node");
const DEEPL_API_KEY = require("./credentials").DEEPL_API_KEY;
const translator = new deepl.Translator(DEEPL_API_KEY);
const CUSTOM_SEARCH_API_DATA = require("./credentials").CUSTOM_SEARCH_API_DATA;
const ONET_API_KEY = require("./credentials").ONET_API_KEY;

const translate = async (entry) => {
  // Изграждане на URL за заявка към Google Translate API
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=bg&dt=t&q=${encodeURIComponent(
    entry
  )}`;
  try {
    // Изпращане на заявката към API-то
    const response = await fetch(url);
    const data = await response.json();
    // Обединяване на преведените части в един низ
    const flattenedTranslation = data[0].map((item) => item[0]).join(" ");
    // Премахване на излишните интервали
    const mergedTranslation = flattenedTranslation.replace(/\s+/g, " ").trim();
    return mergedTranslation;
  } catch (error) {
    // Обработка на грешка при превод
    console.error(`Error translating entry: ${entry}`, error);
    return entry;
  }
};

async function deepLTranslate(text, context = "", glossaryId = null) {
  try {
    const options = { context };
    if (glossaryId) {
      options.glossaryId = glossaryId;
    }

    const result = await translator.translateText(text, "EN", "BG", options);
    return result.text;
  } catch (error) {
    console.error("DeepL Translation Error:", error);
    return text;
  }
}

async function deepLTranslateBatch(texts, context = "") {
  try {
    const results = await translator.translateText(texts, "EN", "BG", {
      context
    });
    return Array.isArray(results) ? results.map((r) => r.text) : [results.text];
  } catch (error) {
    console.error("DeepL Translation Error:", error);
    return texts;
  }
}

async function translateList(list, type, context = "") {
  if (!list || list.length === 0) return [];

  if (type === "deepl") {
    const translatedResults = await deepLTranslateBatch(list, context);
    return translatedResults;
  } else {
    const translatedItems = [];
    for (const item of list) {
      const translatedItem = await translate(item);
      translatedItems.push(translatedItem);
    }
    return translatedItems;
  }
}

async function searchJobs(keyword) {
  const url = `https://customsearch.googleapis.com/customsearch/v1`;

  const searchPromises = CUSTOM_SEARCH_API_DATA.map(async (engine) => {
    const params = {
      key: engine.key,
      cx: engine.cx,
      q: `${keyword} site:jobs.bg`
    };

    try {
      const response = await fetch(
        `${url}?${new URLSearchParams(params).toString()}`
      );

      if (!response.ok) {
        throw new Error(
          `Search request failed with status: ${response.status}`
        );
      }

      const data = await response.json();
      const items = data.items || [];

      return items
        .map((item) => item.link)
        .filter((link) => link.includes("www.jobs.bg/front_job_search.php"));
    } catch (error) {
      console.error(
        `Error searching jobs for keyword: ${keyword} using engine ${engine.cx}`,
        error
      );
      return [];
    }
  });

  const results = await Promise.allSettled(searchPromises);

  const filteredUrls = results
    .filter((result) => result.status === "fulfilled")
    .flatMap((result) => result.value);

  if (filteredUrls.length === 0) {
    console.error(
      `Failed to fetch JobsBG data for "${keyword}" using all engines.`
    );
  }

  return filteredUrls;
}

async function fetchCareerCode(keyword) {
  try {
    const searchResponse = await fetch(
      `https://services.onetcenter.org/ws/mnm/search?keyword=${encodeURIComponent(
        keyword
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${ONET_API_KEY}`,
          Accept: "application/json"
        }
      }
    );

    if (!searchResponse.ok) {
      console.error(
        `Fetch failed with status: ${searchResponse.status} - ${searchResponse.statusText}`
      );
      throw new Error(
        `Search API request failed with status: ${searchResponse.status}`
      );
    }

    let searchData;
    try {
      searchData = await searchResponse.json();
    } catch (jsonError) {
      console.error("Error parsing JSON response:", jsonError);
      throw new Error("Failed to parse JSON response from API.");
    }

    const careerArray = searchData.career;

    if (!careerArray || !Array.isArray(careerArray)) {
      console.error("Invalid 'career' data format:", searchData);
      throw new Error("API response does not contain a valid 'career' array.");
    }

    if (careerArray.length === 0) {
      console.warn("No careers found for the given keyword:", keyword);
      throw new Error("No career found for the given keyword.");
    }

    const careerCode = careerArray[0].code;
    return careerCode;
  } catch (error) {
    console.error("Error in fetchCareerCode function:", error.message);
    throw error; // Re-throw the error for further handling
  }
}

async function fetchONETData(code) {
  const detailsResponse = await fetch(
    `https://services.onetcenter.org/ws/online/occupations/${code}/details`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${ONET_API_KEY}`,
        Accept: "application/json"
      }
    }
  );

  if (!detailsResponse.ok) {
    throw new Error(
      `Details API request failed with status: ${detailsResponse.status}`
    );
  }

  return await detailsResponse.json();
}

async function fetchDetails(db, code) {
  try {
    const occupation = await db.getOccupationByCode(code);
    if (!occupation) {
      console.log(`Career ${code} not found in database, translating...`);
      return await translateDetails(code);
    }
    console.log(`Career ${code} found in database, retrieving related data...`);
    const [
      skills,
      interests,
      abilities,
      techSkills,
      workActivities,
      knowledge,
      tasks,
      relatedOccupations,
      detailsData
    ] = await Promise.all([
      db.getSkillsByOccupationCode(code),
      db.getInterestsByOccupationCode(code),
      db.getAbilitiesByOccupationCode(code),
      db.getTechSkillsByOccupationCode(code),
      db.getWorkActivitiesByOccupationCode(code),
      db.getKnowledgeByOccupationCode(code),
      db.getTasksByOccupationCode(code),
      db.getRelatedOccupationsByCode(code),
      fetchONETData(code)
    ]);

    const educationData =
      typeof occupation.education === "string" ? occupation.education : "";

    return {
      ...detailsData,
      translated: {
        title: occupation.title_bg,
        description: occupation.description,
        skills: skills.map((s) => s.name_bg),
        interests: interests.map((i) => i.name_bg),
        abilities: abilities.map((a) => a.name_bg),
        knowledge: knowledge.map((k) => k.name_bg),
        detailed_work_activities: workActivities.map((a) => a.name_bg),
        technology_skills: techSkills.map((t) => t.name_bg),
        tasks: tasks.map((t) => t.name_bg),
        related_occupations: relatedOccupations.map((r) => r.name_bg),
        education: educationData
      }
    };
  } catch (error) {
    console.error(`Error in fetchDetails: ${error.message}`);
    throw error;
  }
}

async function translateDetails(code) {
  const detailsData = await fetchONETData(code);

  const translatedTitle = await deepLTranslate(
    detailsData.occupation.title,
    "This is the title of a career."
  );
  const translatedDescription = await deepLTranslate(
    detailsData.occupation.description,
    `This is the description of the following career: ${detailsData.occupation.title}.`
  );

  const educationLevels =
    detailsData?.education?.level_required?.category ?? [];
  const educationTranslations = await Promise.all(
    educationLevels.map(async (level) => {
      const translatedName = await translate(level.name);
      return `${translatedName}: ${level.score?.value}%`;
    })
  );

  const tasks = detailsData.tasks?.task?.map((t) => t.statement) || [];
  const translatedTasks = await translateList(tasks, "regular");

  const techSkills =
    detailsData.technology_skills?.category?.map((c) => c.title.name) || [];
  const translatedTechSkills = await translateList(techSkills, "regular");

  const workActivities =
    detailsData.detailed_work_activities?.activity?.map((a) => a.name) || [];
  const translatedWorkActivities = await translateList(
    workActivities,
    "regular"
  );

  const skills = detailsData.skills?.element?.map((s) => s.name) || [];
  const translatedSkills = await translateList(
    skills,
    "deepl",
    `These are the skills required for the following career: ${detailsData.occupation.title}.`
  );

  const interests = detailsData.interests?.element?.map((i) => i.name) || [];
  const translatedInterests = await translateList(interests, "regular");

  const abilities = detailsData.abilities?.element?.map((a) => a.name) || [];
  const translatedAbilities = await translateList(
    abilities,
    "deepl",
    `These are the abilities required for the following career: ${detailsData.occupation.title}.`
  );

  const knowledge = detailsData.knowledge?.element?.map((k) => k.name) || [];
  const translatedKnowledge = await translateList(knowledge, "regular");

  const relatedOccupations =
    detailsData.related_occupations?.occupation?.map((r) => r.title) || [];
  const translatedRelatedOccupations = await translateList(
    relatedOccupations,
    "deepl",
    `These are the related occupations for the following career: ${detailsData.occupation.title}.`
  );

  return {
    ...detailsData,
    translated: {
      title: translatedTitle,
      description: translatedDescription,
      skills: translatedSkills,
      interests: translatedInterests,
      abilities: translatedAbilities,
      knowledge: translatedKnowledge,
      detailed_work_activities: translatedWorkActivities,
      technology_skills: translatedTechSkills,
      tasks: translatedTasks,
      related_occupations: translatedRelatedOccupations,
      education: educationTranslations.join(", ")
    }
  };
}

module.exports = {
  translate,
  deepLTranslate,
  deepLTranslateBatch,
  searchJobs,
  fetchCareerCode,
  fetchONETData,
  fetchDetails,
  translateDetails
};
