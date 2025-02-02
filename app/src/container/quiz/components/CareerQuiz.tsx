import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
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
  const [showQuestion, setShowQuestion] = useState<boolean>(true);

  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setShowQuestion(false);
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setShowQuestion(true);
      }, 500);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-bodybg shadow-lg rounded-lg p-8 relative">
        <h1 className="text-3xl font-bold text-secondary text-center mb-4">
          Кариерно Насочване
        </h1>

        <div>
          <CSSTransition
            in={showQuestion}
            timeout={500}
            classNames="fade-no-transform"
            unmountOnExit
          >
            <h2 className="text-lg font-medium text-defaulttextcolor/70 text-center mb-6">
              {currentQuestion.question}
            </h2>
          </CSSTransition>
          <CSSTransition
            in={showQuestion}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div className="space-y-4">
              {currentQuestion.answerType === "Likert" ? (
                <div className="flex flex-col items-center space-y-2">
                  {likertScale.map((option) => (
                    <button
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
                      className="w-full bg-primary hover:bg-secondary text-white py-3 px-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {currentQuestion.options?.map((option) => (
                    <button
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
                      className="bg-primary hover:bg-secondary text-white py-3 px-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default CareerQuiz;
