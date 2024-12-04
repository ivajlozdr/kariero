
import { Fragment, useEffect, useState } from 'react';
import Loader from '../components/common/loader/loader';
import Footer from '../components/common/footer/footer';
import Sidebar from '../components/common/sidebar/sidebar';
import Switcher from '../components/common/switcher/switcher';
import Header from '../components/common/header/header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';


function App() {
  const [MyclassName, setMyClass] = useState("");

  const Bodyclickk = () => {
    if (localStorage.getItem("ynexverticalstyles") == "icontext") {
      setMyClass("");
    }
    if (window.innerWidth > 992) {
      let html = document.documentElement;
      if (html.getAttribute('icon-overlay') === 'open') {
          html.setAttribute('icon-overlay' ,"");
      }
    }
  }


 
  useEffect(() => {
    import("preline");

  }, []);
  return (
    <Fragment>
      <Loader/>
      <Provider store={store}>
        <HelmetProvider>
          <Helmet
            htmlAttributes={{
              lang: "en",
              dir: "ltr",
              "data-menu-styles": "dark",
              "class": "light",
              "data-nav-layout": "vertical",
              "data-header-styles": "light",
              "data-vertical-style": "overlay",
              "loader": "disable",
              "data-icon-text": MyclassName,
            }}
          />
          <Switcher />
          <div className='page'>
            <Header />
            <Sidebar/>
            <div className='content main-index'>
              <div className='main-content'
                onClick={Bodyclickk}
              >
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
