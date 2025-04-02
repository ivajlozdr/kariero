import { FC, useMemo } from "react";
import Widget from "./Widget";
import { useGlobalState } from "../../../pages/GlobalStateProvider";
import Redirect from "../../../components/common/redirect/Redirect";

type CategoryKey =
  | "mostNeededAbilities"
  | "mostNeededKnowledge"
  | "mostNeededSkills"
  | "mostNeededTasks"
  | "mostNeededTechnologySkills"
  | "mostNeededWorkActivities";

interface MostNeededCardsProps {
  dataType: "individual" | "platform";
}

const MostNeededCards: FC<MostNeededCardsProps> = ({ dataType }) => {
  const { data } = useGlobalState();
  const categories: { title: string; key: CategoryKey; icon: string }[] = [
    {
      title: "Най-често изисквана способност",
      key: "mostNeededAbilities",
      icon: "ti ti-user-star"
    },
    {
      title: "Най-често изисквано познание",
      key: "mostNeededKnowledge",
      icon: "ti ti-brain"
    },
    {
      title: "Най-често изисквано умение",
      key: "mostNeededSkills",
      icon: "ti ti-book"
    },
    {
      title: "Най-често изисквано технологично умение",
      key: "mostNeededTechnologySkills",
      icon: "ti ti-device-imac-code"
    },
    {
      title: "Най-често изисквана трудова дейност",
      key: "mostNeededWorkActivities",
      icon: "ti ti-pencil-star"
    }
  ];

  const hasData = useMemo(() => {
    return (
      dataType !== "individual" ||
      (data.mostNeededAbilities?.individual?.length ?? 0) > 0 ||
      (data.mostNeededKnowledge?.individual?.length ?? 0) > 0 ||
      (data.mostNeededSkills?.individual?.length ?? 0) > 0 ||
      (data.mostNeededTechnologySkills?.individual?.length ?? 0) > 0 ||
      (data.mostNeededWorkActivities?.individual?.length ?? 0) > 0
    );
  }, [dataType, data]);

  if (dataType === "individual" && !hasData) {
    return <Redirect />;
  }

  return (
    <div className="accordion accordionicon-left accordions-items-separate mt-6">
      <div className="hs-accordion-group" data-hs-accordion-always-open="">
        <div className="hs-accordion accordion-item overflow-hidden active mb-6">
          <button
            className="hs-accordion-toggle accordion-button hs-accordion-active:pb-4 group inline-flex items-center gap-x-4 w-full font-bold text-lg text-start transition py-3 px-4"
            type="button"
          >
            <svg
              className="hs-accordion-active:hidden block w-3 h-3"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:block hidden w-3 h-3"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <div className="accordion-title">
              Най-често изисквани качества в платформата
            </div>
          </button>
          <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
            <div className="accordion-body">
              {categories.map(({ title, key, icon }) => {
                const item = data[key][dataType]?.[0];
                const name = item?.name_bg || "Няма данни";
                const count = item?.occurrence_count ?? 0;

                return (
                  <Widget
                    key={key}
                    title={title}
                    value={name}
                    subValue={count}
                    icon={icon}
                    accordionItem
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostNeededCards;
