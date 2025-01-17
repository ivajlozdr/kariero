import { FullCareerDetails } from "../../quiz/quiz-types";
import { filterHotTechnology } from "../helper-functions";

const Technologies = ({
  fullCareerDetails
}: {
  fullCareerDetails: FullCareerDetails;
}) => {
  const hotTechnologies = filterHotTechnology(fullCareerDetails);

  return (
    <div className="box custom-box bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800">
      <div className="box-body space-y-8 p-6">
        <h5 className="font-semibold text-lg text-primary">
          Технологии, срещани в тази кариера
        </h5>

        <div className="flex flex-wrap gap-4 mt-4">
          {hotTechnologies.length > 0 ? (
            hotTechnologies.map((tech, index) => (
              <div
                key={index}
                className="tech-chip py-2 px-4 rounded-full text-white bg-primary dark:bg-primary-dark shadow-md hover:bg-primary-light hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                <div className="tech-chip-content flex items-center space-x-2">
                  <i className="ti ti-code text-lg"></i>
                  <span className="font-semibold">{tech}</span>
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
