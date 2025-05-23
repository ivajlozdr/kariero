import { likertScale } from "./quiz-data";
import {
  CareerRecommendation,
  FullRecommendationsObject,
  PreferenceKeys,
  QuestionMapping,
  RiasecCategory,
  Scores,
  UserProfileData,
  UserResponses
} from "./quiz-types";
import { FullCareerDetails } from "../../types_common";
import { fetchJobOffers } from "../../functions_common";
import { Offers } from "../jobdetails/jobs-types";

/**
 * Актуализира RIASEC резултатите чрез промяна на стойността за определена категория.
 *
 * @param {Object} prevScores - Предишните резултати, съдържащи стойности за всички RIASEC категории.
 * @param {RiasecCategory} key - Категорията, която ще бъде актуализирана (напр. "Realistic", "Investigative").
 * @param {number} value - Новата стойност на резултата, която ще бъде зададена за посочената категория.
 * @returns {Object} - Нов обект с резултати с актуализираната стойност за категорията.
 */
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
    [key]: value
  };
}

/**
 * Извлича подробна информация за дадена кариера от API-то.
 *
 * @param {string} career - Името на кариерата, за която трябва да се извлекат данни.
 * @returns {Promise<FullCareerDetails | null>} - Promise, който връща обект с подробности за кариерата
 * или `null`, ако извличането е неуспешно.
 *
 * @throws {Error} - Хвърля грешка при проблем с мрежовата заявка.
 */
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

/**
 * Обработва отговор за категорията RIASEC и актуализира съответния резултат.
 *
 * @param {string} category - Категорията в RIASEC (напр. "HandsOn", "ProblemSolving").
 * @param {number} weight - Стойността на отговора, която ще се използва за актуализиране на резултата.
 * @param {React.Dispatch<React.SetStateAction<Scores>>} setScores - Функцията за актуализиране на състоянието на резултатите.
 * @returns {void} - Не връща стойност, а просто актуализира състоянието.
 */
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

/**
 * Обработва отговор за категорията "Preferences" и актуализира съответния резултат.
 *
 * @param {PreferenceKeys} field - Полето в категорията "Preferences", което се актуализира.
 * @param {string} answer - Отговорът, който се добавя към полето на предпочитанията.
 * @param {React.Dispatch<React.SetStateAction<Scores>>} setScores - Функцията за актуализиране на състоянието на резултатите.
 * @returns {void} - Не връща стойност, а просто актуализира състоянието.
 */
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

/**
 * Обработва отговор за категорията "WorkStyle" и актуализира съответния резултат.
 *
 * @param {string} field - Полето в категорията "WorkStyle", което се актуализира.
 * @param {string} answer - Отговорът, който се добавя към полето на работния стил.
 * @param {React.Dispatch<React.SetStateAction<Scores>>} setScores - Функцията за актуализиране на състоянието на резултатите.
 * @returns {void} - Не връща стойност, а просто актуализира състоянието.
 */
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

/**
 * Получава етикета на отговора въз основа на предоставеното тегло.
 *
 * Търси в масива likertScale елемент с тегло, което съвпада с подаденото и връща съответния етикет.
 * Ако не бъде намерен такъв елемент, връща "No Answer".
 *
 * @param {number} weight - Теглото на отговора, което трябва да бъде намерено в likertScale.
 * @returns {string} - Етикет на отговора или "No Answer" ако не е намерен.
 */
export const getAnswerLabel = (weight: number) => {
  return (
    likertScale.find((option) => option.weight === weight)?.label || "No Answer"
  );
};

/**
 * Изпраща потребителски данни към изкуствен интелект за генериране на препоръки.
 * Използва OpenAI или Gemini като доставчик, в зависимост от подадения параметър.
 *
 * @param {Scores} scores - Обект, съдържащ резултати от различни тестове и предпочитания на потребителя.
 * @param {string} provider - Името на AI доставчика ("openai" или "gemini").
 * @param {string} [modelOpenAI="gpt-4o"] - Името на OpenAI модела, който да се използва (по подразбиране е "gpt-4o").
 * @returns {Promise<UserProfileData | null>} - Връща обработен отговор от модела под формата на обект с кариерни препоръки или `null` при грешка.
 */
