import React, { useState } from "react";
import { CareerPath, CareersProps } from "../quiz-types";
import CareerCard from "./CareerCard";
import CareerPathCard from "./CareerPathCard";
import { CSSTransition } from "react-transition-group";

// Основен компонент Careers
const Careers: React.FC<CareersProps> = ({
  careerPaths,
  careersData,
  setNotification
}) => {
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);
  const [showCareerCards, setShowCareerCards] = useState(true);

  const handlePathSelection = (path: CareerPath) => {
    setShowCareerCards(false); // Start hiding CareerPathCards
    setTimeout(() => {
      setSelectedPath(path); // Update the selected path after fade-out
      setShowCareerCards(true); // Show CareerCards after a short delay
    }, 300); // Matches the fade-out duration
  };

  const handleBackToPaths = () => {
    setShowCareerCards(false); // Start hiding CareerCards
    setTimeout(() => {
      setSelectedPath(null); // Reset selected path after fade-out
      setShowCareerCards(true); // Show CareerPathCards after a short delay
    }, 300); // Matches the fade-out duration
  };

  const getCareerDetailsByIndex = (index: number) => {
    return careersData[index] || null;
  };

  return (
    <div className="careers-container p-6 min-h-[500px] relative">
      <CSSTransition
        in={selectedPath === null && showCareerCards}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        {/* <div className="career-paths-container flex flex-wrap gap-6 justify-center items-center">
        </div> */}
        <div className="careers-for-path">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Подходящи за Вас сфери
          </h2>
          <div className="careers-list flex flex-wrap gap-6 justify-center items-center">
            {careerPaths.map((path, index) => (
              <CareerPathCard
                key={index}
                pathName={path.careerPath}
                reason={path.reason}
                careers={path.listOfCareers.map((career, i) => career.career)}
                onClick={() => handlePathSelection(path)}
              />
            ))}
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={selectedPath !== null && showCareerCards}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="careers-for-path">
          <button
            className="mb-6 w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg transition-all duration-300 relative overflow-hidden group hover:w-52"
            onClick={handleBackToPaths}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 absolute left-3.5 top-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>

            <span className="opacity-0 font-bold whitespace-nowrap group-hover:opacity-100 group-hover:translate-x-4 ml-6 transition-all duration-300">
              Връщане към сферите
            </span>
          </button>

          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Кариери в{" "}
            <span className="text-secondary">{selectedPath?.careerPath}</span>
          </h2>
          <div className="careers-list flex flex-wrap gap-6 justify-center items-center">
            {selectedPath?.listOfCareers.map((career, index) => {
              const careerIndex =
                index +
                3 *
                  careerPaths.findIndex(
                    (path) => path.careerPath === selectedPath?.careerPath
                  );
              const fullCareerDetails = getCareerDetailsByIndex(careerIndex);
              const careerReason = career.reason;

              return fullCareerDetails ? (
                <CareerCard
                  key={index}
                  title={fullCareerDetails.translated.title}
                  description={fullCareerDetails.translated.description}
                  skills={fullCareerDetails.translated.skills.map(
                    (skill) => skill.translated_name
                  )}
                  reason={careerReason}
                  setNotification={setNotification}
                />
              ) : (
                <div key={index} className="text-red-500">
                  Career details not found
                </div>
              );
            })}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Careers;
