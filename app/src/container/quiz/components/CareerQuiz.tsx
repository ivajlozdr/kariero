import React, { useState } from "react";
import { Scores, PreferenceKeys } from "../quiz-types";
import { initialScores, likertScale, questions } from "../quiz-data";
import {
  getAnswerLabel,
  handlePreferenceAnswer,
  handleRIASECAnswer,
  handleWorkStyleAnswer
} from "../helper-functions";

interface CareerQuizProps {
  setScores: React.Dispatch<React.SetStateAction<Scores>>;
  setUserResponses: React.Dispatch<
    React.SetStateAction<{ id: number; question: string; answer: string }[]>
  >;
  userResponses: { id: number; question: string; answer: string }[];
}

const CareerQuiz: React.FC<CareerQuizProps> = ({
  setScores,
  setUserResponses,
  userResponses
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  // Handle Likert scale answers
  const handleLikertAnswer = (weight: number) => {
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
  };

  const handleMultipleChoiceAnswer = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.category === "RIASEC") {
      handleRIASECAnswer(
        currentQuestion.field,
        parseInt(answer, 10),
        setScores
      );
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
  };

  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
    </div>
  );
};

export default CareerQuiz;
