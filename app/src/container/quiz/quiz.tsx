import React, { useEffect, useState } from "react";
import {
  Scores,
  FullCareerDetails,
  CareerRecommendation,
  userResponses
} from "./quiz-types";
import { initialScores } from "./quiz-data";
import { CSSTransition } from "react-transition-group";
import Careers from "./components/careers";
import { submitQuiz } from "./helper-functions";
import CareerQuiz from "./components/CareerQuiz";

const QuizComponent: React.FC = () => {
  const [careers, setCareers] = useState<FullCareerDetails[]>();
  const [scores, setScores] = useState<Scores>(initialScores);
  const [userResponses, setUserResponses] = useState<userResponses[]>([]);
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const [careerRecommendations, setCareerRecommendations] = useState<
    CareerRecommendation[]
  >([]);

  useEffect(() => {
    if (userResponses.length === 19 && scores.RIASEC.Realistic) {
      submitQuiz(
        scores,
        userResponses,
        token,
        setCareerRecommendations,
        setCareers
      );
    }
  }, [userResponses, scores]);

  return (
    <div>
      <CSSTransition
        in={careers === undefined}
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
