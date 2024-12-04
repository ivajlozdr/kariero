import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import media88 from "../../../assets/images/media/media-88.svg";
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { DayCounter } from "./counterdata";

interface UndermaintanaceProps {}

const Undermaintanace: FC<UndermaintanaceProps> = () => {
  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          <body className="!bg-white dark:!bg-bodybg"></body>
        </Helmet>
      </HelmetProvider>
      <div className="grid grid-cols-12 gap-0 w-full authentication under-maintenance mx-0 text-defaulttextcolor text-defaultsize">
        <div className="lg:col-span-7 col-span-12">
          <div className="authentication-page md:h-full sm:py-16 w-full flex items-center justify-center">
            <main id="content" className="w-full lg:max-w-[37rem] p-6 ">
              <div className="mt-7">
                <div className="p-0 md:p-7">
                  <div className="text-center">
                    <div className="mb-2 flex justify-center">
                      <Link
                        aria-label="anchor"
                        to={`${import.meta.env.BASE_URL}dashboards/crm/`}
                      >
                        <img
                          src={togglelogo}
                          alt=""
                          className="authentication-brand"
                        />
                      </Link>
                    </div>
                    <h1 className="font-bold mb-4 text-[2.5rem] dark:text-defaulttextcolor/70">
                      Страницата е в процес на поддръжка
                    </h1>
                    <p className="mb-4">
                      Нашият уебсайт в момента е в процес на поддръжка. Работим
                      усилено, за да подобрим нашето приложение и скоро ще бъдем
                      отново на линия.
                    </p>
                    <div
                      className="grid grid-cols-12 mt-6 xxl:gap-y-0 gap-4 mb-[3rem]"
                      id="timer"
                    >
                      <DayCounter />
                    </div>
                    <div className="mt-[3rem]">
                      <div className="btn-list">
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-icon bg-primary font-bold me-[0.365rem] text-white"
                        >
                          <i className="ri-facebook-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-icon bg-secondary font-bold me-[0.365rem] text-white"
                        >
                          <i className="ri-twitter-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-icon bg-warning font-bold me-[0.365rem] text-white"
                        >
                          <i className="ri-instagram-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-icon bg-success font-bold me-[0.365rem] text-white"
                        >
                          <i className="ri-github-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-icon bg-danger font-bold text-white"
                        >
                          <i className="ri-youtube-line font-bold"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:col-span-5 col-span-12 hidden lg:block relative px-0">
          <div className="bg-light w-full h-full flex items-center justify-center under-maintenance-image-container">
            <img src={media88} alt="" className="imig-fluid" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Undermaintanace;
