const CUSTOM_SEARCH_API_KEY = "AIzaSyBkQKjvwEUYdDYHX7u0PNYa_9MWEIOHzfk"; // Store your Google Custom Search API key in your .env file
const CX = "160b0be643d1045a6";

// Helper functions
async function translate(entry) {
  console.log("Translating entry:", entry);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=bg&dt=t&q=${encodeURIComponent(
    entry
  )}`;

  try {
    const response = await fetch(url);
    console.log("Translation API response status:", response.status);
    const data = await response.json();
    console.log("Translation API response data:", data);

    const flattenedTranslation = data[0].map((item) => item[0]).join(" ");
    const mergedTranslation = flattenedTranslation.replace(/\s+/g, " ").trim();
    console.log("Merged translation:", mergedTranslation);
    return mergedTranslation;
  } catch (error) {
    console.error(`Error translating entry: ${entry}`, error);
    return entry;
  }
}

async function searchJobs(keyword) {
  console.log("Searching jobs for keyword:", keyword);
  const url = `https://customsearch.googleapis.com/customsearch/v1`;
  const params = {
    key: CUSTOM_SEARCH_API_KEY,
    cx: CX,
    q: `${keyword} site:jobs.bg`
  };

  try {
    console.log("Sending request to Custom Search API with params:", params);
    const response = await fetch(
      `${url}?${new URLSearchParams(params).toString()}`
    );
    console.log("Custom Search API response status:", response.status);

    if (!response.ok) {
      throw new Error(`Search request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Custom Search API response data:", data);

    const items = data.items;
    if (!items || items.length === 0) {
      console.log("No items found in search results");
      return [];
    }

    const filteredUrls = items
      .map((item) => item.link)
      .filter((url) => url.includes("www.jobs.bg/front_job_search.php"));
    console.log("Filtered URLs:", filteredUrls);

    return filteredUrls;
  } catch (error) {
    console.error(`Error searching jobs for keyword: ${keyword}`, error);
    return [];
  }
}

module.exports = {
  translate,
  searchJobs
};