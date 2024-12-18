const CUSTOM_SEARCH_API_KEY = "AIzaSyBkQKjvwEUYdDYHX7u0PNYa_9MWEIOHzfk"; // Store your Google Custom Search API key in your .env file
const CX = "160b0be643d1045a6";
const ONET_API_KEY = "cGdpOjk1Njlwdmg=";

// Helper functions
async function translate(entry) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=bg&dt=t&q=${encodeURIComponent(
    entry
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const flattenedTranslation = data[0].map((item) => item[0]).join(" ");
    const mergedTranslation = flattenedTranslation.replace(/\s+/g, " ").trim();
    return mergedTranslation;
  } catch (error) {
    console.error(`Error translating entry: ${entry}`, error);
    return entry;
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
    console.log(`Fetching career code for keyword: "${keyword}"`);

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

    console.log("API response received:", searchData);

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
    console.log(`Career code retrieved successfully: ${careerCode}`);
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

  const translatedTitle = await translate(detailsData.occupation.title);
  const translatedDescription = await translate(
    detailsData.occupation.description
  );

  // Helper function to translate array of strings
  const translateList = async (list) => {
    if (list && list.length > 0) {
      // Translate each item in the list individually
      const translatedItems = await Promise.all(
        list.map(async (item) => {
          const translatedItem = await translate(item);
          return { translated_name: translatedItem };
        })
      );
      return translatedItems;
    }
    return [];
  };

  // Extract and translate tasks
  const tasks = detailsData.tasks?.task?.map((t) => t.statement) || [];
  const translatedTasks = await translateList(tasks);

  // Extract and translate technology skills
  const techSkills =
    detailsData.technology_skills?.category?.map((c) => c.title.name) || [];
  const translatedTechSkills = await translateList(techSkills);

  // Extract and translate work activities
  const workActivities =
    detailsData.detailed_work_activities?.activity?.map((a) => a.name) || [];
  const translatedWorkActivities = await translateList(workActivities);

  // Extract and translate other elements
  const skills = detailsData.skills?.element?.map((s) => s.name) || [];
  const translatedSkills = await translateList(skills);

  const interests = detailsData.interests?.element?.map((i) => i.name) || [];
  const translatedInterests = await translateList(interests);

  const abilities = detailsData.abilities?.element?.map((a) => a.name) || [];
  const translatedAbilities = await translateList(abilities);

  const knowledge = detailsData.knowledge?.element?.map((k) => k.name) || [];
  const translatedKnowledge = await translateList(knowledge);

  const relatedOccupations =
    detailsData.related_occupations?.occupation?.map((r) => r.title) || [];
  const translatedRelatedOccupations = await translateList(relatedOccupations);

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
      related_occupations: translatedRelatedOccupations
    }
  };
}

async function scrape() {
  const url = `https://www.jobs.bg/front_job_search.php?s_c[0]=1168`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.0",
        Cookie:
          "JOBSSESSID=fo4e23s7v2srg8bic4o1bg97uf; TS017554c9=01855380b0b9adeb2f16d5128474c7816ff36a9d236b8d0c5cd424e0cd5b38c8c1aebe96a8fac0758a97f02d1e533fe6b15ad1198c; FAV=5484740df2df99935b919f91e87bfdbde612107815f43b502175595ffb48aa29; RELOC=1; __cf_bm=_xBochdDo2cjp3VyGzU.VwMTgIrBnLuomqNvRi77ooc-1733647761-1.0.1.1-KPZtGU.pgUdu7FSPtC9xHixrZLIFi.n9iC1mZuGhnfEDKXQaEZem82HB.pL6U6WTeV3Y0ACNjn0Z.dRD8qM5FA; TS01caf967=01855380b02314502e83d2661215bc7cec304967f6f5ab6b6869f98a2bd3ffe0d551c1d45652da36f3b7cbe782459ce76f13c65119; datadome=DXoZRcj_xB4LYjVnPQ8tl6pL2Si0hSXHWyxCZdYsdoQ_lq0wyJv7vMt4vQchrG4_tRl~e6Q6hToCQc41EUZHwjM75JmYC9Q7uMS2FOozVdT1oy7cxTGjnvtV~tiuQK1e"
      }
    });
    const data = await response.text();

    return data;
  } catch (error) {
    console.error(`Error scraping: `, error);
    return error;
  }
}

module.exports = {
  translate,
  searchJobs,
  fetchCareerCode,
  fetchAndTranslateDetails,
  scrape
};
