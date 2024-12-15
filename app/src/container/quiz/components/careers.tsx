import React, { useState } from "react";
import { Career, FullCareerDetails } from "../quiz-types";
import CareerCard from "./CareerCard";
import CareerPathCard from "./CareerPathCard";

interface CareerPath {
  careerPath: string;
  reason: string;
  listOfCareers: Career[]; // This contains career names, not details
}

const Careers: React.FC<{
  careerPaths: CareerPath[];
  careersData: FullCareerDetails[];
}> = ({ careerPaths, careersData }) => {
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);

  // Helper function to get the full career details from careersData by index
  const getCareerDetailsByIndex = (index: number) => {
    return careersData[index] || null; // Return career details based on index
  };

  return (
    <div className="careers-container p-6 min-h-[500px]">
      {selectedPath === null ? (
        <div className="career-paths-container flex flex-wrap gap-6 justify-center items-center">
          {careerPaths.map((path, index) => (
            <CareerPathCard
              key={index}
              pathName={path.careerPath}
              reason={path.reason}
              careers={path.listOfCareers.map((career, i) => career.career)} // Just displaying the names
              onClick={() => setSelectedPath(path)}
            />
          ))}
        </div>
      ) : (
        <div className="careers-for-path">
          <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow"
            onClick={() => setSelectedPath(null)}
          >
            Back to Career Paths
          </button>
          <h2 className="text-2xl font-bold mb-6">
            Careers in {selectedPath.careerPath}
          </h2>
          <div className="careers-list flex flex-wrap gap-6 justify-center items-center">
            {selectedPath.listOfCareers.map((career, index) => {
              const careerIndex =
                index +
                3 *
                  careerPaths.findIndex(
                    (path) => path.careerPath === selectedPath?.careerPath
                  ); // Map to career index
              const fullCareerDetails = getCareerDetailsByIndex(careerIndex); // Get career details by index
              return fullCareerDetails ? (
                <CareerCard
                  key={index}
                  title={fullCareerDetails.translated.title}
                  description={fullCareerDetails.translated.description}
                  skills={fullCareerDetails.translated.skills.map(
                    (skill) => skill.translated_name
                  )}
                />
              ) : (
                <div key={index} className="text-red-500">
                  Career details not found
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
