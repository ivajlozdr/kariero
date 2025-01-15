import { FC, Fragment, useState, useEffect } from "react";
import Pageheader from "../../components/common/pageheader/pageheader";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import PaginatedTasks from "./components/Tasks";
import RelatedOccupations from "./components/RelatedOccupations";
import { FullCareerDetails } from "../quiz/quiz-types";
import JobListings from "./components/JobListings";

interface JobDetailsProps {}

const JobDetails: FC<JobDetailsProps> = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
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
                        {fullCareerDetails.occupation.tags.bright_outlook && (
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
                  <Link
                    to="#"
                    className="ti-btn ti-btn-primary-full m-0 !me-[0.375rem]"
                  >
                    {" "}
                    Apply Now
                  </Link>
                  <Link
                    aria-label="anchor"
                    to="#"
                    className="ti-btn ti-btn-icon ti-btn-primary me-[0.375rem]"
                  >
                    <i className="ri-heart-line"></i>
                  </Link>
                  <Link
                    aria-label="anchor"
                    to="#"
                    className="ti-btn ti-btn-icon ti-btn-primary"
                  >
                    <i className="ri-share-line"></i>
                  </Link>
                </div>
                <p className="mb-0">
                  <i className="bi bi-info-circle text-danger"></i>{" "}
                  <b>45 days left </b> to apply this job
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="xxl:col-span-8 col-span-12">
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
                              {item.translated_name}
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
                              {item.translated_name}
                            </li>
                          )
                        )}
                      </ol>
                    </div>

                    <div className="space-y-4">
                      <h6 className="font-semibold text-md border-l-4 border-primary pl-3">
                        Знания
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
                              {item.translated_name}
                            </li>
                          )
                        )}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
