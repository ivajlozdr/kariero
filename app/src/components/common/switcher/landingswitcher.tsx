import { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import store from "../../../redux/store";
import { ThemeChanger } from "../../../redux/action";
import Themeprimarycolor, * as switcherdata from "./switcherdata/switcherdata";
import { Link } from "react-router-dom";

const Landingswitcher = ({ local_varaiable, ThemeChanger }: any) => {
  useEffect(() => {
    switcherdata.LocalStorageBackup(ThemeChanger);
  }, []);
  useEffect(() => {
    const theme = store.getState();
    ThemeChanger({
      ...theme,
      dataNavStyle: "menu-click",
      dataNavLayout: "horizontal",
      dataMenuStyles: "dark"
    });
    return () => {
      ThemeChanger({
        ...theme,
        dataNavStyle: "",
        dataNavLayout: `${
          localStorage.ynexlayout == "horizontal" ? "horizontal" : "vertical"
        }`
      });
    };
  }, []);
  const customStyles: any = `${
    local_varaiable.colorPrimaryRgb != ""
      ? `--primary-rgb: ${local_varaiable.colorPrimaryRgb}`
      : ""
  };
  ${
    local_varaiable.colorPrimary != ""
      ? `--primary: ${local_varaiable.colorPrimary}`
      : ""
  };`;

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <html
            dir={local_varaiable.dir}
            className={local_varaiable.class}
            data-nav-layout={local_varaiable.dataNavLayout}
            data-toggled={local_varaiable.toggled}
            data-nav-style={local_varaiable.dataNavStyle}
            data-menu-position={local_varaiable.dataMenuPosition}
            data-menu-styles={local_varaiable.dataMenuStyles}
            style={customStyles}
          ></html>
        </Helmet>

        <div
          id="hs-overlay-switcher"
          className="hs-overlay hidden ti-offcanvas ti-offcanvas-right"
          tabIndex={-1}
        >
          <div className="ti-offcanvas-header">
            <h5 className="ti-offcanvas-title">Switcher</h5>
            <button
              type="button"
              className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-white/70 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
              data-hs-overlay="#hs-overlay-switcher"
            >
              <span className="sr-only">Close modal</span>
              <i className="ri-close-circle-line leading-none text-lg"></i>
            </button>
          </div>
          <div className="ti-offcanvas-body" id="switcher-body">
            <p className="switcher-style-head">Theme Color Mode:</p>
            <div className="grid grid-cols-3 gap-6 switcher-style">
              <div className="flex">
                <input
                  type="radio"
                  name="theme-style"
                  className="ti-form-radio"
                  id="switcher-light-theme"
                  checked={local_varaiable.class == "light"}
                  onChange={(_e) => {}}
                  onClick={() => switcherdata.Light(ThemeChanger)}
                />
                <label
                  htmlFor="switcher-light-theme"
                  className="text-xs text-gray-500 ms-2 dark:text-white/70"
                >
                  Light
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="theme-style"
                  className="ti-form-radio"
                  id="switcher-dark-theme"
                  checked={local_varaiable.class == "dark"}
                  onChange={(_e) => {}}
                  onClick={() => switcherdata.Dark(ThemeChanger)}
                />
                <label
                  htmlFor="switcher-dark-theme"
                  className="text-xs text-gray-500 ms-2 dark:text-white/70"
                >
                  Dark
                </label>
              </div>
            </div>
            <p className="switcher-style-head">Directions:</p>
            <div className="grid grid-cols-3 gap-6 switcher-style">
              <div className="flex">
                <input
                  type="radio"
                  name="direction"
                  className="ti-form-radio"
                  id="switcher-ltr"
                  checked={local_varaiable.dir == "ltr"}
                  onChange={(_e) => {}}
                  onClick={() => switcherdata.Ltr(ThemeChanger)}
                />
                <label
                  htmlFor="switcher-ltr"
                  className="text-xs text-gray-500 ms-2 dark:text-white/70"
                >
                  LTR
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="direction"
                  className="ti-form-radio"
                  id="switcher-rtl"
                  checked={local_varaiable.dir == "rtl"}
                  onChange={(_e) => {}}
                  onClick={() => switcherdata.Rtl(ThemeChanger)}
                />
                <label
                  htmlFor="switcher-rtl"
                  className="text-xs text-gray-500 ms-2 dark:text-white/70"
                >
                  RTL
                </label>
              </div>
            </div>
            <div className="theme-colors">
              <p className="switcher-style-head">Theme Primary:</p>
              <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                <div className="ti-form-radio switch-select">
                  <input
                    className="ti-form-radio color-input color-primary-1"
                    type="radio"
                    name="theme-primary"
                    checked={local_varaiable.colorPrimaryRgb == "58, 88, 146"}
                    onChange={(_e) => {}}
                    id="switcher-primary"
                    onClick={() => switcherdata.primaryColor1(ThemeChanger)}
                  />
                </div>
                <div className="ti-form-radio switch-select">
                  <input
                    className="ti-form-radio color-input color-primary-2"
                    type="radio"
                    name="theme-primary"
                    checked={local_varaiable.colorPrimaryRgb == "92, 144 ,163"}
                    onChange={(_e) => {}}
                    id="switcher-primary1"
                    onClick={() => switcherdata.primaryColor2(ThemeChanger)}
                  />
                </div>
                <div className="ti-form-radio switch-select">
                  <input
                    className="ti-form-radio color-input color-primary-3"
                    type="radio"
                    name="theme-primary"
                    checked={local_varaiable.colorPrimaryRgb == "161, 90 ,223"}
                    onChange={(_e) => {}}
                    id="switcher-primary2"
                    onClick={() => switcherdata.primaryColor3(ThemeChanger)}
                  />
                </div>
                <div className="ti-form-radio switch-select">
                  <input
                    className="ti-form-radio color-input color-primary-4"
                    type="radio"
                    name="theme-primary"
                    checked={local_varaiable.colorPrimaryRgb == "78, 172, 76"}
                    onChange={(_e) => {}}
                    id="switcher-primary3"
                    onClick={() => switcherdata.primaryColor4(ThemeChanger)}
                  />
                </div>
                <div className="ti-form-radio switch-select">
                  <input
                    className="ti-form-radio color-input color-primary-5"
                    type="radio"
                    name="theme-primary"
                    checked={local_varaiable.colorPrimaryRgb == "223, 90, 90"}
                    onChange={(_e) => {}}
                    id="switcher-primary4"
                    onClick={() => switcherdata.primaryColor5(ThemeChanger)}
                  />
                </div>
                <div className="ti-form-radio switch-select ltr:pl-0 rtl:pr-0 mt-1 color-primary-light">
                  <div className="theme-container-primary">
                    <button className="">nano</button>
                  </div>
                  <div className="pickr-container-primary">
                    <div className="pickr">
                      <button
                        className="pcr-button"
                        onClick={(ele: any) => {
                          if (ele.target.querySelector("input")) {
                            ele.target.querySelector("input").click();
                          }
                        }}
                      >
                        <Themeprimarycolor
                          theme={local_varaiable}
                          actionfunction={ThemeChanger}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ti-offcanvas-footer sm:flex justify-between">
            <Link
              to="#"
              id="reset-all"
              className="w-full ti-btn ti-btn-danger-full m-1"
              onClick={() => switcherdata.Reset1(ThemeChanger)}
            >
              Reset
            </Link>
          </div>
        </div>
      </HelmetProvider>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landingswitcher);
