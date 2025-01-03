import { FC } from "react";
import { DataType } from "../home-types";

interface WidgetCardsComponentProps {
  data: DataType;
}

const MostPreferredWorkstyleCards: FC<WidgetCardsComponentProps> = ({
  data
}) => {
  const mostPreferredWorkStyleWorkEnvironment =
    data?.mostPreferredWorkStyleWorkEnvironment[0]?.preference;
  const mostPreferredWorkStyleWorkEnvironmenCount =
    data?.mostPreferredWorkStyleWorkEnvironment[0]?.occurrence_count;
  const mostPreferredWorkStyleCollaboration =
    data?.mostPreferredWorkStyleCollaboration[0]?.preference;
  const mostPreferredWorkStyleCollaborationCount =
    data?.mostPreferredWorkStyleCollaboration[0]?.occurrence_count;

  const mostPreferredWorkStyleStructure =
    data?.mostPreferredWorkStyleStructure[0]?.preference;
  const mostPreferredWorkStyleStructureCount =
    data?.mostPreferredWorkStyleStructure[0]?.occurrence_count;

  const options = [
    {
      label: "Предпочитание за работна среда",
      name: mostPreferredWorkStyleWorkEnvironment,
      value: mostPreferredWorkStyleWorkEnvironmenCount ?? 0
    },
    {
      label: "Предпочитание за колаборация",
      name: mostPreferredWorkStyleCollaboration,
      value: mostPreferredWorkStyleCollaborationCount ?? 0
    },
    {
      label: "Предпочитание за работна структура",
      name: mostPreferredWorkStyleStructure,
      value: mostPreferredWorkStyleStructureCount ?? 0
    }
  ];

  return (
    <div className="box custom-box">
      <div className="box-body !p-0">
        <div className="box-header">
          <h2 className="box-title">
            Най-предпочитан работен стил в платформата
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {options.map(({ label, name, value }, index) => (
            <div
              key={index}
              className="relative flex flex-col p-3 border-r border-dashed border-primary dark:border-defaultborder/10 transition-shadow duration-300 ease-in-out last:border-r-0"
            >
              <div className="flex items-start w-full">
                <span className="avatar w-16 h-16 rounded-full bg-primary shadow-sm mr-4 flex justify-center items-center">
                  <i className="ti ti-package text-[1.125rem]"></i>
                </span>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center w-full">
                    <h5 className="font-semibold text-lg text-primary truncate mr-2 leading-tight">
                      {name || (
                        <span className="italic text-gray-500">
                          Зареждане...
                        </span>
                      )}
                    </h5>
                    <span
                      className="text-sm italic text-secondary align-baseline"
                      title="брой"
                    >
                      (
                      {value ?? (
                        <span className="italic text-gray-500">
                          Зареждане...
                        </span>
                      )}
                      )
                    </span>
                  </div>
                  <p className="text-[#8c9097] dark:text-white/50 mb-0 text-sm">
                    {label || "Зареждане..."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPreferredWorkstyleCards;
