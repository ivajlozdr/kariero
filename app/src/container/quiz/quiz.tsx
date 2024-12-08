import React, { useState } from "react";
import { Scores, PreferenceKeys, WorkStyleKeys } from "./quiz-types";
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
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("You have completed the quiz!");
      // Log final scores and user responses
      console.log("Final Scores:", scores);
      console.log("User Responses:", userResponses);
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
