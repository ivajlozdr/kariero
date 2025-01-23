import React from "react";
import { FullCareerDetails } from "../../quiz/quiz-types";
import { filterHotTechnology } from "../helper-functions";

interface Props {
  fullCareerDetails: FullCareerDetails;
}

const Technologies: React.FC<Props> = ({ fullCareerDetails }) => {
  const { hotTechnologies, regularTechnologies } =
    filterHotTechnology(fullCareerDetails);

  const allTechnologies = [...hotTechnologies, ...regularTechnologies];

  return (
    <div className="box custom-box bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800">
      <div className="box-body space-y-8 pt-6">
        <div>
          <h5 className="font-semibold text-lg text-primary">
            Технологии, използвани в тази кариера
          </h5>
          <div className="flex justify-center items-center">
            <div className="flex items-center mr-4">
              <span className="w-3 h-3 mr-1 rounded-full inline-block bg-primary"></span>
              <span>Технология</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 mr-1 rounded-full inline-block bg-secondary"></span>
              <span>"Hot" Технология</span>
              <div
                className="ml-2"
                title="Професиите с ярко бъдеще се очакват да растат бързо през следващите няколко години, имат голям брой свободни работни места или са нови и възникващи професии."
              >
                <i className="ti ti-info-circle text-[1rem] text-secondary"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          {allTechnologies.length > 0 ? (
            allTechnologies.map((tech, index) => (
              <div
                key={index}
                className={`tech-chip relative group py-2 px-4 rounded-full text-white ${
                  hotTechnologies.some((item) => item.name === tech.name)
                    ? "bg-secondary dark:bg-secondary-dark"
                    : "bg-primary dark:bg-primary-dark"
                } shadow-md hover:bg-${
                  hotTechnologies.some((item) => item.name === tech.name)
                    ? "secondary-light"
                    : "primary-light"
                } hover:scale-105 transform transition-all duration-300 ease-in-out`}
              >
                <div className="tech-chip-content flex items-center space-x-2">
                  <i className="ti ti-code text-lg"></i>
                  <span className="font-semibold">{tech.name}</span>
                </div>
                <div
                  className="absolute bg-white dark:bg-[#313335] bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1 text-defaulttextcolor text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none shadow-lg"
                  role="tooltip"
                >
                  <span className="block text-center">{tech.category}</span>
                  <div
                    className="absolute bg-white dark:bg-[#313335] top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-neutral-400 dark:text-neutral-600">
              Няма налични технологии.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
