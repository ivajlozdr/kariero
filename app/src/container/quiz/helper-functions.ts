import { FullCareerDetails, RiasecCategory } from "./quiz-types";

export function updateScores(
  prevScores: {
    Realistic: number;
    Investigative: number;
    Artistic: number;
    Social: number;
    Enterprising: number;
    Conventional: number;
  },
  key: RiasecCategory,
  value: number
) {
  return {
    ...prevScores,
    [key]: value // TypeScript knows `key` is a valid index
  };
}

export const fetchCareerDetails = async (
  career: string
): Promise<FullCareerDetails | null> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/onet?keyword=${encodeURIComponent(
        career
      )}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch career details: ${response.statusText}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching career details:", error);
    return null;
  }
};
