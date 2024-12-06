import React, { useEffect, useState, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

interface FadeInWrapperProps {
  children: ReactNode;
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({ children }) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location.key]);

  return (
    <>
      <CSSTransition
        in={loading}
        timeout={500}
        classNames="fade"
        unmountOnExit
        key="loading"
      >
        <Loader />
      </CSSTransition>

      <CSSTransition
        in={isPageLoaded}
        timeout={600}
        classNames="fade"
        unmountOnExit
      >
        <div>{children}</div>
      </CSSTransition>
    </>
  );
};

export default FadeInWrapper;
