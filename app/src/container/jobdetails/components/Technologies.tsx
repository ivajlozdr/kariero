import { FC, useState } from "react";
import { CommonCareerProps } from "../../../types_common";
import { filterHotTechnology } from "../helper-functions";
import Tooltip from "../../../components/common/tooltip/Tooltip";
import { InfoModal } from "../../../components/common/info/InfoModal";
import Info from "../../../components/common/info/Info";

const Technologies: FC<CommonCareerProps> = ({ fullCareerDetails }) => {
  const { hotTechnologies, regularTechnologies } =
    filterHotTechnology(fullCareerDetails);

  const allTechnologies = [...hotTechnologies, ...regularTechnologies];
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);
  const handleInfoClick = () => {
    setIsInfoOpen((prev) => !prev);
  };
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
              <span>Гореща технология</span>
              <div className="ml-2 relative group transition-all duration-300 ease-in-out">
                <Info onClick={handleInfoClick} width={15} height={15} />
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
                <Tooltip message={tech.category} />
              </div>
            ))
          ) : (
            <div className="text-center text-neutral-400 dark:text-neutral-600">
              Няма налични технологии.
            </div>
          )}
        </div>
      </div>
      <InfoModal
        onClick={handleInfoClick}
        isModalOpen={isInfoOpen}
        title={
          <span className="text-secondary flex items-center">
            <i className="ti ti-flame text-orange-500 mr-2"></i>
            Горещи технологии
          </span>
        }
        description={
          <div className="space-y-6">
            <div className="flex items-start">
              <i className="ti ti-trending-up text-red-500 text-xl mt-1 mr-3"></i>
              <p className="leading-relaxed text-base">
                „Горещи технологии" са{" "}
                <span className="font-semibold text-primary">
                  софтуерни и технологични изисквания
                </span>
                , които най-често се включват в{" "}
                <span className="font-semibold text-secondary">
                  обявите за работа
                </span>{" "}
                от работодатели.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "ti ti-brand-react",
                  title: "Frontend",
                  items: ["React", "Vue.js", "Angular", "TypeScript"]
                },
                {
                  icon: "ti ti-server",
                  title: "Backend",
                  items: ["Node.js", "Python", "Java", "Go"]
                },
                {
                  icon: "ti ti-cloud",
                  title: "Cloud & DevOps",
                  items: ["AWS", "Docker", "Kubernetes", "CI/CD"]
                },
                {
                  icon: "ti ti-database",
                  title: "Бази данни",
                  items: ["SQL", "MongoDB", "Redis", "PostgreSQL"]
                }
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  <div className="flex items-center mb-2">
                    <i
                      className={`${category.icon} text-primary text-xl mr-2`}
                    ></i>
                    <h3 className="font-medium">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-5 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center">
                <i className="ti ti-bulb text-orange-500 text-xl mr-2"></i>
                <h3 className="font-semibold">Защо са важни?</h3>
              </div>
              <p className="mt-2 text-sm">
                Познаването на горещите технологии може значително да увеличи
                шансовете ви за намиране на работа и да повиши потенциалната ви
                заплата. Нашият тест ще ви помогне да определите кои
                технологични области най-добре съответстват на вашите интереси и
                умения.
              </p>
            </div>

            <div className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <i className="ti ti-chart-bar text-primary mr-2"></i>
              <p className="text-sm italic">
                Данните за горещите технологии се актуализират редовно въз
                основа на анализ на пазара на труда и тенденциите в индустрията.
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Technologies;
