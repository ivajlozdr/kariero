import React, { useState } from "react";
import { CareerCardProps } from "../quiz-types";

// Stylized CareerCard component with scrollable skills at the bottom
const CareerCard: React.FC<CareerCardProps> = ({
  title,
  description,
  skills,
  reason,
  setNotification,
  handleClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const hardcodedSalary = "60,000 - 90,000 лв.";

  const handleReasonClick = () => {
    setNotification({ message: reason, type: "reason" });
  };

  return (
    <div
      className="relative group w-full max-w-sm cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="absolute inset-0 rounded-xl border-4 border-primary/50 group-hover:border-secondary group-hover:border-6"></div>

      <div className="relative z-10 rounded-xl p-6 w-full text-defaulttextcolor shadow-lg group-hover:shadow-2xl flex flex-col justify-between">
        <div className="flex-grow mb-4">
          <h3
            className="font-bold text-2xl group-hover:text-secondary text-primary mb-4 truncate"
            title={title}
          >
            {title}
          </h3>
          <p
            className={`text-sm text-defaulttextcolor dark:text-defaulttextcolor/70 leading-relaxed ${
              isHovered
                ? "max-h-[80px] overflow-auto"
                : "max-h-12 overflow-hidden"
            } transition-all duration-300`}
          >
            {description}
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <div className="mt-[0.5rem] p-1 px-2 rounded-lg bg-gradient-to-r from-primary to-secondary shadow-sm text-center text-xs flex items-center space-x-1">
              <span className="font-semibold text-white text-xs">
                Средна заплата:
              </span>
              <h4 className="font-bold text-white text-sm">
                {hardcodedSalary}
              </h4>
            </div>
          </div>
          <div className="flex items-center">
            <span
              className="italic text-xs text-primary cursor-pointer"
              onClick={handleReasonClick}
            >
              Защо тази кариера?
            </span>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-lg group-hover:text-secondary group-hover:border-secondary text-primary font-semibold mb-2 border-l-4 border-primary pl-3">
            Умения, които са нужни
          </h4>
          <div className="flex-grow">
            <ul
              className={`list-none overflow-y-auto space-y-2 pr-2 transition-all duration-300 ${
                isHovered ? "h-[9rem]" : "h-[10rem]"
              }`}
            >
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-white/10 py-1 px-3 rounded-lg text-defaulttextcolor dark:text-defaulttextcolor/70 text-sm hover:bg-pink-600 transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
