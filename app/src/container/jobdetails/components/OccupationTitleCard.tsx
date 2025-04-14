import { FC } from "react";
import { OccupationTitleCardProps } from "../jobs-types";
import { toggleFavouriteOccupation } from "../../../functions_common";

const OccupationTitleCard: FC<OccupationTitleCardProps> = ({
  fullCareerDetails,
  favouriteNotification,
  setFavouriteNotification
}) => {
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const date = new Date().toISOString();

  return (
    <div className="box custom-box">
      <div className="box-body">
        <div className="sm:flex align-top justify-between">
          <div>
            <div className="sm:flex flex-wrap gap-2">
              <div>
                <div className="mb-4">
                  <h4 className="font-bold mb-0 flex items-center relative leading-tight">
                    {fullCareerDetails.translated.title}
                    {fullCareerDetails.occupation.tags.green && (
                      <span className="relative group ml-2">
                        <i className="ti ti-seedling text-primary"></i>
                        <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-max px-3 py-2 text-xs font-medium text-white bg-primary rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
                          🌱 Зелена професия
                          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rotate-45 z-[-1]"></span>
                        </span>
                      </span>
                    )}
                  </h4>
                  <h4 className="font-bold text-defaulttextcolor/65 mb-0 flex text-lg italic items-center relative leading-tight">
                    ({fullCareerDetails.occupation.title})
                  </h4>
                </div>
                <h4 className="font-semibold mb-0 flex items-center">
                  {fullCareerDetails.occupation.tags.bright_outlook && (
                    <span className="text-secondary text-sm">
                      професия с ярко бъдеще
                    </span>
                  )}
                </h4>
                {/* 
                <div className="sm:ms-6 mb-4">
                  <p className="mb-1">
                    <i className="bi bi-coin me-1"></i>
                    <b>10,000 - 20,000</b> / per month (+incentives)
                  </p>
                  <p>
                    <i className="bi bi-mortarboard  me-1"></i>Graduate
                    and Above
                  </p>
                </div>
                */}
              </div>
            </div>
          </div>
          <div>
            <div className="btn-list sm:flex items-center mb-2">
              <div
                aria-label="anchor"
                onClick={() => {
                  toggleFavouriteOccupation(
                    fullCareerDetails,
                    token,
                    date,
                    setFavouriteNotification
                  );
                }}
                className={`ti-btn ti-btn-icon ti-btn-primary me-[0.375rem] ${
                  favouriteNotification ? "ti-btn-primary.ac" : ""
                }`}
              >
                <i className="ri-heart-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccupationTitleCard;
