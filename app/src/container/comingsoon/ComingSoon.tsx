import { FC, Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ComingSoonImage from "../../assets/images/media/ComingSoon.svg";
import togglelogo from "../../assets/images/brand-logos/toggle-logo.png";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface ComingsoonProps {}

const Comingsoon: FC<ComingsoonProps> = () => {
  const navigate = useNavigate();

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
                  <button
                    className="mb-6 w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg transition-all duration-300 relative overflow-hidden group hover:w-40"
                    onClick={() => navigate(-1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 absolute left-3.5 top-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>

                    <span className="opacity-0 font-bold whitespace-nowrap group-hover:opacity-100 group-hover:translate-x-4 ml-6 transition-all duration-300">
                      Връщане назад
                    </span>
                  </button>
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
                    <p className="mb-6">Тази страница все още се разработва.</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:col-span-5 col-span-12 hidden lg:block relative px-0">
          <div className="bg-light w-full h-full flex items-center justify-center under-maintenance-image-container">
            <img src={ComingSoonImage} alt="" className="imig-fluid" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Comingsoon;
