import { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import store from "../../../redux/store";
import { ThemeChanger } from "../../../redux/action";
import * as switcherdata from "./switcherdata/switcherdata";
import { Link } from "react-router-dom";

const Landingswitcher = ({ local_varaiable, ThemeChanger }: any) => {
  // useEffect за извикване на LocalStorageBackup при инициализация на компонента
  useEffect(() => {
    switcherdata.LocalStorageBackup(ThemeChanger);
  }, []);

  // useEffect за задаване на тема и стил на навигация от Redux store
  useEffect(() => {
    const theme = store.getState(); // Взима текущото състояние на Redux store
    ThemeChanger({
      ...theme,
      dataNavStyle: "menu-click", // Задава стил на навигацията
      dataNavLayout: "horizontal", // Задава оформление на навигацията
      dataMenuStyles: "dark" // Задава стил на менюто
    });

    return () => {
      // Връща стойностите към предишните при унищожаване на компонента
      ThemeChanger({
        ...theme,
        dataNavStyle: "",
        dataNavLayout: `${
          localStorage.karierolayout == "horizontal" ? "horizontal" : "vertical"
        }`
      });
    };
  }, []);

  // Дефинира персонализирани CSS стилове въз основа на локалните променливи
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
      {/* HelmetProvider за управление на мета датата на страницата */}
      <HelmetProvider>
        <Helmet>
          <html
            dir={local_varaiable.dir} // Посока на текста (LTR или RTL)
            className={local_varaiable.class} // Клас на текущата тема (light/dark)
            data-nav-layout={local_varaiable.dataNavLayout} // Оформление на навигацията
            data-toggled={local_varaiable.toggled} // Текущото състояние на навигацията
            data-nav-style={local_varaiable.dataNavStyle} // Стил на навигацията
            data-menu-position={local_varaiable.dataMenuPosition} // Позиция на менюто
            data-menu-styles={local_varaiable.dataMenuStyles} // Стил на менюто
            style={customStyles} // Задаване на персонализирани CSS променливи
          ></html>
        </Helmet>

        {/* Offcanvas за управление на настройките на темата */}
        <div
          id="hs-overlay-switcher"
          className="hs-overlay hidden ti-offcanvas ti-offcanvas-right"
          tabIndex={-1}
        >
          <div className="ti-offcanvas-header">
            <h5 className="ti-offcanvas-title">Настройки</h5>
            <button
              type="button"
              className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-white/70 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
              data-hs-overlay="#hs-overlay-switcher"
            >
              <span className="sr-only">Затвори</span>
              <i className="ri-close-circle-line leading-none text-lg"></i>
            </button>
          </div>
          <div className="ti-offcanvas-body" id="switcher-body">
            <p className="switcher-style-head">Тема на приложението:</p>
            <div className="grid grid-cols-3 gap-6 switcher-style">
              {/* Бутон за светла тема */}
              <div className="flex">
                <input
                  type="radio"
                  name="theme-style"
                  className="ti-form-radio"
                  id="switcher-light-theme"
                  checked={local_varaiable.class == "light"}
                  onChange={(_e) => {}} // Нищо лмфао
                  onClick={() => switcherdata.Light(ThemeChanger)} // Задава светла тема
                />
                <label
                  htmlFor="switcher-light-theme"
                  className="text-xs text-gray-500 ms-2 dark:text-white/70"
                >
                  Светла
                </label>
              </div>
              {/* Бутон за тъмна тема */}
              <div className="flex">
                <input
                  type="radio"
                  name="theme-style"
                  className="ti-form-radio"
                  id="switcher-dark-theme"
                  checked={local_varaiable.class == "dark"}
                  onChange={(_e) => {}} // Нищо лмфао
                  onClick={() => switcherdata.Dark(ThemeChanger)} // Задава тъмна тема
                />
                <label
                  htmlFor="switcher-dark-theme"
                  className="text-xs text-gray-500 ms-2 dark:text-white/70"
                >
                  Тъмна
                </label>
              </div>
            </div>
          </div>
          {/* Бутон за ресет на настройките */}
          <div className="ti-offcanvas-footer sm:flex justify-between">
            <Link
              to="#"
              id="reset-all"
              className="w-full ti-btn ti-btn-danger-full m-1"
              onClick={() => switcherdata.Reset1(ThemeChanger)} // Извиква функция за ресет
            >
              Връщане на начални настройки
            </Link>
          </div>
        </div>
      </HelmetProvider>
    </div>
  );
};

// Свързва компонента с Redux store
const mapStateToProps = (state: any) => ({
  local_varaiable: state
});

// Експортира компонента, свързан с Redux
export default connect(mapStateToProps, { ThemeChanger })(Landingswitcher);
