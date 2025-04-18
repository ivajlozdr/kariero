import { FC } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Offers } from "../../jobs-types";
import OfferName from "./OfferName";

interface Props {
  jobOffers: Offers;
}

const JobOffers: FC<Props> = ({ jobOffers }) => {
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
      {jobOffers.job_offers.map((job) => (
        <SwiperSlide className="rtl:dir-rtl">
          <div className="box custom-box featured-jobs">
            <div className="box-body">
              <div className="sm:flex mb-4 items-start">
                <span className="avatar avatar-lg !rounded-full !bg-primary/10 !fill-primary border dark:border-defaultborder/10">
                  <i
                    className="ti ti-briefcase-2 text-primary"
                    style={{ fontSize: "24px", lineHeight: 1 }}
                  />
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
