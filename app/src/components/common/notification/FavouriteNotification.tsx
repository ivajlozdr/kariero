import React, { useState, useEffect } from "react";
import {
  FavouriteNotificationState,
  FavouriteNotificationType
} from "../../../types_common";

interface FavouriteNotificationProps {
  type: FavouriteNotificationType;
  favouriteNotification: FavouriteNotificationState;
  setFavouriteNotification: React.Dispatch<
    React.SetStateAction<FavouriteNotificationState | null>
  >;
}

const FavouriteNotification: React.FC<FavouriteNotificationProps> = ({
  type,
  favouriteNotification,
  setFavouriteNotification
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setFavouriteNotification(null);
  };

  const alertClass = type === "add" ? "alert-secondary" : "alert-danger";
  const iconClass = type === "add" ? "fill-secondary" : "fill-danger";
  const buttonClass = type === "add" ? "bg-secondary" : "bg-danger";

  return (
    <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
      <div
        className={`box bg-white border-0 ${
          visible ? "scale-100" : "scale-75"
        }`}
      >
        <div
          className={`alert custom-alert1 ${alertClass}`}
          id="dismiss-alert70"
        >
          <button
            type="button"
            className="btn-close ms-auto"
            onClick={handleClose}
            aria-label="Close"
          >
            <i className="bi bi-x"></i>
          </button>
          <div className="text-center px-5 pb-0">
            <svg
              className={`custom-alert-icon ${iconClass} inline-flex`}
              xmlns="http://www.w3.org/2000/svg"
              height="1.5rem"
              viewBox="0 0 24 24"
              width="1.5rem"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <h5 className="text-[1.25rem] !font-medium">
              {favouriteNotification.title}
            </h5>
            <p>{favouriteNotification.message}</p>
            <div className="">
              <button
                type="button"
                onClick={handleClose}
                className={`ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ${buttonClass} text-white m-1`}
              >
                Затвори
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteNotification;
