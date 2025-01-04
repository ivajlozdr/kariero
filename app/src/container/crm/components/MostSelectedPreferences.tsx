import { FC } from "react";
import { DataType } from "../home-types";
import { generateOptions } from "../helper_functions";

interface WidgetCardsComponentProps {
  data: DataType;
}

const MostSelectedCards: FC<WidgetCardsComponentProps> = ({ data }) => {
  const options = generateOptions("MostSelectedCards", data);

  return (
    <div className="box custom-box">
      <div className="box-body !p-0">
        <div className="box-header p-4">
          <h2 className="box-title text-lg font-semibold text-gray-800">
            Най-предпочитан работен стил в платформата
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 px-4">
          {options.map(({ label, name, value, icon }, index) => (
            <div
              key={index}
              className="box custom-box !mb-0 border-t-[0.188rem] border-primary rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="box-body">
                <div className="text-center">
                  <span
                    className="avatar avatar-sm bg-primary shadow-sm rounded-full mb-3 flex items-center justify-center"
                    aria-label={label}
                  >
                    <i className={`${icon} text-[1.5rem] text-white`}></i>
                  </span>
                  <p className="text-[0.85rem] font-medium mb-2 text-gray-700 leading-4">
                    {label}
                  </p>

                  <div className="flex flex-col items-center">
                    <h5
                      className="mb-1 font-semibold text-primary text-center line-clamp-1"
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
