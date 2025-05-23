import { FC, useMemo } from "react";
import { generateOptions } from "../helper_functions";
import { useGlobalState } from "../../../pages/GlobalStateProvider";
import Redirect from "../../../components/common/placeholders/Redirect";

interface MostSelectedCardsProps {
  dataType: "individual" | "platform";
}

const MostSelectedCards: FC<MostSelectedCardsProps> = ({ dataType }) => {
  const { data } = useGlobalState();
  const options = generateOptions("MostSelectedCards", dataType, data);
  const hasData = useMemo(() => {
    return (
      dataType !== "individual" ||
      (data.mostSelectedWorkEnvironments?.individual?.length ?? 0) > 0 ||
      (data.mostSelectedPersonalityTypes?.individual?.length ?? 0) > 0 ||
      (data.mostSelectedJobSatisfactionLevels?.individual?.length ?? 0) > 0 ||
      (data.mostSelectedJobPriorities?.individual?.length ?? 0) > 0 ||
      (data.mostSelectedEducationLevels?.individual?.length ?? 0) > 0 ||
      (data.mostSelectedCareerGoals?.individual?.length ?? 0) > 0
    );
  }, [dataType, data]);

  if (dataType === "individual" && !hasData) {
    return <Redirect />;
  }

  return (
    <div className="box custom-box mt-6">
      <div className="box-body !p-0">
        <div className="box-header p-4">
          <h2 className="box-title">
            {dataType === "individual"
              ? "Моите характеристики"
              : "Най-често срещани характеристики в платформата"}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mb-4">
          {options.map(({ label, name, value, icon }, index) => (
            <div
              key={index}
              className="box custom-box !mb-0 border-b-[0.25rem] !rounded-b-sm border-primary shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="box-body">
                <div className="text-center">
                  <span
                    className="avatar w-16 h-16 bg-primary shadow-sm mb-3 flex items-center justify-center"
                    aria-label={label}
                  >
                    <i className={`${icon} text-[1.5rem] text-white`}></i>
                  </span>
                  <p className="text-[0.85rem] font-medium text-defaulttextcolor/70 dark:text-white/50leading-4">
                    {label}
                  </p>

                  <div className="flex flex-col items-center">
                    <h5
                      className=" font-semibold text-primary text-center line-clamp-1"
                      title={name}
                    >
                      {name}
                    </h5>
                    <span className="text-sm italic text-secondary align-baseline">
                      {value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostSelectedCards;
