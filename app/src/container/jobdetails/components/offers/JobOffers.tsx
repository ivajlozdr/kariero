import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Offers } from "../../jobs-types";
import OfferName from "./OfferName";

const JobOffers = ({ jobOffers }: { jobOffers: Offers }) => {
  console.log("jobOffers: ", jobOffers);
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      breakpoints={{
        "@0.00": { slidesPerView: 1, spaceBetween: 10 },
        "@2.00": { slidesPerView: 2, spaceBetween: 20 }
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper swiper-related-jobs"
      watchSlidesProgress={true}
    >
      {jobOffers.job_offers.map((job, index) => (
        <SwiperSlide className="rtl:dir-rtl">
          <div className="box custom-box featured-jobs">
            <div className="box-body">
              <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
                <div className="hs-tooltip ti-main-tooltip">
                  <button
                    type="button"
                    className="hs-tooltip-toggle avatar avatar-sm !rounded-full bg-light !text-defaulttextcolor"
                  >
                    <span>
                      <i className="bi bi-heart"></i>
                    </span>
                    <span
                      className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                      role="tooltip"
                    >
                      Add to Whislist
                    </span>
                  </button>
                </div>
                <div className="hs-tooltip ti-main-tooltip">
                  <button
                    type="button"
                    className="hs-tooltip-toggle avatar avatar-sm !rounded-full !bg-warning/10 !text-warning"
                  >
                    <span>
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span
                      className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                      role="tooltip"
                    >
                      Featured Jobs
                    </span>
                  </button>
                </div>
              </div>
              <div className="sm:flex mb-4 items-start">
                <span className="avatar avatar-lg !rounded-full !bg-primary/10 !fill-primary border dark:border-defaultborder/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--primary-color)"
                      d="M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Zm-3.19238,16.896L11.99072,20.9624,5.72461,19.22168,4.36328,4H19.63672ZM7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z"
                    ></path>
                  </svg>
                </span>
                <div className="ms-2 flex flex-col">
                  <OfferName name={job.title} />
                  <div className="text-sm text-gray-500 mt-1">
                    {job.company}
                  </div>
                </div>
              </div>
              <div className="popular-tags mb-4 space-x-2 rtl:space-x-reverse">
                <Link
                  to="#"
                  className="badge !rounded-full bg-light text-default"
                >
                  <i className="bi bi-geo-alt text-muted me-1"></i>Град:{" "}
                  {job.city}
                </Link>
                <Link
                  to="#"
                  className="badge !rounded-full bg-light text-default"
                >
                  <i className="bi bi-clock text-muted me-1"></i>Отпуск:{" "}
                  {job.off_days}
                </Link>
              </div>
              <div className="sm:flex justify-between">
                <h6 className="font-semibold mb-0">Заплата: {job.salary}</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default JobOffers;
