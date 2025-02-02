import { FC, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import store from "../../redux/store";
import { ThemeChanger } from "../../redux/action";
import { Helmet, HelmetProvider } from "react-helmet-async";
import togglelogo from "../../assets/images/brand-logos/toggle-logo.png";
import toggledark from "../../assets/images/brand-logos/toggle-dark.png";
import desktoplogo from "../../assets/images/brand-logos/desktop-logo.png";
import desktopwhitelogo from "../../assets/images/brand-logos/desktop-white.png";
import { connect } from "react-redux";
import Footer from "../../components/common/footer/footer";

const Landing: FC = ({ ThemeChanger }: any) => {
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
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 992) {
        const theme = store.getState();
        ThemeChanger({
          ...theme,
          toggled: "close",
          dataNavLayout: "horizontal"
        });
      } else {
        const theme = store.getState();
        ThemeChanger({
          ...theme,
          toggled: "open",
          dataNavLayout: "horizontal"
        });
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function handleClick() {
    const theme = store.getState();
    ThemeChanger({ ...theme, toggled: "close", dataNavLayout: "horizontal" });
  }
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

  const Topup = () => {
    if (window.scrollY > 30 && document.querySelector(".landing-body")) {
      const Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.add("sticky-pin");
      });
    } else {
      const Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.remove("sticky-pin");
      });
    }
  };
  window.addEventListener("scroll", Topup);
  function menuClose() {
    const theme = store.getState();
    if (window.innerWidth <= 992) {
      ThemeChanger({ ...theme, toggled: "close" });
    }
    const overlayElement = document.querySelector("#responsive-overlay");
    if (overlayElement) {
      overlayElement.classList.remove("active");
    }
  }
  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          <body className="landing-body jobs-landing"></body>
        </Helmet>
      </HelmetProvider>
      {/* MOBILE HEADER! */}
      <header className="app-header">
        <div className="main-header-container container-fluid">
          <div className="header-content-left">
            <div className="header-element">
              <div className="horizontal-logo">
                <a
                  href={`${import.meta.env.BASE_URL}app/home`}
                  className="header-logo"
                >
                  <img src={togglelogo} alt="logo" className="toggle-logo" />
                  <img src={toggledark} alt="logo" className="toggle-dark" />
                </a>
              </div>
            </div>
          </div>

          <div className="header-content-right">
            <div className="header-element !items-center">
              <div className="lg:hidden block">
                <a
                  href={`${import.meta.env.BASE_URL}signin`}
                  className="ti-btn ti-btn-secondary !m-1"
                >
                  Регистрация
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}signin`}
                  className="ti-btn ti-btn-primary !m-1"
                >
                  Вход
                </a>
                <a
                  aria-label="anchor"
                  href="#"
                  className="ti-btn ti-btn-success !m-1"
                  data-hs-overlay="#hs-overlay-switcher"
                >
                  <i className="!m-0 ti ti-settings animate-spin-slow py-[0.20rem]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="responsive-overlay" onClick={() => menuClose()}></div>
      {/* REGULAR HEADER! */}
      <aside className="app-sidebar sticky !topacity-0" id="sidebar">
        <div className="container-xl xl:!p-0">
          <div className="main-sidebar mx-0">
            <nav className="main-menu-container nav nav-pills flex-column sub-open">
              <div className="landing-logo-container my-auto hidden lg:block">
                <div className="responsive-logo">
                  <Link
                    className="responsive-logo-light"
                    to={`${import.meta.env.BASE_URL}app/home`}
                    aria-label="Brand"
                  >
                    <img src={desktoplogo} alt="logo" className="mx-auto" />
                  </Link>
                  <Link
                    className="responsive-logo-dark"
                    to={`${import.meta.env.BASE_URL}app/home`}
                    aria-label="Brand"
                  >
                    <img
                      src={desktopwhitelogo}
                      alt="logo"
                      className="mx-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="lg:flex hidden space-x-2 rtl:space-x-reverse">
                <Link
                  to={`${import.meta.env.BASE_URL}signin`}
                  className="ti-btn w-[10rem] ti-btn-secondary-full m-0 p-2"
                >
                  Регистрация
                </Link>
                <Link
                  to={`${import.meta.env.BASE_URL}signin`}
                  className="ti-btn w-[6rem] ti-btn-primary-full m-0 p-2"
                >
                  Вход
                </Link>
                <Link
                  aria-label="anchor"
                  to="#"
                  className="ti-btn m-0 p-2 px-3 ti-btn-light !font-medium"
                  data-hs-overlay="#hs-overlay-switcher"
                >
                  <i className="ti ti-settings animate-spin-slow"></i>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </aside>
      <div
        className="main-content !p-0 landing-main dark:text-defaulttextcolor/70"
        onClick={handleClick}
      >
        <div className="landing-banner !h-auto" id="home">
          <section className="section !pb-0 text-[0.813rem]">
            <div className="container main-banner-container">
              <div className="grid grid-cols-12 justify-center text-center">
                <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 col-span-12"></div>
                <div className="xxl:col-span-8 xl:col-span-8 lg:col-span-8 col-span-12">
                  <div className="">
                    <h5 className="landing-banner-heading mb-3 !text-[2.4rem]">
                      <span className="text-primary dark:text-secondary font-bold italic">
                        Кариеро
                      </span>
                      , правилният избор.
                    </h5>
                    <p className="text-[1.125rem] mb-[3rem] opacity-[0.8] font-normal text-white">
                      Присъединете се към нашата платформа и открийте
                      най-подходящата професия за вас! Време е да разкриете своя
                      потенциал 🚀
                    </p>
                  </div>
                </div>
                <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 col-span-12"></div>
              </div>
            </div>
          </section>
        </div>
        {/* <section
          className="section section-bg dark:!bg-black/10 text-defaulttextcolor"
          id="jobs"
        >
          <div className="container">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-[3rem]">
              <div>
                <p className="text-[0.75rem] font-semibold mb-1">Find jobs</p>
                <h3 className="font-semibold mb-0 dark:text-defaulttextcolor/70">
                  Browse Jobs by Top Categories
                </h3>
                <span className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] font-normal block">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </span>
              </div>
              <div>
                <Link
                  to="#"
                  className="ti-btn bg-primary text-white !font-medium"
                >
                  View All Categories <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="box border dark:border-defaultborder/10">
                  <div className="grid grid-cols-12 g-0">
                    <div className="md:col-span-3 col-span-4">
                      <img
                        src={jobslanding1}
                        className="img-fluid rounded-start h-full browse-jobs-image !rounded-s-md"
                        alt="..."
                      />
                    </div>
                    <div className="md:col-span-9 col-span-8 my-auto">
                      <div className="box-body">
                        <h5 className="box-title font-semibold !text-[1.25rem]">
                          Business Development
                        </h5>
                        <p className="mb-4">
                          <span className="text-default font-semibold ">
                            120 Jobs
                          </span>{" "}
                          available
                        </p>
                        <Link className="text-primary font-semibold" to="#">
                          Explore Jobs
                          <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="box border dark:border-defaultborder/10">
                  <div className="grid grid-cols-12 g-0">
                    <div className="md:col-span-3 col-span-4">
                      <img
                        src={jobslanding2}
                        className="img-fluid rounded-start h-full browse-jobs-image !rounded-s-md"
                        alt="..."
                      />
                    </div>
                    <div className="md:col-span-9 col-span-8 my-auto">
                      <div className="box-body">
                        <h5 className="box-title font-semibold !text-[1.25rem]">
                          Customer Support
                        </h5>
                        <p className="mb-4">
                          <span className="text-default font-semibold ">
                            370 Jobs
                          </span>{" "}
                          available
                        </p>
                        <Link className="text-primary font-semibold" to="#">
                          Explore Jobs
                          <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="box border dark:border-defaultborder/10">
                  <div className="grid grid-cols-12 g-0">
                    <div className="md:col-span-3 col-span-4">
                      <img
                        src={jobslanding3}
                        className="img-fluid rounded-start h-full browse-jobs-image !rounded-s-md"
                        alt="..."
                      />
                    </div>
                    <div className="md:col-span-9 col-span-8 my-auto">
                      <div className="box-body">
                        <h5 className="box-title font-semibold !text-[1.25rem]">
                          Marketing
                        </h5>
                        <p className="mb-4">
                          <span className="text-default font-semibold">
                            743 Jobs
                          </span>{" "}
                          available
                        </p>
                        <Link className="text-primary font-semibold" to="#">
                          Explore Jobs
                          <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="box border dark:border-defaultborder/10">
                  <div className="grid grid-cols-12 g-0">
                    <div className="md:col-span-3 col-span-4">
                      <img
                        src={jobslanding4}
                        className="img-fluid rounded-start h-full browse-jobs-image !rounded-s-md"
                        alt="..."
                      />
                    </div>
                    <div className="md:col-span-9 col-span-8 my-auto">
                      <div className="box-body">
                        <h5 className="box-title font-semibold !text-[1.25rem]">
                          Product Management
                        </h5>
                        <p className="mb-4">
                          <span className="text-default font-semibold">
                            156 Jobs
                          </span>{" "}
                          available
                        </p>
                        <Link className="text-primary font-semibold" to="#">
                          Explore Jobs
                          <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="box border dark:border-defaultborder/10">
                  <div className="grid grid-cols-12 g-0">
                    <div className="md:col-span-3 col-span-4">
                      <img
                        src={jobslanding5}
                        className="img-fluid rounded-start h-full browse-jobs-image !rounded-s-md"
                        alt="..."
                      />
                    </div>
                    <div className="md:col-span-9 col-span-8 my-auto">
                      <div className="box-body">
                        <h5 className="box-title font-semibold !text-[1.25rem]">
                          Accountant
                        </h5>
                        <p className="mb-4">
                          <span className="text-default font-semibold">
                            67 Jobs
                          </span>{" "}
                          available
                        </p>
                        <Link className="text-primary font-semibold" to="#">
                          Explore Jobs
                          <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="box border dark:border-defaultborder/10">
                  <div className="grid grid-cols-12 g-0">
                    <div className="md:col-span-3 col-span-4">
                      <img
                        src={jobslanding6}
                        className="img-fluid rounded-start h-full browse-jobs-image !rounded-s-md"
                        alt="..."
                      />
                    </div>
                    <div className="md:col-span-9 col-span-8 my-auto">
                      <div className="box-body">
                        <h5 className="box-title font-semibold !text-[1.25rem]">
                          Technical Support
                        </h5>
                        <p className="mb-4">
                          <span className="text-default font-semibold">
                            140 Jobs
                          </span>{" "}
                          available
                        </p>
                        <Link className="text-primary font-semibold" to="#">
                          Explore Jobs
                          <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section
          className="section bg-light text-defaulttextcolor text-defaultsize"
          id="steps"
        >
          <div className="container text-center">
            <div className=" justify-center text-center mb-12">
              <div className="xl:col-span-6 col-span-12">
                <h3 className="font-semibold mb-2">Как работи Кариеро?</h3>
                <span className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] font-normal block">
                  Открийте своя кариерен път в три лесни стъпки – регистрирайте
                  се, попълнете кратък въпросник и вижте вашите резултати!
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 text-start">
              <div className="col-span-12 md:col-span-4">
                <div className="box border dark:border-defaultborder/10 h-full flex flex-col">
                  <div className="box-body rounded flex flex-col flex-grow">
                    <div className="mb-4 ms-1">
                      <div className="icon-style">
                        <span className="avatar avatar-lg avatar-rounded bg-primary svg-white">
                          <i className="ti ti-file-invoice"></i>
                        </span>
                      </div>
                    </div>
                    <h5 className="font-semibold text-[1.25rem]">
                      Регистрация
                    </h5>
                    <p className="opacity-[0.8] mb-2 flex-grow">
                      Създайте акаунт, за да станете част от нашата платформа.
                      Кариеро ви предоставя възможността да откриете вашия
                      кариерен път.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 col-span-12">
                <div className="box border dark:border-defaultborder/10 h-full flex flex-col">
                  <div className="box-body rounded flex flex-col flex-grow">
                    <div className="mb-4 ms-1">
                      <div className="icon-style">
                        <span className="avatar avatar-lg avatar-rounded bg-primary svg-white">
                          <i className="ti ti-user-plus"></i>
                        </span>
                      </div>
                    </div>
                    <h5 className="font-semibold text-[1.25rem]">
                      Вашата кариера
                    </h5>
                    <p className="opacity-[0.8] mb-2 flex-grow">
                      Спрямо вашите умения, предпочитания и личностни качества,
                      Кариеро ще ви насочи към най-подходящите професии за вас.
                      Направете първата стъпка към вашето бъдеще още днес!
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 col-span-12">
                <div className="box border dark:border-defaultborder/10 h-full flex flex-col">
                  <div className="box-body rounded flex flex-col flex-grow">
                    <div className="mb-4 ms-1">
                      <div className="icon-style">
                        <span className="avatar avatar-lg avatar-rounded bg-primary svg-white">
                          <i className="ti ti-briefcase"></i>
                        </span>
                      </div>
                    </div>
                    <h5 className="font-semibold text-[1.25rem]">Статистики</h5>
                    <p className="opacity-[0.8] mb-2 flex-grow">
                      Кариеро предлага голям брой статистики и схеми. Може да
                      намерите общи статистики за цялата платформа, както и да
                      разкриете повече за себе си с помощта на нашите
                      индивидуални статистики.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer landing />
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state: any) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landing);
