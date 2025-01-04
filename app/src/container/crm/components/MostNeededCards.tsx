import { FC } from "react";
import { DataType } from "../home-types";
import Widget from "./Widget";

interface WidgetCardsComponentProps {
  data: DataType;
}

type CategoryKey =
  | "mostNeededAbilities"
  | "mostNeededKnowledge"
  | "mostNeededSkills"
  | "mostNeededTasks"
  | "mostNeededTechnologySkills"
  | "mostNeededWorkActivities";

const MostNeededCards: FC<WidgetCardsComponentProps> = ({ data }) => {
  const categories: { title: string; key: CategoryKey; icon: string }[] = [
    {
      title: "Най-често изисквани способности",
      key: "mostNeededAbilities",
      icon: "bx bx-line-chart"
    },
    {
      title: "Най-често изисквани знания",
      key: "mostNeededKnowledge",
      icon: "bx bx-book"
    },
    {
      title: "Най-често изисквани умения",
      key: "mostNeededSkills",
      icon: "bx bx-brain"
    },
    {
      title: "Най-често изисквани технологични умения",
      key: "mostNeededTechnologySkills",
      icon: "bx bx-desktop"
    },
    {
      title: "Най-често изисквани работни дейности",
      key: "mostNeededWorkActivities",
      icon: "bx bx-briefcase"
    }
  ];

  return (
    <div className="accordion accordionicon-left accordions-items-separate">
      <div className="hs-accordion-group" data-hs-accordion-always-open="">
        <div className="hs-accordion accordion-item overflow-hidden active mb-6">
          <button
            className="hs-accordion-toggle accordion-button hs-accordion-active:pb-3 group py-4 inline-flex items-center gap-x-3 w-full font-bold text-start transition"
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
            Най-често изисквани качества в платформата
          </button>
          <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
            <div className="accordion-body">
              {categories.map(({ title, key, icon }) => {
                const item = data[key]?.[0];
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
