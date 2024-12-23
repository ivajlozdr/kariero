import React from "react";

const RedirectCard: React.FC = () => {
  return (
    <div className="redirect-card-wrapper p-4">
      <a
        href="#/admin/mealplan"
        className="card-link hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <div className="card">
          <div className="card-header p-3">
            <span className="gradient-text">
              <b>Хранителен план</b>
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
            <p>
              Създайте подходящия за вас хранителен план с изкуствен интелект в
              зависимост от интензивността на физическо натоварване!
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default RedirectCard;
