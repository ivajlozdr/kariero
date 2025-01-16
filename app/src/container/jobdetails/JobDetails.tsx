import { FC, Fragment, useState, useEffect } from "react";
import Pageheader from "../../components/common/pageheader/pageheader";
import { Link, useLocation } from "react-router-dom";
import PaginatedTasks from "./components/Tasks";
import RelatedOccupations from "./components/RelatedOccupations";
import { FullCareerDetails } from "../quiz/quiz-types";
import JobListings from "./components/JobListings";
import OccupationDescription from "./components/OccupationDescription";
import { handleToggleFavouriteOccupation } from "./helper-functions";
import { date, token } from "../data_common";

interface JobDetailsProps {}

const JobDetails: FC<JobDetailsProps> = () => {
  const location = useLocation();
  const [fullCareerDetails, setFullCareerDetails] = useState<FullCareerDetails>(
    () => {
      const savedDetails = localStorage.getItem("fullCareerDetails");
      return savedDetails
        ? JSON.parse(savedDetails)
        : location.state?.fullCareerDetails;
    }
  );

  useEffect(() => {
    if (fullCareerDetails) {
      localStorage.setItem(
        "fullCareerDetails",
        JSON.stringify(fullCareerDetails)
      );
    }
  }, [fullCareerDetails]);

  console.log("fullCareerDetails: ", fullCareerDetails);
  return (
    <Fragment>
      <Pageheader
        currentpage={"Детайли за " + fullCareerDetails.translated.title}
        activepage="Кариери"
        mainpage={fullCareerDetails.translated.title}
      />
      <div className="px-10">
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
                    {/* <div className="sm:flex text-[.875rem] mt-4">
                      <div className="mb-2 sm:mb-0">
                        <p className="mb-1">
                          <i className="bi bi-geo-alt me-1"></i>Banglore,
                          Karnataka
                        </p>
                        <p>
                          <i className="ti ti-seedling me-1"></i>1 - 3+ years
                          Experience
                        </p>
                      </div>
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
                    </div>
                    <div className="popular-tags mb-2 sm:mb-0 space-x-2 rtl:space-x-reverse">
                      <Link
                        to="#"
                        className="badge !rounded-full bg-info/10 text-info"
                      >
                        <i className="bi bi-clock me-1"></i>Full Time
                      </Link>
                      <Link
                        to="#"
                        className="badge !rounded-full bg-danger/10 text-danger"
                      >
                        <i className="bi bi-briefcase me-1"></i>13 Openings
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div>
                <div className="btn-list sm:flex items-center mb-2">
                  <div
                    aria-label="anchor"
                    onClick={handleToggleFavouriteOccupation(
                      fullCareerDetails,
                      token,
                      date
                    )}
                    className="ti-btn ti-btn-icon ti-btn-primary me-[0.375rem]"
                  >
                    <i className="ri-heart-line"></i>
                  </div>
                  <Link
                    aria-label="anchor"
                    to="#"
                    className="ti-btn ti-btn-icon ti-btn-primary"
                  >
                    <i className="ri-share-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="xxl:col-span-8 col-span-12">
            <OccupationDescription fullCareerDetails={fullCareerDetails} />
            <div className="box custom-box  !bg-primary/10 !border-0 !shadow-none">
              <div className="box-body">
                <div className="grid grid-cols-12 items-center">
                  <div className="lg:col-span-6 col-span-12">
                    <h5 className="font-semibold mb-0">
                      🖐 Искате да споделите тази кариера с някого?
                    </h5>
                  </div>
                  <div className="lg:col-span-6 col-span-12 text-end">
                    <Link
                      to="#"
                      className="ti-btn ti-btn-success-full ti-btn-lg dark:!border-defaultborder/10"
                    >
                      <i className="ri-share-line me-2"></i>Споделете
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-0 !text-defaulttextcolor">
                Обяви за {fullCareerDetails.translated.title}
              </h4>
              <p className="!text-defaulttextcolor text-defaultsize mb-4">
                Разгледайте различни обяви.
              </p>
              <JobListings fullCareerDetails={fullCareerDetails} />
            </div>
          </div>
          <div className="xxl:col-span-4 col-span-12">
            <PaginatedTasks tasks={fullCareerDetails.translated.tasks} />
            <RelatedOccupations fullCareerDetails={fullCareerDetails} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default JobDetails;
