import React from "react";

interface Props {
  message: string;
}

const Technologies: React.FC<Props> = ({ message }) => {
  return (
    <div
      className="absolute bg-white dark:bg-[#313335] bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1 text-defaulttextcolor text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none shadow-lg"
      role="tooltip"
    >
      <span className="block text-center">{message}</span>
      <div
        className="absolute bg-white dark:bg-[#313335] top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Technologies;
