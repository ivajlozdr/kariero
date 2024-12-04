import { Fragment, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import AuthenticationSwitcher from "../components/common/switcher/switcherdata/authenticationswitcher";

function Authenticationlayout() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <Fragment>
      <Provider store={store}>
        <HelmetProvider>
          <Helmet>
            <body className=""></body>
          </Helmet>
          <Outlet />
          <AuthenticationSwitcher />
        </HelmetProvider>
      </Provider>
    </Fragment>
  );
}

export default Authenticationlayout;
