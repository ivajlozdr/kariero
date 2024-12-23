import React from "react";
import { RedirectCardProps } from "../home-types";

const RedirectCard: React.FC<RedirectCardProps> = ({
  href,
  title,
  description
}) => {
  return (
    <a
      href={href}
      className="card-link hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <div className="card flex flex-col hover:shadow-lg hover:scale-105">
        <div className="card-header p-3">
          <span className="gradient-text">
            <b>{title}</b>
          </span>
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              d="M653.328 125.024l-56.576 56.704L734.88 320H399.68C240.88 320 112 448.992 112 607.776c0 158.816 128 287.952 288 287.952v-80c-112 0-208-93.312-208-208.016 0-114.688 93.152-208 207.84-208h334.96l-137.888 137.856 56.528 56.56 234.48-234.496L653.344 125.024z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="card-body p-3">
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default RedirectCard;
