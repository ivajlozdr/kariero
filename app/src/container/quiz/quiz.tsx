import React, { useState } from "react";
import {
  Scores,
  PreferenceKeys,
  WorkStyleKeys,
  Career,
  CareerRecommendation,
  UserProfileData
} from "./quiz-types";
import { likertScale, questions } from "./quiz-data";

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
  const [scores, setScores] = useState<Scores>(initialScores);
  const [userResponses, setUserResponses] = useState<
    { question: string; answer: string }[]
  >([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

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
      { question: currentQuestion.question, answer }
    ];
    setUserResponses(updatedResponses);

    nextQuestion();
  };

  // Move to next question
  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("You have completed the quiz!");

      // Log final scores and user responses
      console.log("Final Scores:", scores);
      console.log("User Responses:", userResponses);

      // Send the request to OpenAI
      try {
        // const response = await fetch(
        //   "https://api.openai.com/v1/chat/completions",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}` // Replace with your actual key
        //     },
        //     body: JSON.stringify({
        //       model: "gpt-4o-2024-08-06",
        //       messages: [
        //         {
        //           role: "system",
        //           content:
        //             "You are a career guidance assistant. You will analyse thoroughly data given to you and based off it you will provide accurate, personalised career path recommendations. Your response will always be only a valid JSON object, that is in the following structure: { Abilities:[ Array of at least 4 strings ], Skills:[ Array of at least 4 strings ], Knowledge:[ Array of at least 4 strings ], Interests:[ Array of at least 4 strings ], WorkStyle:[ Array of at least 4 strings ], WorkValues:[ Array of at least 4 strings ], TechnologySkills:[ Array of at least 4 strings ], CareerRecommendations:[{careerPath:string,reason:string,listOfCareers:[{career:string,reason:string},{career:string,reason:string},{career:string,reason:string},{career:string,reason:string},{career:string,reason:string}]},{careerPath:string,reason:string,listOfCareers:[{career:string,reason:string},{career:string,reason:string},{career:string,reason:string},{career:string,reason:string},{career:string,reason:string}]},{careerPath:string,reason:string,listOfCareers:[{career:string,reason:string},{career:string,reason:string},{career:string,reason:string},{career:string,reason:string},{career:string,reason:string}]}] }. Provide a comprehensive explanation as to why the specific career is right for the individual under the 'reason' property. When you provide the arrays for Abilities, Skills, Knowledge, Interests, Work Style, Work Values, and Technology Skills, make sure they are accurately derived from the data of the user prompt. Make sure everything is also compatible with O*NET's API data, especially for the Abilities, Skills, Knowledge, Interests, Work Style, Work Values, and Technology Skills! It is important you do not miss-match categories. When providing careers, make sure career path is a broad keyword, that when searched for in the O*NET API, shows the careers listed in listOfCareers. Each career in listOfCareers should be a SPECIFIC CAREER WITH ITS OWN CAREER CODE in the O*NET API, not a keyword."
        //         },
        //         {
        //           role: "user",
        //           content: `Base your recommendations off this JSON object: ${JSON.stringify(
        //             scores
        //           )}. Here is a thorough explanation of everything inside the object, which you must understand before making your recommendation. The RIASEC object contains values based on the RIASEC model. These numeric values typically range from 0 to 10, representing extremes; values outside this range are rare and indicate very extreme tendencies. Use these RIASEC values to determine the user's work personality and consider them when suggesting career paths. The Preferences object provides details about the user's preferences for their dream career. It includes the user's personality type, preferred work environment, job priorities, education level, and career goals. The personality type describes the user’s overarching traits, while the work environment highlights their ideal workplace conditions. The job priority array outlines what the user values most in their career. The education level specifies their degree type, and career goals describe the role the user aspires to achieve in their career. The WorkStyle object details the user's working preferences. StructurePreference indicates whether they prefer a structured, hierarchical career or a more flexible one. Collaboration reveals if they prefer teamwork or working individually. WorkEnvironment shows whether they thrive in a fast-paced and dynamic environment or prefer a stable and predictable setting.`
        //         }
        //       ]
        //     })
        //   }
        // );

        // if (!response.ok) {
        //   throw new Error(`Error: ${response.status} - ${response.statusText}`);
        // }

        // const data = await response.json();
        // const json = data.choices[0].message.content;
        // const unescapedData = json
        //   .replace(/^```json([\s\S]*?)```$/, "$1")
        //   .replace(/^```JSON([\s\S]*?)```$/, "$1")
        //   .replace(/^```([\s\S]*?)```$/, "$1")
        //   .replace(/^'|'$/g, "")
        //   .trim();
        // console.log("unescapedData: ", unescapedData);
        // const decodedData = decodeURIComponent(unescapedData);
        // console.log("decodedData: ", decodedData);
        // const recommendations: UserProfileData = JSON.parse(decodedData);
        // console.log("recommendations: ", recommendations);
        const recommendations: UserProfileData = {
          Abilities: [
            "Oral Expression",
            "Written Expression",
            "Problem Sensitivity",
            "Deductive Reasoning"
          ],
          Skills: [
            "Coordination",
            "Active Listening",
            "Time Management",
            "Judgment and Decision Making"
          ],
          Knowledge: [
            "Customer and Personal Service",
            "Sales and Marketing",
            "Administration and Management",
            "English Language"
          ],
          Interests: ["Enterprising", "Social", "Conventional", "Artistic"],
          WorkStyle: [
            "Leadership",
            "Dependability",
            "Cooperation",
            "Adaptability/Flexibility"
          ],
          WorkValues: [
            "Achievement",
            "Recognition",
            "Independence",
            "Working Conditions"
          ],
          TechnologySkills: [
            "Spreadsheet software",
            "Electronic mail software",
            "Data base user interface and query software",
            "Document management software"
          ],
          CareerRecommendations: [
            {
              careerPath: "Management",
              reason:
                "Your interest in leadership roles, preference for a dynamic and flexible environment, and enterprising nature align well with careers in management. These roles often require coordination, decision-making, and an understanding of business operations, matching your strengths and career goals.",
              listOfCareers: [
                {
                  career: "Administrative Services Managers",
                  reason:
                    "Perfect for someone who values structure and organization while leading teams and managing operations."
                },
                {
                  career: "Marketing Managers",
                  reason:
                    "Combines creative leadership with strategic planning, ideal for your enterprising and creative preferences."
                },
                {
                  career: "Sales Managers",
                  reason:
                    "Aligns with your social and conventional strengths, requiring leadership and decision-making in a dynamic environment."
                },
                {
                  career: "General and Operations Managers",
                  reason:
                    "Offers a blend of administrative, strategic, and leadership opportunities in various industries."
                },
                {
                  career: "Human Resources Managers",
                  reason:
                    "Utilizes your social skills and leadership interests in managing and organizing workforce dynamics."
                }
              ]
            },
            {
              careerPath: "Sales and Marketing",
              reason:
                "Your combination of social skills, interest in leadership, and background in conventional roles makes you a great fit for a career in sales and marketing. These careers reward creativity, achievement, and offer leadership pathways.",
              listOfCareers: [
                {
                  career: "Sales Engineers",
                  reason:
                    "Requires technical understanding and social interaction, perfectly fitting your ease with conventional roles and leadership opportunities."
                },
                {
                  career: "Real Estate Sales Agents",
                  reason:
                    "Combines enterprising and social skills in a dynamic field, allowing creative problem-solving and independence."
                },
                {
                  career: "Market Research Analysts and Marketing Specialists",
                  reason:
                    "Leverages analytical thinking and marketing knowledge while working in teams or individually."
                },
                {
                  career: "Advertising Sales Agents",
                  reason:
                    "Aligns with your creative and social interests in promoting and selling advertising space."
                },
                {
                  career: "Public Relations Specialists",
                  reason:
                    "Leverages your social and enterprising skills to create and maintain a favorable public image."
                }
              ]
            },
            {
              careerPath: "Human Resources",
              reason:
                "Given your social aptitude and leadership goal, a career in human resources would leverage both, allowing you to lead by managing and supporting the development of personnel.",
              listOfCareers: [
                {
                  career: "Training and Development Managers",
                  reason:
                    "Combines leadership with the development of personnel within organizations, appealing to your interest in dynamic environments."
                },
                {
                  career:
                    "Compensation, Benefits, and Job Analysis Specialists",
                  reason:
                    "Involves detailed analysis and management of employee benefits, an excellent fit with your conventional mindset."
                },
                {
                  career: "Labor Relations Specialists",
                  reason:
                    "Utilizes your cooperative work style in resolving labor disputes and negotiating agreements."
                },
                {
                  career: "Human Resources Specialists",
                  reason:
                    "Focuses on recruiting, interviewing, and placing workers, which matches your social preferences and leadership aspiration."
                },
                {
                  career: "Recruitment Specialists",
                  reason:
                    "Requires understanding of roles and organizational needs, combining enterprising and social elements."
                }
              ]
            }
          ]
        };
        const careerNames: string[] =
          recommendations.CareerRecommendations.flatMap(
            (rec: CareerRecommendation) =>
              rec.listOfCareers.map((career: Career) => career.career)
          );

        console.log(careerNames);
        if (careerNames.length > 0) {
          const firstCareerName = careerNames[0];
          const apiResponse = await fetch(
            `${
              import.meta.env.VITE_API_BASE_URL
            }/onet?keyword=${encodeURIComponent(firstCareerName)}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            }
          );

          if (!apiResponse.ok) {
            throw new Error(
              `O*NET API Error: ${apiResponse.status} - ${apiResponse.statusText}`
            );
          }

          const onetData = await apiResponse.json();
          console.log("data: ", onetData);
        } else {
          console.warn("No career names found in OpenAI recommendations.");
        }
      } catch (error) {
        console.error("Error sending request to OpenAI:", error);
      }
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
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
  );
};

export default QuizComponent;
