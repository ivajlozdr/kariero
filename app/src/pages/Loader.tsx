import React, { useEffect, useState } from "react";
import { hatch } from "ldrs";

interface LoaderProps {
  description?: string;
}

const Loader: React.FC<LoaderProps> = ({ description }) => {
  const [dots, setDots] = useState<string>(".");

  hatch.register();

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length < 3) {
          return prev + ".";
        }
        return ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <l-hatch
        size="28"
        stroke="4"
        speed="3.5"
        color="rgb(var(--default-text-color))"
      ></l-hatch>
      <p className="mt-4 text-lg text-defaulttextcolor dark:text-defaulttextcolor/70">
        {description ? description + dots : `Моля изчакайте${dots}`}
      </p>
    </div>
  );
};

export default Loader;
