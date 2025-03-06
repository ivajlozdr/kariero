import { FC, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import store from "../../../redux/store";
import { connect } from "react-redux";
import { ThemeChanger } from "../../../redux/action";
import LogoPrimaryLight from "../../../assets/images/brand-logos/kariero-primary-light.svg";
import LogoDarker from "../../../assets/images/brand-logos/kariero-darker.svg";
import LogoGray from "../../../assets/images/brand-logos/kariero-gray.svg";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({ local_varaiable, ThemeChanger }: any) => {
  const ToggleDark = () => {
    ThemeChanger({
      ...local_varaiable,
      class: local_varaiable.class == "dark" ? "light" : "dark",
      dataHeaderStyles: local_varaiable.class == "dark" ? "light" : "dark",
      dataMenuStyles:
        local_varaiable.dataNavLayout == "horizontal"
          ? local_varaiable.class == "dark"
            ? "light"
            : "dark"
          : "dark"
    });
    const theme = store.getState();

    if (theme.class != "dark") {
      ThemeChanger({
        ...theme,
        bodyBg: "",
        Light: "",
        darkBg: "",
        inputBorder: ""
      });
      localStorage.setItem("karierolighttheme", "light");
      localStorage.removeItem("karierodarktheme");
      localStorage.removeItem("karieroMenu");
      localStorage.removeItem("karieroHeader");
    } else {
      localStorage.setItem("karierodarktheme", "dark");
      localStorage.removeItem("karierolighttheme");
      localStorage.removeItem("karieroMenu");
      localStorage.removeItem("karieroHeader");
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    navigate(`${import.meta.env.BASE_URL}signin/`);
  };

  return (
    <Fragment>
      <header className="app-header relative overflow-hidden">
        <div className="absolute inset-0 bg-bodybg z-[-1]"></div>

        <nav className="main-header !h-[3.75rem]" aria-label="Global">
          <div className="main-header-container ps-[0.725rem] pe-[1rem] ">
            <div className="header-content-left">
              <div className="header-element">
                <div className="horizontal-logo">
                  <a
                    href={`${import.meta.env.BASE_URL}app/home/`}
                    className="header-logo"
                  >
                    <img
                      src={
                        local_varaiable.class === "dark" ? LogoDarker : LogoGray
                      }
                      alt="logo"
                      className="transition-all duration-100 transform opacity-100 scale-90 group-hover:scale-110 group-hover:opacity-0"
                    />
                    <img
                      src={
                        local_varaiable.class === "dark"
                          ? LogoPrimaryLight
                          : LogoGray
                      }
                      alt="logo-hover"
                      className="absolute top-0 left-0 transition-all duration-100 transform opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="header-content-right">
              <div
                className="header-element header-theme-mode hidden !items-center sm:block !py-[1rem] md:!px-[0.65rem] px-2 hover:scale-125 transition-all transition-300 ease-in-out"
                onClick={() => ToggleDark()}
              >
                <Link
                  aria-label="anchor"
                  className="hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 rounded-full font-medium transition-all text-xs"
                  to="#"
                  data-hs-theme-click-value="dark"
                >
                  <i className="bx bx-moon header-link-icon"></i>
                </Link>
                <Link
                  aria-label="anchor"
                  className="hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 rounded-full font-medium transition-all text-xs"
                  to="#"
                  data-hs-theme-click-value="light"
                >
                  <i className="bx bx-sun header-link-icon"></i>
                </Link>
              </div>

              <div className="header-element md:!px-[0.65rem] px-2 hs-dropdown !items-center ti-dropdown [--placement:bottom-left] hover:scale-110 transition-all transition-300 ease-in-out">
                <button
                  className="main-header-logout rounded-xl hover:bg-primary/10"
                  onClick={handleLogout}
                >
                  <i className="ti ti-logout text-[1.125rem] me-2"></i>
                  Излизане
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Header);