export const fetchModelResponse = async (
  scores: Scores,
  provider: string,
  modelOpenAI: string = "gpt-4o"
): Promise<UserProfileData | null> => {
  try {
    const messages = [
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
    ];
    const api_key: string =
      provider === "openai"
        ? import.meta.env.VITE_OPENAI_API_KEY
        : provider === "gemini"
        ? import.meta.env.VITE_GEMINI_API_KEY
        : "";

    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/get-model-response`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages,
          provider,
          modelOpenAI,
          api_key
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    const rawContent = data?.response;

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
  } catch (err) {
    console.error("Error fetching model response:", err);
    return null;
  }
};

/**
 * Изпраща асинхронни заявки към бекенд API-то за всяка кариера в масива и връща подробности за кариерата.
 *
 * Функцията изпраща POST заявки към бекенд API за всяко име на кариера, предоставяйки потребителски отговори и оценка (scores). Тя обработва отговорите и връща подробни данни за всяка кариера, ако има успешно получен отговор. Ако има грешка, тя я отчита и премахва грешните отговори от резултатите.
 *
 * @param {Recommendations} recommendations - Пълен обекст с препоръки, съдържащ детайли за кариерата и причина, защо тя е подходяща за дадения потребител.
 * @param {Scores} scores - Оценки за RIASEC модел и други детайли, свързани с потребителя.
 * @param {UserResponses[]} userResponses - Отговори на потребителя, които да бъдат изпратени към API-то.
 * @param {string | null} token - Токен за авторизация към API-то.
 * @returns {Promise<FullCareerDetails[]>} - Обещание, което връща масив с подробности за кариерите или празен масив, ако има грешки.
 */
export const fetchOnetData = async (
  recommendations: FullRecommendationsObject,
  scores: Scores,
  userResponses: UserResponses[],
  token: string | null,
  date: string
): Promise<FullCareerDetails[]> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/save-responses-scores`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: token,
          scores: scores,
          userResponses: userResponses,
          date: date
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Error saving responses and scores: ${response.status}`);
    }

    const aiAnalysisResponse = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/save-ai-analysis`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: token,
          recommendations: {
            Abilities: recommendations.Abilities,
            Skills: recommendations.Skills,
            Knowledge: recommendations.Knowledge,
            Interests: recommendations.Interests,
            WorkStyle: recommendations.WorkStyle,
            WorkValues: recommendations.WorkValues,
            TechnologySkills: recommendations.TechnologySkills
          }
        })
      }
    );

    if (!aiAnalysisResponse.ok) {
      throw new Error(
        `Error saving AI analysis data: ${aiAnalysisResponse.status}`
      );
    }

    const promises = recommendations.CareerRecommendations.flatMap(
      (rec) => rec.listOfCareers
    ).map(async (career) => {
      try {
        const occupationResponse = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/save-occupation`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              token: token,
              keyword: career.career,
              date: date,
              reason: career.reason
            })
          }
        );

        if (!occupationResponse.ok) {
          throw new Error(
            `Error saving occupation data for ${career.career}: ${occupationResponse.status}`
          );
        }

        const occupationData = await occupationResponse.json();
        return occupationData;
      } catch (error) {
        console.error(`Error processing career ${career.career}:`, error);
        return null;
      }
    });

    const results = await Promise.all(promises);
    return results.filter((data): data is FullCareerDetails => data !== null);
  } catch (error) {
    console.error("Error processing data:", error);
    return [];
  }
};

let isOnCooldown = false;

/**
 * Изпраща резултатите от теста към OpenAI и O*NET за получаване на кариерни препоръки и свързани подробности за кариера.
 *
 * Тази функция обработва резултатите от теста на потребителя и изпраща заявка към OpenAI за препоръки за кариера. След това използва тези препоръки, за да извлече допълнителни данни от O*NET API и актуализира състоянията на приложението с получените резултати.
 *
 * @param {Scores} scores - Оценки за потребителя, получени от теста.
 * @param {UserResponses[]} userResponses - Масив с отговорите на потребителя, съдържащ въпроси и съответните отговори.
 * @param {string | null} token - Токен за авторизация към API.
 * @param {React.Dispatch<React.SetStateAction<CareerRecommendation[]>>} setCareerRecommendations - Функция за обновяване на препоръките за кариера в състоянието.
 * @param {React.Dispatch<React.SetStateAction<FullCareerDetails[] | undefined>>} setCareers - Функция за обновяване на подробности за кариерата в състоянието.
 * @returns {Promise<void>} - Няма връщан резултат, работи с асинхронни операции и актуализира състоянието.
 */
export const submitQuiz = async (
  scores: Scores,
  userResponses: UserResponses[],
  token: string | null,
  setCareerRecommendations: React.Dispatch<
    React.SetStateAction<CareerRecommendation[]>
  >,
  setCareers: React.Dispatch<
    React.SetStateAction<FullCareerDetails[] | undefined>
  >,
  setJobOffersList: React.Dispatch<React.SetStateAction<Offers[]>>
): Promise<void> => {
  try {
    if (isOnCooldown) return;
    isOnCooldown = true;
    const date = new Date().toISOString();

    console.log("Final Scores:", scores);
    console.log("User Responses:", userResponses);

    const provider = "openai";
    const modelOpenAI = "gpt-4o";
    const recommendations = await fetchModelResponse(
      scores,
      provider,
      modelOpenAI
    );

    if (!recommendations) {
      throw new Error("Failed to fetch career recommendations from OpenAI.");
    }

    console.log("OpenAI Recommendations:", recommendations);

    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/translate/career-paths`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          careerPaths: recommendations.CareerRecommendations
        })
      }
    );

    if (response.ok) {
      const translatedData = await response.json();
      setCareerRecommendations(translatedData);
    } else {
      console.error("Failed to translate career recommendations");
    }

    const onetData = await fetchOnetData(
      recommendations,
      scores,
      userResponses,
      token,
      date
    );
    console.log("O*NET Data:", onetData);

    setCareers(onetData);
    const careersArray = onetData.map((career) => ({
      keyword: career.translated.title,
      occupation_code: career.code
    }));

    const jobOffers = await fetchJobOffers(careersArray);
    setJobOffersList(jobOffers);
    setTimeout(() => {
      isOnCooldown = false;
    }, 600);
  } catch (error) {
    console.error("Error in submitQuiz processing:", error);
  }
};

