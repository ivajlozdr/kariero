import React, { useState } from "react";
import {
  Scores,
  PreferenceKeys,
  WorkStyleKeys,
  Career,
  CareerRecommendation,
  UserProfileData,
  FullCareerDetails
} from "./quiz-types";
import { likertScale, questions } from "./quiz-data";
import { CSSTransition } from "react-transition-group";
import Careers from "./components/careers";
import { fetchCareerDetails } from "./helper-functions";

// Initial score structure
const initialScores: Scores = {
  RIASEC: {
    Realistic: {},
    Investigative: {},
    Artistic: {},
    Social: {},
    Enterprising: {},
    Conventional: {}
  },
  Preferences: {},
  WorkStyle: {
    StructurePreference: "",
    Collaboration: "",
    WorkEnvironment: ""
  }
};

const QuizComponent: React.FC = () => {
  const [careers, setCareers] = useState<FullCareerDetails[]>();
  const [scores, setScores] = useState<Scores>(initialScores);
  const [userResponses, setUserResponses] = useState<
    { id: number; question: string; answer: string }[]
  >([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  const [selectedCareerPath, setSelectedCareerPath] = useState<string | null>(
    null
  );
  const [careerDetails, setCareerDetails] = useState<any[]>([]);
  const [careerRecommendations, setCareerRecommendations] = useState<any[]>([]);
  // Handle Likert scale answers
  const handleLikertAnswer = (weight: number) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.category === "RIASEC") {
      const category = currentQuestion.field;

      // RIASEC category mapping based on the question's field
      const riasecCategoryMap: { [key: string]: string } = {
        HandsOn: "Realistic",
        ProblemSolving: "Investigative",
        Curiosity: "Investigative",
        Creative: "Artistic",
        Social: "Social",
        Collaboration: "Social",
        Enterprising: "Enterprising",
        TechComfort: "Realistic",
        JobSatisfaction: "Enterprising", // Adjust based on your preference for mapping
        Conventional: "Conventional"
      };

      const riasecType = riasecCategoryMap[category];

      if (riasecType) {
        // Update RIASEC score with the corresponding weight
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
    }

    // Store response
    const updatedResponses = [
      ...userResponses,
      {
        id: currentQuestion.id,
        question: currentQuestion.question,
        answer:
          likertScale.find((option) => option.weight === weight)?.label ||
          "No Answer"
      }
    ];
    setUserResponses(updatedResponses);

    nextQuestion();
  };

  const handleMultipleChoiceAnswer = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    // For RIASEC-related questions, handle answers accordingly
    if (currentQuestion.category === "RIASEC") {
      const category = currentQuestion.field; // E.g., "HandsOn", "ProblemSolving"
      const riasecType = Object.keys(initialScores.RIASEC).find((type) =>
        Object.keys(initialScores.RIASEC[type]).includes(category)
      );

      if (riasecType) {
        // Ensure the answer is a numeric value (as required for RIASEC)
        const numericAnswer = parseInt(answer, 10); // Converts answer string to number

        setScores((prevScores) => ({
          ...prevScores,
          RIASEC: {
            ...prevScores.RIASEC,
            [riasecType]: {
              ...prevScores.RIASEC[riasecType],
              [category]: numericAnswer // Set the numeric value for the RIASEC category
            }
          }
        }));
      }
    }
    // For Preferences-related questions, handle fields like PersonalityTypes, WorkEnvironment, etc.
    if (currentQuestion.category === "Preferences") {
      const field = currentQuestion.field as PreferenceKeys; // Assert field as a valid PreferenceKeys

      // Handle non-numeric fields like PersonalityTypes, WorkEnvironment, etc.
      setScores((prevScores) => ({
        ...prevScores,
        Preferences: {
          ...prevScores.Preferences,
          [field]: [
            ...(prevScores.Preferences[field] || []), // Ensure field is an array or initialize as an empty array
            answer
          ]
        }
      }));
    }
    if (currentQuestion.category === "WorkStyle") {
      const field = currentQuestion.field as keyof WorkStyleKeys; // Assert field as a valid WorkStyle key
      console.log("answer: ", answer);
      setScores((prevScores) => ({
        ...prevScores,
        WorkStyle: {
          ...prevScores.WorkStyle,
          [field]: answer // Update the specific field with the new answer
        }
      }));
      console.log("WorkStyle: ", scores.WorkStyle);
    }

    // Store response
    const updatedResponses = [
      ...userResponses,
      { id: currentQuestion.id, question: currentQuestion.question, answer }
    ];
    setUserResponses(updatedResponses);

    nextQuestion();
  };

  // Move to next question
  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Log final scores and user responses
      console.log("Final Scores:", scores);
      console.log("User Responses:", userResponses);

      // Send the request to OpenAI
      try {
        const openAIResponse = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
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
          }
        );

        if (!openAIResponse.ok) {
          throw new Error(`OpenAI API Error: ${openAIResponse.status}`);
        }

        const openAIData = await openAIResponse.json();
        const rawContent = openAIData.choices[0]?.message?.content;
        const cleanedContent = rawContent
          ?.replace(/^```json([\s\S]*?)```$/, "$1")
          ?.replace(/^```([\s\S]*?)```$/, "$1")
          ?.trim();
        if (!cleanedContent) {
          throw new Error(
            "Failed to extract recommendations from OpenAI response."
          );
        }

        const recommendations: UserProfileData = JSON.parse(cleanedContent);
        console.log("OpenAI Recommendations:", recommendations);

        // Save all extracted career paths and details (non-O*NET data)
        setCareerRecommendations(recommendations.CareerRecommendations);

        // Extract specific careers for O*NET data fetching
        const careerNames = recommendations.CareerRecommendations.flatMap(
          (rec) => rec.listOfCareers.map((career) => career.career)
        );

        console.log("Career Names for O*NET Fetching:", careerNames);

        // Batch-fetch O*NET data for all careers
        const onetDataPromises = careerNames.map((careerName) =>
          fetch(`${import.meta.env.VITE_API_BASE_URL}/onet`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              token: token,
              keyword: careerName,
              scores: scores,
              userResponses: userResponses
            })
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(
                  `O*NET API Error: ${response.status} - ${response.statusText}`
                );
              }
              return response.json();
            })
            .catch((error) => {
              console.error(
                `Error fetching O*NET data for ${careerName}:`,
                error
              );
              return null; // Handle individual fetch failures gracefully
            })
        );

        const onetData = (await Promise.all(onetDataPromises)).filter(
          (data): data is FullCareerDetails => data !== null
        );

        console.log("O*NET Data:", onetData);

        // Update state with O*NET data
        setCareers(onetData);
      } catch (error) {
        console.error("Error in nextQuestion processing:", error);
      }
    }
  };

  const handleCareerPathClick = async (
    careerPath: string,
    listOfCareers: Career[]
  ) => {
    setSelectedCareerPath(careerPath);
    setCareerDetails([]); // Clear previous details while loading

    try {
      // Fetch details for all careers under the selected career path using the helper function
      const careerDetailsPromises = listOfCareers.map(async (career) => {
        return await fetchCareerDetails(career.career);
      });

      // Wait for all the promises to resolve
      const allCareerDetails = await Promise.all(careerDetailsPromises);

      // Filter out null responses (in case any fetch fails)
      const validCareerDetails = allCareerDetails.filter(
        (details): details is FullCareerDetails => details !== null
      );

      setCareerDetails(validCareerDetails); // Update state with valid career details
      console.log("Career Details:", validCareerDetails);
    } catch (error) {
      console.error("Error fetching career details:", error);
    }
  };

  const careerPathClickHandler = (
    careerPath: string,
    careerRecommendations: CareerRecommendation[]
  ) => {
    const selectedRecommendation = careerRecommendations.find(
      (rec) => rec.careerPath === careerPath
    );

    if (selectedRecommendation) {
      handleCareerPathClick(careerPath, selectedRecommendation.listOfCareers);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <CSSTransition
        in={careers === undefined}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div>
          <h1>Career Quiz</h1>
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.answerType === "Likert" ? (
            <div>
              {likertScale.map((option) => (
                <button
                  className="button"
                  key={option.label}
                  onClick={() => handleLikertAnswer(option.weight)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : (
            <div>
              {currentQuestion.options?.map((option) => (
                <button
                  className="button"
                  key={option}
                  onClick={() => handleMultipleChoiceAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
          <button
            className="button"
            style={{ marginTop: "80px" }}
            onClick={() => console.log(userResponses)}
          >
            print userResponses
          </button>
          <button className="button" onClick={() => console.log(scores)}>
            print scores
          </button>
        </div>
      </CSSTransition>
      {careerRecommendations && careers && careerRecommendations.length > 0 && (
        <CSSTransition
          in={careerRecommendations.length > 0}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Careers careerPaths={careerRecommendations} careersData={careers} />
        </CSSTransition>
      )}
    </div>
  );
};

export default QuizComponent;
