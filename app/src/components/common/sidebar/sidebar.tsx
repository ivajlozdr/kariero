import { FC, Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { MENUITEMS } from "./menuitems";
import { ThemeChanger } from "../../../redux/action";
import store from "../../../redux/store";
import logo1 from "../../../assets/images/brand-logos/desktop-logo.png";
import logo2 from "../../../assets/images/brand-logos/toggle-logo.png";
import logo3 from "../../../assets/images/brand-logos/desktop-dark.png";
import logo4 from "../../../assets/images/brand-logos/toggle-dark.png";
import logo5 from "../../../assets/images/brand-logos/desktop-white.png";
import logo6 from "../../../assets/images/brand-logos/toggle-white.png";
import SimpleBar from "simplebar-react";
import Menuloop from "../../ui/menuloop";

import gradientDark from "../../../assets/images/menu-bg-images/low-poly-grid-haikei-dark.svg";
import gradientLight from "../../../assets/images/menu-bg-images/low-poly-grid-haikei-light.svg";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({ local_varaiable, ThemeChanger }: any) => {
  const [menuitems, setMenuitems] = useState<any>(MENUITEMS);

  function closeMenuFn() {
    const closeMenuRecursively = (items: any) => {
      items?.forEach((item: any) => {
        item.active = false;
        closeMenuRecursively(item.children);
      });
    };
    closeMenuRecursively(MENUITEMS);
    setMenuitems((arr: any) => [...arr]);
  }

  useEffect(() => {
    const mainContent: any = document.querySelector(".main-content");
    mainContent.addEventListener("click", menuClose);
    window.addEventListener("resize", menuResizeFn);
  }, []);

  // const location = useLocation();
  const location = useLocation();

  function Onhover() {
    const theme = store.getState();
    if (
      (theme.toggled == "icon-overlay-close" ||
        theme.toggled == "detached-close") &&
      theme.iconOverlay != "open"
    ) {
      ThemeChanger({ ...theme, iconOverlay: "open" });
    }
  }
  function Outhover() {
    const theme = store.getState();
    if (
      (theme.toggled == "icon-overlay-close" ||
        theme.toggled == "detached-close") &&
      theme.iconOverlay == "open"
    ) {
      ThemeChanger({ ...theme, iconOverlay: "" });
    }
  }

  function menuClose() {
    const theme = store.getState();
    if (window.innerWidth <= 992) {
      ThemeChanger({ ...theme, toggled: "close" });
    }
    const overlayElement = document.querySelector(
      "#responsive-overlay"
    ) as HTMLElement | null;
    if (overlayElement) {
      overlayElement.classList.remove("active");
    }
    if (
      theme.dataNavLayout == "horizontal" ||
      theme.dataNavStyle == "menu-click" ||
      theme.dataNavStyle == "icon-click"
    ) {
      closeMenuFn();
    }
  }

  const WindowPreSize = [window.innerWidth];

  function menuResizeFn() {
    WindowPreSize.push(window.innerWidth);
    if (WindowPreSize.length > 2) {
      WindowPreSize.shift();
    }
    const theme = store.getState();
    if (WindowPreSize.length > 1) {
      if (
        WindowPreSize[WindowPreSize.length - 1] < 992 &&
        WindowPreSize[WindowPreSize.length - 2] >= 992
      ) {
        // less than 992;
        ThemeChanger({ ...theme, toggled: "close" });
      }

      if (
        WindowPreSize[WindowPreSize.length - 1] >= 992 &&
        WindowPreSize[WindowPreSize.length - 2] < 992
      ) {
        // greater than 992
        ThemeChanger({
          ...theme,
          toggled:
            theme.dataVerticalStyle == "doublemenu" ? "double-menu-open" : ""
        });
      }
    }
  }

  const Topup = () => {
    if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
      const Scolls = document.querySelectorAll(".app-sidebar");
      Scolls.forEach((e) => {
        e.classList.add("sticky-pin");
      });
    } else {
      const Scolls = document.querySelectorAll(".app-sidebar");
      Scolls.forEach((e) => {
        e.classList.remove("sticky-pin");
      });
    }
  };
  window.addEventListener("scroll", Topup);

  const level = 0;
  let hasParent = false;
  let hasParentLevel = 0;

  function setSubmenu(event: any, targetObject: any, MENUITEMS = menuitems) {
    const theme = store.getState();
    if (
      (window.screen.availWidth <= 992 || theme.dataNavStyle != "icon-hover") &&
      (window.screen.availWidth <= 992 || theme.dataNavStyle != "menu-hover")
    ) {
      if (!event?.ctrlKey) {
        for (const item of MENUITEMS) {
          if (item === targetObject) {
            item.active = true;
            item.selected = true;
            // setMenuAncestorsActive(MENUITEMS,item);
            setMenuAncestorsActive(item);
          } else if (!item.active && !item.selected) {
            item.active = false; // Set active to false for items not matching the target
            item.selected = false; // Set active to false for items not matching the target
          } else {
            // removeActiveOtherMenus(MENUITEMS,item);
            removeActiveOtherMenus(item);
          }
          if (item.children && item.children.length > 0) {
            setSubmenu(event, targetObject, item.children);
          }
        }
      }
    }

    setMenuitems((arr: any) => [...arr]);
  }
  function getParentObject(obj: any, childObject: any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (
          typeof obj[key] === "object" &&
          JSON.stringify(obj[key]) === JSON.stringify(childObject)
        ) {
          return obj; // Return the parent object
        }
        if (typeof obj[key] === "object") {
          const parentObject: any = getParentObject(obj[key], childObject);
          if (parentObject !== null) {
            return parentObject;
          }
        }
      }
    }
    return null; // Object not found
  }
  function setMenuAncestorsActive(targetObject: any) {
    const parent = getParentObject(menuitems, targetObject);
    const theme = store.getState();
    if (parent) {
      if (hasParentLevel > 2) {
        hasParent = true;
      }
      parent.active = true;
      parent.selected = true;
      hasParentLevel += 1;
      setMenuAncestorsActive(parent);
    } else if (!hasParent) {
      if (theme.dataVerticalStyle == "doublemenu") {
        // console.log("closee")
        // html.setAttribute('data-toggled', 'double-menu-close');
        ThemeChanger({ ...theme, toggled: "double-menu-close" });
      }
    }
  }
  function removeActiveOtherMenus(item: any) {
    if (item) {
      if (Array.isArray(item)) {
        for (const val of item) {
          val.active = false;
          val.selected = false;
        }
      }
      item.active = false;
      item.selected = false;

      if (item.children && item.children.length > 0) {
        removeActiveOtherMenus(item.children);
      }
    } else {
      return;
    }
  }
  //
  function setMenuUsingUrl(currentPath: any) {
    hasParent = false;
    hasParentLevel = 1;
    // Check current url and trigger the setSidemenu method to active the menu.
    const setSubmenuRecursively = (items: any) => {
      items?.forEach((item: any) => {
        if (item.path == "") {
        } else if (item.path === currentPath) {
          setSubmenu(null, item);
        }
        setSubmenuRecursively(item.children);
      });
    };
    setSubmenuRecursively(MENUITEMS);
  }
  const [previousUrl, setPreviousUrl] = useState("/");

  useEffect(() => {
    // Select the target element
    const targetElement = document.documentElement;

    // Create a MutationObserver instance
    const observer = new MutationObserver(handleAttributeChange);

    // Configure the observer to watch for attribute changes
    const config = { attributes: true };

    // Start observing the target element
    observer.observe(targetElement, config);
    let currentPath = location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1)
      : location.pathname;

    if (currentPath !== previousUrl) {
      setMenuUsingUrl(currentPath);
      setPreviousUrl(currentPath);
    }

    // ... the rest of your useEffect code
  }, [location]);

  //
  function toggleSidemenu(
    event: any,
    targetObject: any,
    MENUITEMS = menuitems
  ) {
    const theme = store.getState();
    let element = event.target;

    if (
      (window.screen.availWidth <= 992 || theme.dataNavStyle != "icon-hover") &&
      (window.screen.availWidth <= 992 || theme.dataNavStyle != "menu-hover")
    ) {
      for (const item of MENUITEMS) {
        if (item === targetObject) {
          if (theme.dataVerticalStyle == "doublemenu" && item.active) {
            return;
          }
          item.active = !item.active;

          if (item.active) {
            closeOtherMenus(MENUITEMS, item);
          } else {
            if (theme.dataVerticalStyle == "doublemenu") {
              ThemeChanger({ ...theme, toggled: "double-menu-close" });
            }
          }
          setAncestorsActive(MENUITEMS, item);
        } else if (!item.active) {
          if (theme.dataVerticalStyle != "doublemenu") {
            item.active = false; // Set active to false for items not matching the target
          }
        }
        if (item.children && item.children.length > 0) {
          toggleSidemenu(event, targetObject, item.children);
        }
      }
      if (targetObject?.children && targetObject.active) {
        if (
          theme.dataVerticalStyle == "doublemenu" &&
          theme.toggled != "double-menu-open"
        ) {
          ThemeChanger({ ...theme, toggled: "double-menu-open" });
        }
      }
      if (
        element &&
        theme.dataNavLayout == "horizontal" &&
        (theme.dataNavStyle == "menu-click" ||
          theme.dataNavStyle == "icon-click")
      ) {
        const listItem = element.closest("li");
        if (listItem) {
          // Find the first sibling <ul> element
          const siblingUL = listItem.querySelector("ul");
          let outterUlWidth = 0;
          let listItemUL = listItem.closest("ul:not(.main-menu)");
          while (listItemUL) {
            listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
            if (listItemUL) {
              outterUlWidth += listItemUL.clientWidth;
            }
          }
          if (siblingUL) {
            // You've found the sibling <ul> element
            let siblingULRect = listItem.getBoundingClientRect();
            if (theme.dir == "rtl") {
              if (
                siblingULRect.left - siblingULRect.width - outterUlWidth + 150 <
                  0 &&
                outterUlWidth < window.innerWidth &&
                outterUlWidth + siblingULRect.width + siblingULRect.width <
                  window.innerWidth
              ) {
                targetObject.dirchange = true;
              } else {
                targetObject.dirchange = false;
              }
            } else {
              if (
                outterUlWidth + siblingULRect.right + siblingULRect.width + 50 >
                  window.innerWidth &&
                siblingULRect.right >= 0 &&
                outterUlWidth + siblingULRect.width + siblingULRect.width <
                  window.innerWidth
              ) {
                targetObject.dirchange = true;
              } else {
                targetObject.dirchange = false;
              }
            }
          }
          setTimeout(() => {
            let computedValue = siblingUL.getBoundingClientRect();
            if (computedValue.bottom > window.innerHeight) {
              siblingUL.style.height =
                window.innerHeight - computedValue.top - 8 + "px";
              siblingUL.style.overflow = "auto";
            }
          }, 100);
        }
      }
    }
    setMenuitems((arr: any) => [...arr]);
  }

  function setAncestorsActive(MENUITEMS: any, targetObject: any) {
    const theme = store.getState();
    const parent = findParent(MENUITEMS, targetObject);
    if (parent) {
      parent.active = true;
      if (parent.active) {
        ThemeChanger({ ...theme, toggled: "double-menu-open" });
      }

      setAncestorsActive(MENUITEMS, parent);
    } else {
      if (theme.dataVerticalStyle == "doublemenu") {
        ThemeChanger({ ...theme, toggled: "double-menu-close" });
      }
    }
  }

  function closeOtherMenus(MENUITEMS: any, targetObject: any) {
    for (const item of MENUITEMS) {
      if (item !== targetObject) {
        item.active = false;
        if (item.children && item.children.length > 0) {
          closeOtherMenus(item.children, targetObject);
        }
      }
    }
  }

  function findParent(MENUITEMS: any, targetObject: any) {
    for (const item of MENUITEMS) {
      if (item.children && item.children.includes(targetObject)) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const parent: any = findParent(
          (MENUITEMS = item.children),
          targetObject
        );
        if (parent) {
          return parent;
        }
      }
    }
    return null;
  }

  const Sideclick = () => {
    if (window.innerWidth > 992) {
      let html = document.documentElement;
      if (html.getAttribute("icon-overlay") != "open") {
        html.setAttribute("icon-overlay", "open");
      }
    }
  };

  function handleAttributeChange(mutationsList: any) {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        (mutation.attributeName === "data-nav-layout" ||
          mutation.attributeName === "data-vertical-style")
      ) {
        const newValue = mutation.target.getAttribute("data-nav-layout");
        if (newValue == "vertical") {
          let currentPath = location.pathname.endsWith("/")
            ? location.pathname.slice(0, -1)
            : location.pathname;
          currentPath = !currentPath ? "/dashboard/ecommerce" : currentPath;
          setMenuUsingUrl(currentPath);
        } else {
          closeMenuFn();
        }
      }
    }
  }

  return (
    <Fragment>
      <div
        id="responsive-overlay"
        onClick={() => {
          menuClose();
        }}
      ></div>
      <aside
        className="app-sidebar"
        id="sidebar"
        onMouseEnter={() => Onhover()}
        onMouseLeave={() => Outhover()}
        style={{
          backgroundImage:
            local_varaiable.class === "dark"
              ? `url(${gradientDark})`
              : `url(${gradientLight})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.3s ease"
        }}
      >
        <div className="main-sidebar-header">
          <a
            href={`${import.meta.env.BASE_URL}app/home/`}
            className="header-logo"
          >
            <img src={logo1} alt="logo" className="desktop-logo" />
            <img src={logo2} alt="logo" className="toggle-logo" />
            <img src={logo3} alt="logo" className="desktop-dark" />
            <img src={logo4} alt="logo" className="toggle-dark" />
            <img src={logo5} alt="logo" className="desktop-white" />
            <img src={logo6} alt="logo" className="toggle-white" />
          </a>
        </div>
        <SimpleBar className="main-sidebar" id="sidebar-scroll">
          <nav className="main-menu-container nav nav-pills flex-column sub-open">
            <ul className="main-menu" onClick={() => Sideclick()}>
              {MENUITEMS.map((levelone: any) => (
                <Fragment key={Math.random()}>
                  <li
                    className={`${
                      levelone.menutitle ? "slide__category" : ""
                    } ${levelone.type === "link" ? "slide" : ""}
                       ${levelone.type === "sub" ? "slide has-sub" : ""} ${
                      levelone?.active ? "open" : ""
                    } ${levelone?.selected ? "active" : ""}`}
                  >
                    {levelone.menutitle ? (
                      <span className="category-name">
                        {levelone.menutitle}
                      </span>
                    ) : (
                      ""
                    )}
                    {levelone.type === "link" ? (
                      <Link
                        to={levelone.path + "/"}
                        className={`side-menu__item ${
                          levelone.selected ? "active" : ""
                        }`}
                      >
                        {levelone.icon}
                        <span className="side-menu__label">
                          {levelone.title}
                          {levelone.badgetxt ? (
                            <span className={levelone.class}>
                              {levelone.badgetxt}
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {levelone.type === "empty" ? (
                      <Link to="#" className="side-menu__item">
                        {levelone.icon}
                        <span className="">
                          {levelone.title}
                          {levelone.badgetxt ? (
                            <span className={levelone.class}>
                              {levelone.badgetxt}
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {levelone.type === "sub" ? (
                      <Menuloop
                        MENUITEMS={levelone}
                        level={level + 1}
                        toggleSidemenu={toggleSidemenu}
                      />
                    ) : (
                      ""
                    )}
                  </li>
                </Fragment>
              ))}
            </ul>
          </nav>
        </SimpleBar>
      </aside>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Sidebar);