/**
 * Обработва отговорите на потребителя по Likert скалата и актуализира резултатите и отговорите.
 *
 * Тази функция обработва отговорите на потребителя към текущия въпрос, който попада в категорията RIASEC. След това актуализира състоянието с новите отговори и преминава към следващия въпрос.
 *
 * @param {number} weight - Теглото на отговора, което показва нивото на съгласие или оценка.
 * @param {QuestionMapping[]} questions - Масив с въпросите, като всеки въпрос съдържа информация за категорията и полето.
 * @param {number} currentQuestionIndex - Индекс на текущия въпрос в масива `questions`.
 * @param {UserResponses[]} userResponses - Масив с отговорите на потребителя до момента.
 * @param {React.Dispatch<React.SetStateAction<Scores>>} setScores - Функция за обновяване на резултатите (оцени) в състоянието.
 * @param {React.Dispatch<React.SetStateAction<UserResponses[]>>} setUserResponses - Функция за обновяване на отговорите на потребителя в състоянието.
 * @param {() => void} nextQuestion - Функция, която преминава към следващия въпрос.
 * @returns {void} - Няма връщан резултат, но актуализира състоянието и преминава към следващия въпрос.
 */
export const handleLikertAnswer = (
  weight: number,
  questions: QuestionMapping[],
  currentQuestionIndex: number,
  userResponses: UserResponses[],
  setScores: React.Dispatch<React.SetStateAction<Scores>>,
  setUserResponses: React.Dispatch<React.SetStateAction<UserResponses[]>>,
  nextQuestion: () => void
): void => {
  if (isOnCooldown) return;
  isOnCooldown = true;
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion.category === "RIASEC") {
    handleRIASECAnswer(currentQuestion.field, weight, setScores);
  }

  const updatedResponses = [
    ...userResponses,
    {
      id: currentQuestion.id,
      question: currentQuestion.question,
      answer: getAnswerLabel(weight)
    }
  ];

  setUserResponses(updatedResponses);
  nextQuestion();
  setTimeout(() => {
    isOnCooldown = false;
  }, 600);
};

/**
 * Обработва отговорите на потребителя за въпрос с многократен избор и актуализира резултатите и отговорите.
 *
 * Тази функция обработва отговорите на потребителя за текущия въпрос, в зависимост от категорията на въпроса (RIASEC, Preferences, WorkStyle).
 * След това актуализира състоянието на отговорите на потребителя и преминава към следващия въпрос.
 *
 * @param {string} answer - Отговорът на потребителя за текущия въпрос.
 * @param {QuestionMapping[]} questions - Масив с въпросите, като всеки въпрос съдържа информация за категорията и полето.
 * @param {number} currentQuestionIndex - Индекс на текущия въпрос в масива `questions`.
 * @param {UserResponses[]} userResponses - Масив с отговорите на потребителя до момента.
 * @param {React.Dispatch<React.SetStateAction<Scores>>} setScores - Функция за обновяване на резултатите (оцени) в състоянието.
 * @param {React.Dispatch<React.SetStateAction<UserResponses[]>>} setUserResponses - Функция за обновяване на отговорите на потребителя в състоянието.
 * @param {() => void} nextQuestion - Функция, която преминава към следващия въпрос.
 * @returns {void} - Няма връщан резултат, но актуализира състоянието и преминава към следващия въпрос.
 */
export const handleMultipleChoiceAnswer = (
  answer: string,
  questions: QuestionMapping[],
  currentQuestionIndex: number,
  userResponses: UserResponses[],
  setScores: React.Dispatch<React.SetStateAction<Scores>>,
  setUserResponses: React.Dispatch<React.SetStateAction<UserResponses[]>>,
  nextQuestion: () => void
): void => {
  if (isOnCooldown) return;
  isOnCooldown = true;
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion.category === "RIASEC") {
    handleRIASECAnswer(currentQuestion.field, parseInt(answer, 10), setScores);
  }

  if (currentQuestion.category === "Preferences") {
    handlePreferenceAnswer(
      currentQuestion.field as PreferenceKeys,
      answer,
      setScores
    );
  }

  if (currentQuestion.category === "WorkStyle") {
    handleWorkStyleAnswer(currentQuestion.field, answer, setScores);
  }

  const updatedResponses = [
    ...userResponses,
    { id: currentQuestion.id, question: currentQuestion.question, answer }
  ];

  setUserResponses(updatedResponses);
  nextQuestion();
  setTimeout(() => {
    isOnCooldown = false;
  }, 600);
};
