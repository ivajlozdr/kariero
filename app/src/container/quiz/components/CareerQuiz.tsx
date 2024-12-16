import React, { useState } from "react";
import { CareerQuizProps } from "../quiz-types";
import { likertScale, questions } from "../quiz-data";
import {
  handleLikertAnswer,
  handleMultipleChoiceAnswer
} from "../helper-functions";

const CareerQuiz: React.FC<CareerQuizProps> = ({
  setScores,
  setUserResponses,
  userResponses
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

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
              onClick={() =>
                handleLikertAnswer(
                  option.weight,
                  questions,
                  currentQuestionIndex,
                  userResponses,
                  setScores,
                  setUserResponses,
                  nextQuestion
                )
              }
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
              onClick={() =>
                handleMultipleChoiceAnswer(
                  option,
                  questions,
                  currentQuestionIndex,
                  userResponses,
                  setScores,
                  setUserResponses,
                  nextQuestion
                )
              }
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
