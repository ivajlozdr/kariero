import React, { useEffect, useState } from "react";
import {
  Scores,
  FullCareerDetails,
  CareerRecommendation,
  UserResponses,
  QuizNotificationType
} from "./quiz-types";
import { initialScores } from "./quiz-data";
import { CSSTransition } from "react-transition-group";
import Careers from "./components/Caareers";
import { submitQuiz } from "./helper-functions";
import CareerQuiz from "./components/CareerQuiz";
import Loader from "../../pages/Loader";
import QuizNotification from "../../components/common/notification/QuizNotification";
import { fake } from "./hardcodedTestData";
import { useNavigate } from "react-router-dom";

const QuizComponent: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [careers, setCareers] = useState<FullCareerDetails[]>();
  const [scores, setScores] = useState<Scores>(initialScores);
  const [userResponses, setUserResponses] = useState<UserResponses[]>([]);
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const [careerRecommendations, setCareerRecommendations] = useState<
    CareerRecommendation[]
  >([]);
  const [notification, setNotification] = useState<QuizNotificationType | null>(
    null
  );

  useEffect(() => {
    const submitData = async () => {
      if (userResponses.length === 19 && scores.RIASEC.Realistic) {
        setIsSubmitting(true);
        await submitQuiz(
          scores,
          userResponses,
          token,
          setCareerRecommendations,
          setCareers
        );
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
      {notification && (
        <QuizNotification
          message={notification.message}
          type={notification.type}
          onClose={() => {
            console.log("Notification closed!");
            setNotification(null);
          }}
          onConfirm={notification.onConfirm}
        />
      )}
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
          setNotification={setNotification}
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
      <button
        onClick={() => {
          navigate("/app/job/details", {
            state: { fullCareerDetails: fake }
          });
        }}
      >
        JUMP TO DETAILS
      </button>
    </div>
  );
};

export default QuizComponent;
