import React from "react";

interface Props {
  message: string;
}

const Tooltip: React.FC<Props> = ({ message }) => {
  return (
    <div
      className="absolute bg-white dark:bg-[#313335] bottom-[calc(100%-6px)] left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 text-defaulttextcolor text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none shadow-lg whitespace-normal min-w-[200px] max-w-[400px]"
      role="tooltip"
    >
      <span className="block text-center">{message}</span>
      <div
        className="absolute bg-white dark:bg-[#313335] top-full left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 -mt-[6px]"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Tooltip;
