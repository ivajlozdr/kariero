import { FC } from "react";
import { generateOptions } from "../helper_functions";
import { useGlobalState } from "../../../pages/GlobalStateProvider";

interface MostPreferredWorkstyleCardsProps {
  dataType: "individual" | "platform";
}

const MostPreferredWorkstyleCards: FC<MostPreferredWorkstyleCardsProps> = ({
  dataType
}) => {
  const { data } = useGlobalState();
  const options = generateOptions(
    "MostPreferredWorkstyleCards",
    dataType,
    data
  );

  return (
    <div className="box custom-box">
      <div className="box-body !p-0">
        <div className="box-header">
          <h2 className="box-title">
            Най-предпочитан работен стил в платформата
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {options.map(({ label, name, value, icon }, index) => (
            <div
              key={index}
              className="relative flex flex-col p-3 border-r border-dashed border-primary dark:border-defaultborder/10 transition-shadow duration-300 ease-in-out last:border-r-0"
            >
              <div className="flex items-start w-full">
                <span className="avatar w-16 h-16 rounded-full bg-primary shadow-sm mr-4 flex justify-center items-center">
                  <i className={`${icon} text-[1.5rem]`}></i>
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
                  <p className="text-defaulttextcolor/70 dark:text-white/50 mb-0 text-sm">
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
