import React, { useEffect, useState, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import Loader from "../../../pages/Loader";

interface FadeInWrapperProps {
  children: ReactNode;
}

export const GlobalFadeInWrapper: React.FC<FadeInWrapperProps> = ({
  children
}) => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setShouldRender(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <>
      <CSSTransition in={loading} timeout={500} classNames="fade" unmountOnExit>
        <Loader />
      </CSSTransition>

      <CSSTransition
        in={!loading}
        timeout={600}
        classNames="fade"
        unmountOnExit
      >
        {shouldRender && <div>{children}</div>}
      </CSSTransition>
    </>
  );
};

export const FadeInWrapper: React.FC<FadeInWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <CSSTransition in={!loading} timeout={600} classNames="fade" unmountOnExit>
      <div>{children}</div>
    </CSSTransition>
  );
};
