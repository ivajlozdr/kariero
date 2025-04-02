import React, { useEffect, useState } from "react";
import { FullCareerDetails } from "../../types_common";
import {
  Scores,
  CareerRecommendation,
  UserResponses,
  QuizNotificationType
} from "./quiz-types";
import { initialScores } from "./quiz-data";
import { CSSTransition } from "react-transition-group";
import Careers from "./components/Careers";
import { submitQuiz } from "./helper-functions";
import CareerQuiz from "./components/CareerQuiz";
import Loader from "../../pages/Loader";
import QuizNotification from "../../components/common/notification/QuizNotification";
import { Offers } from "../jobdetails/jobs-types";

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
  const [jobOffersList, setJobOffersList] = useState<Offers[]>([]);
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
          setCareers,
          setJobOffersList
        );
        setIsSubmitting(false);
      }
    };

    setTimeout(() => {
      submitData();
    }, 500);
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
        <Loader description="AI определя най-добрите за Вас кариери, това може да отнеме около 2 минути, моля изчакайте" />
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
          jobOffersList={jobOffersList}
        />
      </CSSTransition>
    </div>
  );
};

export default QuizComponent;
