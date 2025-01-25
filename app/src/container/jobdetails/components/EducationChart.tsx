import { FC, useEffect, useState } from "react";
import { FullCareerDetails } from "../../types_common";
import { updatePrimaryColor } from "../../functions_common";
import {
  extractLevelsAndPercentages,
  generateColorScale
} from "../helper-functions";

interface Props {
  fullCareerDetails: FullCareerDetails;
}

export const EducationChart: FC<Props> = ({ fullCareerDetails }) => {
  const [primaryColor, setPrimaryColor] = useState<string>("#ffffff");
  const education = extractLevelsAndPercentages(
    fullCareerDetails.translated.education
  );

  useEffect(() => {
    setPrimaryColor(updatePrimaryColor());

    const observer = new MutationObserver(() => {
      setPrimaryColor(updatePrimaryColor());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  const colorScale = generateColorScale(primaryColor, education.length);

  return (
    <div>
      <div className="flex w-full h-[0.3125rem] mb-6 rounded-full overflow-hidden">
        {education.map((level, index) => (
          <div
            key={level.level}
            style={{
              width: `${level.percentage}%`,
              backgroundColor: colorScale[index]
            }}
            aria-valuenow={level.percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            title={`${level.level}: ${level.percentage}`}
          ></div>
        ))}
      </div>
      <ul className="list-none mb-6 pt-2 crm-deals-status flex flex-col">
        {education.map((level, index) => (
          <li key={level.level} className="flex items-center text-sm mb-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colorScale[index] }}
              aria-label={level.level}
            ></div>
            <span className="ml-2">
              {level.level}: {level.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
