import { FC, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import media87 from "../../../assets/images/media/media-87.svg";
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import { DayCounter } from "../undermaintanace/counterdata";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface ComingsoonProps {}

const Comingsoon: FC<ComingsoonProps> = () => {
  useEffect(() => {
    const rootDiv = document.getElementById("root");
    if (rootDiv) {
    }
    return () => {
      if (rootDiv) {
        rootDiv.className = "";
      }
    };
  }, []);
  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          <body className="bg-white dark:bg-!bodybg"></body>
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
                        to={`${import.meta.env.BASE_URL}app/home/`}
                      >
                        <img
                          src={togglelogo}
                          alt=""
                          className="authentication-brand"
                        />
                      </Link>
                    </div>
                    <h1 className="font-bold mb-4 text-[2.5rem]">
                      Очаквайте скоро
                    </h1>
                    <p className="mb-6">
                      Тази страница се разработва в момента, въведете вашият
                      имейл за да получите информация за най-новите допълнения
                      към нашето приложение!
                    </p>
                    <div className="input-group mb-[3em]">
                      <input
                        type="email"
                        className="form-control w-full !rounded-s-md form-control-lg "
                        placeholder="example@noit.com"
                        aria-label="example@noit.com"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="ti-btn bg-primary text-white !rounded-s-none !mb-0"
                        type="button"
                        id="button-addon2"
                      >
                        Абонирай се
                      </button>
                    </div>
                    <div
                      className="grid grid-cols-12 mt-6 mb-[3rem] xxl:gap-y-0 gap-4 justify-center"
                      id="timer"
                    >
                      <DayCounter />
                    </div>
                    <div className="mt-[3rem]">
                      <div className="btn-list">
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-icon bg-primary text-white font-medium me-[0.365rem]"
                        >
                          <i className="ri-facebook-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-icon bg-secondary text-white font-medium me-[0.365rem]"
                        >
                          <i className="ri-twitter-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-icon bg-warning text-white font-medium me-[0.365rem]"
                        >
                          <i className="ri-instagram-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-icon bg-success text-white font-medium me-[0.365rem]"
                        >
                          <i className="ri-github-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-icon bg-danger text-white font-medium"
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
            <img src={media87} alt="" className="imig-fluid" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Comingsoon;
