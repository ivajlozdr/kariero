import React from "react";
import { useSelector, useDispatch } from "react-redux";

const RedirectCard: React.FC = () => {
  // Redux selectors and dispatch
  const local_variable = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // Determine color mode based on Redux state
  const colorMode = local_variable.class;

  const color = colorMode === "light" ? "#715ffa" : "#422afb";

  return (
    <div className="card-container">
      <a href="#/admin/mealplan" className="card-link">
        <div className="box">
          <div className="card-header">
            <span className="gradient-text">
              <b>Хранителен план</b>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon"
              style={{ color: color }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 15l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </div>
          <div className="card-body">
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
