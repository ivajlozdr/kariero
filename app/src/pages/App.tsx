import { Fragment, useEffect, useState } from "react";
import Footer from "../components/common/footer/footer";
import Sidebar from "../components/common/sidebar/sidebar";
import Switcher from "../components/common/switcher/switcher";
import Header from "../components/common/header/header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import store from "../redux/store";
import { Provider } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  checkTokenValidity,
  showNotification,
  handleNotificationClose,
  handleVerticalMenuClick
} from "../functions_common";
import { NotificationState } from "../types_common";
import Notification from "../components/common/notification/Notification";
import { GlobalFadeInWrapper } from "../components/common/loader/fadeinwrapper";

function App() {
  // Състояние за управление на класа на вертикалното меню
  const [verticalMenuClass, setVerticalMenuClass] = useState("");

  // Състояние за управление на известията
  const [notification, setNotification] = useState<NotificationState | null>(
    null
  );

  // Хук за получаване на текущото местоположение (път на URL-то)
  const location = useLocation();

  // Хук за управление на навигацията
  const navigate = useNavigate();

  // Зарежда preline
  useEffect(() => {
    import("preline");
  }, []);

  // Проверява валидността на токена
  useEffect(() => {
    const validateToken = async () => {
      const redirectUrl = await checkTokenValidity();
      if (redirectUrl) {
        showNotification(
          setNotification,
          "Вашата сесия е изтекла. Моля, влезте в профила Ви отново.",
          "error"
        );
      }
    };

    validateToken();
  }, [location]);

  return (
    <Fragment>
      <Provider store={store}>
        <HelmetProvider>
          <Helmet
            htmlAttributes={{
              lang: "en", // Език на приложението
              dir: "ltr", // Посока на текста
              "data-menu-styles": "light",
              class: "light",
              "data-nav-layout": "vertical", // Вертикално разположение на навигацията
              "data-header-styles": "light", // Светъл стил за хедъра
              "data-vertical-style": "overlay", // Стил за вертикалното меню
              loader: "disable", // Оключване на лоудъра
              "data-icon-text": verticalMenuClass // Клас за иконите в менюто
            }}
          />
          <Switcher />
          <div className="page">
            <Header />
            <Sidebar />
            <div className="content main-index">
              <div
                className="main-content"
                onClick={() => handleVerticalMenuClick(setVerticalMenuClass)}
              >
                {notification && (
                  <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() =>
                      handleNotificationClose(
                        notification,
                        setNotification,
                        navigate
                      )
                    }
                  />
                )}
                <GlobalFadeInWrapper>
                  <Outlet />
                </GlobalFadeInWrapper>
              </div>
            </div>
            <Footer />
          </div>
        </HelmetProvider>
      </Provider>
    </Fragment>
  );
}

export default App;
