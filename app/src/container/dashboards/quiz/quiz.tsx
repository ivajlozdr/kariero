import { FC, Fragment, useState, useEffect } from "react";
import Careers from "./careers"; // Import the Careers component

const options = [
  { label: "Strongly Agree", size: "scale-150", borderColor: "#A1CDA8" },
  { label: "Agree", size: "scale-125", borderColor: "#A1CDA8" },
  { label: "Slightly Agree", size: "scale-100", borderColor: "#A1CDA8" },
  { label: "Neutral", size: "scale-75", borderColor: "gray" },
  { label: "Slightly Disagree", size: "scale-100", borderColor: "#AD9BAA" },
  { label: "Disagree", size: "scale-125", borderColor: "#AD9BAA" },
  { label: "Strongly Disagree", size: "scale-150", borderColor: "#AD9BAA" }
];

const Quiz: FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [pulse, setPulse] = useState(false);
  const [fade, setFade] = useState(false);
  const [buttonFade, setButtonFade] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalFade, setFinalFade] = useState(false); // State for final fade

  const questions = [
    { question: "I enjoy working in a team environment.", options },
    { question: "I prefer working independently.", options },
    { question: "I like taking on leadership roles.", options }
  ];

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer !== answer) {
      setPulse(true);
      setSelectedAnswer(answer);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setButtonFade(true);
      setFade(true);

      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setPulse(false);
        setFade(false);
        setButtonFade(false);
      }, 500);
    } else {
      setFinalFade(true); // Trigger final fade out for the entire quiz
      setButtonFade(true);

      setTimeout(() => {
        setQuizFinished(true); // Set quiz as finished after fade
      }, 500);
    }
  };

  useEffect(() => {
    if (pulse) {
      const timeout = setTimeout(() => setPulse(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [pulse]);

  if (quizFinished) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Careers /> {/* Display the careers when the quiz is finished */}
      </div>
    );
  }

  return (
    <Fragment>
      <div
        className={`min-h-screen flex flex-col justify-center items-center ${
          finalFade ? "fade-out" : ""
        }`}
      >
        <p className={`h5 font-semibold mb-2 text-center`}>
          Quiz: Career Guidance
        </p>
        <div className={`mb-4 text-center ${fade ? "fade-out" : "fade-in"}`}>
          <p className="mb-4">{questions[currentQuestionIndex]?.question}</p>
        </div>
        <div className="flex items-center mb-4 gap-4">
          <span
            style={{
              color: "#A1CDA8",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginRight: "30px"
            }}
          >
            Да
          </span>
          <div className="flex justify-center gap-8 flex-grow">
            {questions[currentQuestionIndex]?.options.map((option, index) => {
              const buttonSize =
                option.size === "scale-150"
                  ? { width: "100px", height: "100px" }
                  : option.size === "scale-125"
                  ? { width: "80px", height: "80px" }
                  : option.size === "scale-100"
                  ? { width: "60px", height: "60px" }
                  : option.size === "scale-75"
                  ? { width: "40px", height: "40px" }
                  : { width: "60px", height: "60px" };

              return (
                <div
                  key={index}
                  className="pulse-ring"
                  style={{ height: "120px" }}
                >
                  <button
                    className={`flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                      selectedAnswer === option.label ? "selected" : ""
                    }`}
                    style={{
                      borderColor: option.borderColor,
                      borderWidth: "3px",
                      color: option.borderColor,
                      backgroundColor:
                        selectedAnswer === option.label
                          ? option.borderColor
                          : "transparent",
                      width: buttonSize.width,
                      height: buttonSize.height
                    }}
                    onClick={() => handleAnswerSelect(option.label)}
                  >
                    {selectedAnswer === option.label && pulse && (
                      <div
                        className="pulse-effect"
                        style={{
                          width: buttonSize.width,
                          height: buttonSize.height
                        }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
          <span
            style={{
              color: "#AD9BAA",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginLeft: "30px"
            }}
          >
            Не
          </span>
        </div>
        <div className="mt-4 text-center">
          <button
            className={`ti-btn ti-btn-primary w-full py-2 rounded-lg next-question ${
              buttonFade ? "fade-out" : "fade-in"
            }`}
            onClick={handleNextQuestion}
            style={{ visibility: selectedAnswer ? "visible" : "hidden" }}
          >
            Следващ въпрос
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Quiz;
