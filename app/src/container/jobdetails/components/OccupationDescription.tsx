import { FC, useState } from "react";
import { CommonCareerProps } from "../../../types_common";

const OccupationDescription: FC<CommonCareerProps> = ({
  fullCareerDetails
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="box custom-box">
      <div className="box-body space-y-8">
        <div>
          <h5 className="font-semibold text-lg text-primary mb-4">
            Описание на професията
          </h5>
          <p className="text-sm  opacity-90 leading-relaxed">
            {fullCareerDetails.translated.description}
          </p>
        </div>

        <div className="space-y-8">
          <h5 className="font-semibold text-lg text-primary">
            Най-нужни качества за тази професия
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h6 className="font-semibold border-l-4 border-primary pl-3">
                Способности
              </h6>
              <ol
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`list-none overflow-y-auto space-y-2 pr-2 transition-all duration-300 ${
                  isHovered ? "h-[14rem]" : "h-[10rem]"
                }`}
              >
                {fullCareerDetails.translated.abilities.map(
                  (item: any, index: number) => (
                    <li
                      key={index}
                      className="flex items-center text-sm rounded-lg p-2 transition-all duration-300"
                    >
                      <i className="inline-block mr-3 ti ti-user-star text-primary"></i>
                      {item}
                    </li>
                  )
                )}
              </ol>
            </div>

            <div className="space-y-4">
              <h6 className="font-semibold text-md border-l-4 border-primary pl-3">
                Умения
              </h6>
              <ol
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`list-none overflow-y-auto space-y-2 pr-2 transition-all duration-300 ${
                  isHovered ? "h-[15rem]" : "h-[10rem]"
                }`}
              >
                {fullCareerDetails.translated.skills.map(
                  (item: any, index: number) => (
                    <li
                      key={index}
                      className="flex items-center text-sm rounded-lg p-2 transition-all duration-300"
                    >
                      <i className="inline-block mr-3 ti ti-book text-primary"></i>
                      {item}
                    </li>
                  )
                )}
              </ol>
            </div>

            <div className="space-y-4">
              <h6 className="font-semibold text-md border-l-4 border-primary pl-3">
                Познания
              </h6>
              <ol
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`list-none overflow-y-auto space-y-2 pr-2 transition-all duration-300 ${
                  isHovered ? "h-[15rem]" : "h-[10rem]"
                }`}
              >
                {fullCareerDetails.translated.knowledge.map(
                  (item: any, index: number) => (
                    <li
                      key={index}
                      className="flex items-center text-sm rounded-lg p-2 transition-all duration-300"
                    >
                      <i className="inline-block mr-3 ti ti-brain text-primary"></i>
                      {item}
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccupationDescription;
