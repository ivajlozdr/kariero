import React, { useEffect, useState } from "react";
import { hatch } from "ldrs"; // Import the Hatch spinner from ldrs

const Loader: React.FC = () => {
  const [dots, setDots] = useState<string>(".");

  hatch.register();

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length < 3) {
          return prev + ".";
        }
        return "."; // Reset to one dot after three
      });
    }, 500); // Change the dots every 500 ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <l-hatch size="28" stroke="4" speed="3.5" color="black"></l-hatch>
      <p className="mt-4 text-lg text-gray-700">Моля изчакайте{dots}</p>
    </div>
  );
};

export default Loader;
