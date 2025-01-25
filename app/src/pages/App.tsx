import { Fragment, useEffect, useState } from "react";
import Loader from "../components/common/loader/loader";
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
  showNotification
} from "../container/home/helper_functions";
import { NotificationState } from "../container/types_common";
import Notification from "../components/common/notification/Notification";
import { handleNotificationClose } from "../container/functions_common";

function App() {
  const [verticalMenuClass, setVerticalMenuClass] = useState("");
  const [notification, setNotification] = useState<NotificationState | null>(
    null
  );
  const location = useLocation();
  const navigate = useNavigate();

  const handleVerticalMenuClick = () => {
    if (localStorage.getItem("karieroverticalstyles") === "icontext") {
      setVerticalMenuClass("");
    }

    if (window.innerWidth > 992) {
      const htmlElement = document.documentElement;
      if (htmlElement.getAttribute("icon-overlay") === "open") {
        htmlElement.setAttribute("icon-overlay", "");
      }
    }
  };

  useEffect(() => {
    import("preline");
  }, []);

  useEffect(() => {
    const validateToken = async () => {
      // Function to check the validity of the user's token
      const redirectUrl = await checkTokenValidity();
      if (redirectUrl) {
        showNotification(
          setNotification,
          "Вашата сесия е изтекла. Моля, влезте в профила Ви отново.",
          "error"
        );
      }
    };

    validateToken(); // Trigger token validation on every location change
  }, [location]);
  return (
    <Fragment>
      <Loader />
      <Provider store={store}>
        <HelmetProvider>
          <Helmet
            htmlAttributes={{
              lang: "en",
              dir: "ltr",
              "data-menu-styles": "dark",
              class: "light",
              "data-nav-layout": "vertical",
              "data-header-styles": "light",
              "data-vertical-style": "overlay",
              loader: "disable",
              "data-icon-text": verticalMenuClass
            }}
          />
          <Switcher />
          <div className="page">
            <Header />
            <Sidebar />
            <div className="content main-index">
              <div className="main-content" onClick={handleVerticalMenuClick}>
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
                <Outlet />
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
