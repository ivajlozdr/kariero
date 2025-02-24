const deepl = require("deepl-node");
const authKey = "f63c02c5-f056-...";
const translator = new deepl.Translator(authKey);
const CUSTOM_SEARCH_API_KEY = "AIzaSyBkQKjvwEUYdDYHX7u0PNYa_9MWEIOHzfk"; // Store your Google Custom Search API key in your .env file
const CX = "160b0be643d1045a6";
const ONET_API_KEY = "cGdpOjk1Njlwdmg=";

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

async function deepLTranslate(text) {
  try {
    const result = await translator.translateText(text, "EN", "BG");
    return result.text;
  } catch (error) {
    console.error("DeepL Translation Error:", error);
    return text; // Ако нещо се обърка, връщаме оригиналния текст
  }
}

async function searchJobs(keyword) {
  const url = `https://customsearch.googleapis.com/customsearch/v1`;
  const params = {
    key: CUSTOM_SEARCH_API_KEY,
    cx: CX,
    q: `${keyword} site:jobs.bg`
  };

  try {
    const response = await fetch(
      `${url}?${new URLSearchParams(params).toString()}`
    );

    if (!response.ok) {
      throw new Error(`Search request failed with status: ${response.status}`);
    }

    const data = await response.json();

    const items = data.items;
    if (!items || items.length === 0) {
      console.log("No items found in search results");
      return [];
    }

    const filteredUrls = items
      .map((item) => item.link)
      .filter((url) => url.includes("www.jobs.bg/front_job_search.php"));

    return filteredUrls;
  } catch (error) {
    console.error(`Error searching jobs for keyword: ${keyword}`, error);
    return [];
  }
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

async function fetchAndTranslateDetails(code) {
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

  const detailsData = await detailsResponse.json();

  const translatedTitle = await deepLTranslate(detailsData.occupation.title);
  const translatedDescription = await deepLTranslate(
    detailsData.occupation.description
  );

  // Helper function to translate array of strings
  const translateList = async (list, type) => {
    if (list && list.length > 0) {
      // Translate each item in the list individually
      const translatedItems = await Promise.all(
        list.map(async (item) => {
          const translatedItem =
            type === "deepl"
              ? await deepLTranslate(item)
              : await translate(item);
          return { translated_name: translatedItem };
        })
      );
      return translatedItems;
    }
    return [];
  };
  const educationLevels =
    detailsData?.education?.level_required?.category ?? [];
  const educationTranslations = await Promise.all(
    educationLevels.map(async (level) => {
      const translatedName = await translate(level.name); // Translate the education level name
      return `${translatedName}: ${level.score?.value}%`;
    })
  );
  // Extract and translate tasks
  const tasks = detailsData.tasks?.task?.map((t) => t.statement) || [];
  const translatedTasks = await translateList(tasks, "regular");

  // Extract and translate technology skills
  const techSkills =
    detailsData.technology_skills?.category?.map((c) => c.title.name) || [];
  const translatedTechSkills = await translateList(techSkills, "regular");

  // Extract and translate work activities
  const workActivities =
    detailsData.detailed_work_activities?.activity?.map((a) => a.name) || [];
  const translatedWorkActivities = await translateList(
    workActivities,
    "regular"
  );

  // Extract and translate other elements
  const skills = detailsData.skills?.element?.map((s) => s.name) || [];
  const translatedSkills = await translateList(skills, "deepl");

  const interests = detailsData.interests?.element?.map((i) => i.name) || [];
  const translatedInterests = await translateList(interests, "regular");

  const abilities = detailsData.abilities?.element?.map((a) => a.name) || [];
  const translatedAbilities = await translateList(abilities, "deepl");

  const knowledge = detailsData.knowledge?.element?.map((k) => k.name) || [];
  const translatedKnowledge = await translateList(knowledge, "regular");

  const relatedOccupations =
    detailsData.related_occupations?.occupation?.map((r) => r.title) || [];
  const translatedRelatedOccupations = await translateList(
    relatedOccupations,
    "deepl"
  );

  // Return all translated data
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
  searchJobs,
  fetchCareerCode,
  fetchAndTranslateDetails
};
