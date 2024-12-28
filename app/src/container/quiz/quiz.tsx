import React, { useEffect, useState } from "react";
import {
  Scores,
  FullCareerDetails,
  CareerRecommendation,
  UserResponses
} from "./quiz-types";
import { initialScores } from "./quiz-data";
import { CSSTransition } from "react-transition-group";
import Careers from "./components/careers";
import { submitQuiz } from "./helper-functions";
import CareerQuiz from "./components/CareerQuiz";
import Loader from "../../pages/Loader";

const QuizComponent: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [careers, setCareers] = useState<FullCareerDetails[]>();
  const [scores, setScores] = useState<Scores>(initialScores);
  const [userResponses, setUserResponses] = useState<UserResponses[]>([]);
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const [careerRecommendations, setCareerRecommendations] = useState<
    CareerRecommendation[]
  >([]);

  useEffect(() => {
    const submitData = async () => {
      if (userResponses.length === 19 && scores.RIASEC.Realistic) {
        setIsSubmitting(true);
        // Submit the quiz data and set the career recommendations
        await submitQuiz(
          scores,
          userResponses,
          token,
          setCareerRecommendations,
          setCareers
        );
        // After getting the career recommendations, translate them
        setIsSubmitting(false);
      }
    };

    submitData();
  }, [userResponses, scores]);

  useEffect(() => {
    console.log(isSubmitting);
  }, [isSubmitting]);
  return (
    <div>
      <CSSTransition
        in={isSubmitting}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <Loader description="AI определя най-добрите за Вас кариери, това може да отнеме около 30 секунди, моля изчакайте" />
      </CSSTransition>

      <CSSTransition
        in={careers === undefined && !isSubmitting}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <CareerQuiz
          setScores={setScores}
          setUserResponses={setUserResponses}
          userResponses={userResponses}
        />
      </CSSTransition>

      <CSSTransition
        in={
          !isSubmitting &&
          careers !== undefined &&
          careerRecommendations.length > 0
        }
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Careers
          careerPaths={careerRecommendations}
          careersData={careers || []}
        />
      </CSSTransition>
      <button
        onClick={() => {
          console.log(scores);
        }}
      >
        print scores
      </button>
      <button
        onClick={() => {
          console.log(isSubmitting);
        }}
      >
        print isSubmitting
      </button>
    </div>
  );
};

export default QuizComponent;
