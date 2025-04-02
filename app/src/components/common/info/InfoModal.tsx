"use client";

import { type FC, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

interface InfoModalProps {
  onClick: () => void;
  isModalOpen: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
}

export const InfoModal: FC<InfoModalProps> = ({
  onClick,
  isModalOpen,
  title,
  description
}) => {
  const [animationState, setAnimationState] = useState({
    opacity: 0,
    transform: "scale(0.9)"
  });

  useEffect(() => {
    if (isModalOpen) {
      setAnimationState({ opacity: 1, transform: "scale(1)" });
      document.body.style.overflow = "hidden";
    } else {
      setAnimationState({ opacity: 0, transform: "scale(0.9)" });
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <CSSTransition
      in={isModalOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6">
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40 backdrop-blur-sm"
          onClick={onClick}
        ></div>
        <div
          className="modal relative z-[10000] w-full max-w-2xl bg-white dark:bg-bodybg rounded-xl shadow-2xl overflow-hidden"
          style={{
            ...animationState,
            transition: "opacity 300ms, transform 300ms"
          }}
        >
          <div className="flex items-center justify-between p-6 border-b border-primary/50">
            <h2 className="text-2xl font-bold dark:text-white flex items-center">
              <i className="ti ti-info-circle mr-2 text-primary"></i>
              {title}
            </h2>
            <button
              onClick={onClick}
              className="dark:hover:text-white transition-colors"
            >
              <i className="ti ti-x text-xl"></i>
              <span className="sr-only">Затвори</span>
            </button>
          </div>

          <div className="max-h-[calc(100vh-12rem)] overflow-y-auto p-6 space-y-4">
            {description}
          </div>

          <div className="flex justify-end p-6 pt-2 border-t border-primary/50">
            <button
              onClick={onClick}
              className="bg-primary hover:bg-secondary text-white font-medium rounded-lg px-5 py-2.5 text-center transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center"
            >
              <i className="ti ti-check mr-1.5"></i>
              Затвори
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
