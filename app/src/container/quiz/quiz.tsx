import React, { useEffect, useState } from "react";
import { Scores, FullCareerDetails } from "./quiz-types";
import { initialScores } from "./quiz-data";
import { CSSTransition } from "react-transition-group";
import Careers from "./components/careers";
import { fetchOnetData, fetchOpenAIResponse } from "./helper-functions";
import CareerQuiz from "./components/CareerQuiz";

const QuizComponent: React.FC = () => {
  const [careers, setCareers] = useState<FullCareerDetails[]>();
  const [scores, setScores] = useState<Scores>(initialScores);
  const [userResponses, setUserResponses] = useState<
    { id: number; question: string; answer: string }[]
  >([]);
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const [careerRecommendations, setCareerRecommendations] = useState<any[]>([]);

  useEffect(() => {
    if (userResponses.length === 19 && scores.RIASEC.Realistic) {
      submitQuiz();
    }
  }, [userResponses, scores]);

  const submitQuiz = async () => {
    try {
      console.log("Final Scores:", scores);
      console.log("User Responses:", userResponses);

      const recommendations = await fetchOpenAIResponse(scores);
      if (!recommendations) {
        throw new Error("Failed to fetch career recommendations from OpenAI.");
      }

      console.log("OpenAI Recommendations:", recommendations);

      setCareerRecommendations(recommendations.CareerRecommendations);

      const careerNames = recommendations.CareerRecommendations.flatMap((rec) =>
        rec.listOfCareers.map((career) => career.career)
      );

      console.log("Career Names for O*NET Fetching:", careerNames);

      const onetData = await fetchOnetData(
        careerNames,
        scores,
        userResponses,
        token
      );
      console.log("O*NET Data:", onetData);

      setCareers(onetData);
    } catch (error) {
      console.error("Error in submitQuiz processing:", error);
    }
  };

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
