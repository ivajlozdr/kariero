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
    throw new Error(
      `Search API request failed with status: ${searchResponse.status}`
    );
  }

  const searchData = await searchResponse.json();
  const careerArray = searchData.career;

  if (!careerArray || careerArray.length === 0) {
    throw new Error("No career found for the given keyword.");
  }

  return careerArray[0].code;
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

  // Check if skills are available, then translate them if they exist
  let translatedSkills = [];
  if (
    detailsData.skills &&
    detailsData.skills.element &&
    detailsData.skills.element.length > 0
  ) {
    // Combine all skills into one string for translation
    const skillsString = detailsData.skills.element
      .map((skill) => skill.name)
      .join(", ");

    // Translate the combined skills string
    const translatedSkillsString = await translate(skillsString);

    // Split the translated skills string back into individual skills
    translatedSkills = translatedSkillsString
      .split(", ")
      .map((translatedName) => {
        return {
          translated_name: translatedName
        };
      });
  }

  // Return the data including translated skills (or empty array if no skills)
  return {
    ...detailsData,
    translated: {
      title: translatedTitle,
      description: translatedDescription,
      skills: translatedSkills // Empty array if no skills were present
    }
  };
}

module.exports = {
  translate,
  searchJobs,
  fetchCareerCode,
  fetchAndTranslateDetails
};
