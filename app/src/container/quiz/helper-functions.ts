import { likertScale } from "./quiz-data";
import {
  FullCareerDetails,
  PreferenceKeys,
  RiasecCategory,
  Scores,
  UserProfileData,
  WorkStyleKeys
} from "./quiz-types";

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

export const handleRIASECAnswer = (
  category: string,
  weight: number,
  setScores: React.Dispatch<React.SetStateAction<Scores>>
) => {
  const riasecCategoryMap: { [key: string]: string } = {
    HandsOn: "Realistic",
    ProblemSolving: "Investigative",
    Curiosity: "Investigative",
    Creative: "Artistic",
    Social: "Social",
    Collaboration: "Social",
    Enterprising: "Enterprising",
    TechComfort: "Realistic",
    JobSatisfaction: "Enterprising",
    Conventional: "Conventional"
  };

  const riasecType = riasecCategoryMap[category];
  if (riasecType) {
    setScores((prevScores) => ({
      ...prevScores,
      RIASEC: {
        ...prevScores.RIASEC,
        [riasecType]: {
          ...prevScores.RIASEC[riasecType],
          [category]: weight
        }
      }
    }));
  }
};

// Handle Preferences category responses
export const handlePreferenceAnswer = (
  field: PreferenceKeys,
  answer: string,
  setScores: React.Dispatch<React.SetStateAction<Scores>>
) => {
  setScores((prevScores) => ({
    ...prevScores,
    Preferences: {
      ...prevScores.Preferences,
      [field]: [...(prevScores.Preferences[field] || []), answer]
    }
  }));
};

// Handle WorkStyle category responses
export const handleWorkStyleAnswer = (
  field: string,
  answer: string,
  setScores: React.Dispatch<React.SetStateAction<Scores>>
) => {
  setScores((prevScores) => ({
    ...prevScores,
    WorkStyle: {
      ...prevScores.WorkStyle,
      [field]: answer
    }
  }));
};

export const getAnswerLabel = (weight: number) => {
  return (
    likertScale.find((option) => option.weight === weight)?.label || "No Answer"
  );
};

export const fetchOpenAIResponse = async (
  scores: Scores
): Promise<UserProfileData | null> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}` // Replace with your actual key
      },
      body: JSON.stringify({
        model: "gpt-4o-2024-08-06",
        messages: [
          {
            role: "system",
            content:
              "You are a career guidance assistant. You will analyse thoroughly data given to you and based off it you will provide accurate, personalised career path recommendations. Your response will always be only a valid JSON object, that is in the following structure: { Abilities:[ Array of at least 4 strings ], Skills:[ Array of at least 4 strings ], Knowledge:[ Array of at least 4 strings ], Interests:[ Array of at least 4 strings ], WorkStyle:[ Array of at least 4 strings ], WorkValues:[ Array of at least 4 strings ], TechnologySkills:[ Array of at least 4 strings ], CareerRecommendations:[{careerPath:string,reason:string,listOfCareers:[{career:string,reason:string},{career:string,reason:string},{career:string,reason:string}]},{careerPath:string,reason:string,listOfCareers:[{career:string,reason:string},{career:string,reason:string},{career:string,reason:string}]},{careerPath:string,reason:string,listOfCareers:[{career:string,reason:string},{career:string,reason:string},{career:string,reason:string}]},{careerPath:string,reason:string,listOfCareers:[{career:string,reason:string},{career:string,reason:string},{career:string,reason:string}]},{careerPath:string,reason:string,listOfCareers:[{career:string,reason:string},{career:string,reason:string},{career:string,reason:string}]}] }. Provide a comprehensive explanation as to why the specific career is right for the individual under the 'reason' property. When you provide the arrays for Abilities, Skills, Knowledge, Interests, Work Style, Work Values, and Technology Skills, make sure they are accurately derived from the data of the user prompt. Make sure everything is also compatible with O*NET's API data, especially for the Abilities, Skills, Knowledge, Interests, Work Style, Work Values, and Technology Skills! It is important you do not miss-match categories. When providing careers, make sure career path is a broad keyword, that covers the field that the careers in listOfCareers belong to. Each career in listOfCareers should be a SPECIFIC CAREER WITH ITS OWN CAREER CODE in the O*NET API, not a keyword. Make sure the careers you provide are real careers that exist in O*NET. Each career's name must be plural (example: Graphic designer should be Graphic designers) to match the O*NET API's naming conventions."
          },
          {
            role: "user",
            content: `Base your recommendations off this JSON object: ${JSON.stringify(
              scores
            )}. Here is a thorough explanation of everything inside the object, which you must understand before making your recommendation. The RIASEC object contains values based on the RIASEC model. These numeric values typically range from 0 to 10, representing extremes; values outside this range are rare and indicate very extreme tendencies. Use these RIASEC values to determine the user's work personality and consider them when suggesting career paths. The Preferences object provides details about the user's preferences for their dream career. It includes the user's personality type, preferred work environment, job priorities, education level, and career goals. The personality type describes the user’s overarching traits, while the work environment highlights their ideal workplace conditions. The job priority array outlines what the user values most in their career. The education level specifies their degree type, and career goals describe the role the user aspires to achieve in their career. The WorkStyle object details the user's working preferences. StructurePreference indicates whether they prefer a structured, hierarchical career or a more flexible one. Collaboration reveals if they prefer teamwork or working individually. WorkEnvironment shows whether they thrive in a fast-paced and dynamic environment or prefer a stable and predictable setting.`
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API Error: ${response.status}`);
    }

    const data = await response.json();
    const rawContent = data?.choices[0]?.message?.content;

    if (!rawContent) {
      throw new Error(
        "Failed to extract recommendations from OpenAI response."
      );
    }

    const cleanedContent = rawContent
      .replace(/^```json([\s\S]*?)```$/, "$1")
      .replace(/^```([\s\S]*?)```$/, "$1")
      .trim();

    return cleanedContent ? JSON.parse(cleanedContent) : null;
  } catch (error) {
    console.error("Error fetching OpenAI response:", error);
    return null;
  }
};

// Helper function to fetch O*NET data for multiple careers
export const fetchOnetData = async (
  careerNames: string[],
  scores: Scores,
  userResponses: any,
  token: string | null
): Promise<FullCareerDetails[]> => {
  const promises = careerNames.map(async (careerName) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/onet`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: token,
            keyword: careerName,
            scores,
            userResponses
          })
        }
      );

      if (!response.ok) {
        throw new Error(
          `O*NET API Error for ${careerName}: ${response.status}`
        );
      }

      return response.json();
    } catch (error) {
      console.error(`Error fetching O*NET data for ${careerName}:`, error);
      return null; // Gracefully handle errors by returning null for this career
    }
  });

  // Resolve all promises and filter out null results
  const results = await Promise.all(promises);
  return results.filter((data): data is FullCareerDetails => data !== null);
};
