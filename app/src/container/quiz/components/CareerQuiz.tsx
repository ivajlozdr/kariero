import type React from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import type { CareerQuizProps } from "../quiz-types";
import { likertScale, questions } from "../quiz-data";
import {
  handleLikertAnswer,
  handleMultipleChoiceAnswer
} from "../helper-functions";
import Info from "../../../components/common/info/Info";
import { InfoModal } from "../../../components/common/info/InfoModal";

const CareerQuiz: React.FC<CareerQuizProps> = ({
  setScores,
  setUserResponses,
  userResponses
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showQuestion, setShowQuestion] = useState<boolean>(true);
  const [isOnCooldown, setIsOnCooldown] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const nextQuestion = async () => {
    if (isOnCooldown) return;
    setIsOnCooldown(true);
    if (currentQuestionIndex < questions.length - 1) {
      setShowQuestion(false);
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setShowQuestion(true);
        setIsOnCooldown(false);
      }, 500);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleInfoClick = () => {
    setIsInfoOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full mb-4 bg-secondary/10 border border-secondary/20 rounded-lg">
        <div className="p-4 flex items-center">
          <div className="flex-1">
            <p className="text-lg text-secondary">
              Какво представлява този тест?
            </p>
          </div>
          <div className="relative">
            <Info onClick={handleInfoClick} />
          </div>
        </div>
      </div>

      <div className="max-w-3xl w-full bg-bodybg hadow-xl rounded-xl p-8 pb-2 relative">
        <h1 className="text-3xl font-bold text-secondary text-center mb-4">
          Кариерно Насочване
        </h1>

        <div className="mb-2">
          <div className="w-full bg-secondary/25 rounded-full h-2.5">
            <div
              className="bg-secondary h-2.5 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-textmuted">
            <span>Въпрос {currentQuestionIndex + 1}</span>
            <span>от {questions.length}</span>
          </div>
        </div>

        <div className="text-center italic mb-2 text-sm text-defaulttextcolor/60">
          <p>
            {currentQuestion.answerType === "Likert"
              ? "Моля, изберете отговор, който най-точно отразява степента на вашето съгласие с всяко твърдение."
              : "Моля, изберете опцията, която най-добре отразява вашето мнение или предпочитание."}
          </p>
        </div>

        <div className="mb-8">
          <CSSTransition
            in={showQuestion}
            timeout={500}
            classNames="fade-no-transform"
            unmountOnExit
          >
            <h2 className="text-2xl font-medium text-defaulttextcolor/85 text-center mb-4 py-2 border-b border-black/85 dark:border-defaultborder/85">
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
                <div className="flex flex-col items-center space-y-3">
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
                      className="w-full bg-primary hover:bg-secondary text-white py-3.5 px-5 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg font-medium"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="bg-primary hover:bg-secondary text-white py-3.5 px-5 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg font-medium"
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
      <InfoModal
        onClick={handleInfoClick}
        isModalOpen={isInfoOpen}
        title={<span className="text-secondary">Кариерно Насочване</span>}
        description={
          <div className="space-y-4">
            <p className="leading-relaxed">
              <span className="font-semibold text-secondary">
                Въпросникът за кариерно насочване
              </span>{" "}
              в нашето приложение се базира на{" "}
              <span className="font-semibold text-primary">
                научно доказан модел – RIASEC
              </span>
              , който оценява{" "}
              <span className="font-semibold">личностни характеристики</span> и{" "}
              <span className="font-semibold">професионални наклонности</span>.
            </p>

            <div>
              <p className="mb-2 font-medium">
                Той класифицира хората в следните шест категории:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-5 list-none">
                {[
                  { icon: "ti ti-building", text: "Реалистичен" },
                  { icon: "ti ti-microscope", text: "Инвестигативен" },
                  { icon: "ti ti-palette", text: "Артистичен" },
                  { icon: "ti ti-users", text: "Социален" },
                  { icon: "ti ti-chart-bar", text: "Инициативен" },
                  { icon: "ti ti-clipboard", text: "Конвенционален" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 py-1">
                    <i className={`${item.icon} text-primary`}></i>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="leading-relaxed">
              Въпросите съдържат твърдения, като потребителят трябва да{" "}
              <span className="font-semibold text-primary">
                избере стойност
              </span>
              , която най-добре го отразява. Отговорите се подават на нашия
              алгоритъм за оценка, който анализира резултатите и присвоява точки
              към съответните категории на RIASEC.
            </p>

            <div className="bg-white dark:bg-bodybg2 p-4 rounded-lg border-l-4 border-primary">
              <p className="leading-relaxed">
                Накрая, тази информация се обработва от изкуствен интелект,
                който генерира{" "}
                <span className="font-semibold text-secondary">
                  персонализирани препоръки
                </span>
                , съобразени с вашите индивидуални характеристики и
                предпочитания.
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default CareerQuiz;
