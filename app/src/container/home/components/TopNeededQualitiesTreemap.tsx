import { FC, Fragment, useState } from "react";
import { QualitiesCategory } from "../home-types";
import { handleTopStatsSortCategory } from "../helper_functions";
import { Treemap } from "./Charts";
import { useGlobalState } from "../../../pages/GlobalStateProvider";

interface TopNeededQualitiesTreemapProps {
  dataType: "individual" | "platform";
}

const TopNeededQualitiesTreemap: FC<TopNeededQualitiesTreemapProps> = ({ dataType }) => {
  const { data } = useGlobalState();
  const [topStatsSortCategory, setTopStatsSortCategory] = useState<QualitiesCategory>("Abilities");

  const QualitiesCategoryDisplayNames: Record<QualitiesCategory, string> = {
    Abilities: "Способности",
    Knowledge: "Знания",
    Skills: "Умения",
    TechnologySkills: "Технологични умения",
    WorkActivities: "Трудови дейности"
  };

  const getTreemapDataToUse = () => {
    switch (topStatsSortCategory) {
      case "Abilities":
        return data.mostNeededAbilities[dataType];
      case "Knowledge":
        return data.mostNeededKnowledge[dataType];
      case "Skills":
        return data.mostNeededSkills[dataType];
      case "TechnologySkills":
        return data.mostNeededTechnologySkills[dataType];
      case "WorkActivities":
        return data.mostNeededWorkActivities[dataType];
      default:
        return [];
    }
  };

  return (
    <Fragment>
      <div className="xl:col-span-6 col-span-12 mt-6">
        <div className="box custom-box h-[30rem]">
          <div className="box-header justify-between">
            <div className="box-title">
              Най-изисквани{" "}
              {
                QualitiesCategoryDisplayNames[
                  topStatsSortCategory as keyof typeof QualitiesCategoryDisplayNames
                ]
              }
            </div>
            <div className="flex flex-wrap gap-2">
              <div
                className="inline-flex rounded-md shadow-sm"
                role="group"
                aria-label="Sort By"
              >
                {(
                  [
                    "Abilities",
                    "Knowledge",
                    "Skills",
                    "TechnologySkills",
                    "WorkActivities"
                  ] as QualitiesCategory[]
                ).map((category, index) => (
                  <button
                    key={category}
                    type="button"
                    className={`ti-btn-group !border-0 !text-xs !py-2 !px-3 ${
                      category === topStatsSortCategory
                        ? "ti-btn-primary-full text-white"
                        : "charts-options-unselected"
                    } ${
                      index === 0
                        ? "rounded-l-md"
                        : index === 2
                        ? "rounded-r-md"
                        : ""
                    }`}
                    onClick={() =>
                      handleTopStatsSortCategory(
                        category,
                        setTopStatsSortCategory
                      )
                    }
                  >
                    {
                      QualitiesCategoryDisplayNames[
                        category as keyof typeof QualitiesCategoryDisplayNames
                      ]
                    }
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="box-body flex justify-center items-center">
            <div id="treemap-basic" className="w-full">
              <Treemap
                data={getTreemapDataToUse() ?? []}
                role={topStatsSortCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TopNeededQualitiesTreemap;
