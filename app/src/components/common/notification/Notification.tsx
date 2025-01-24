import React, { useState, useEffect } from "react";

interface NotificationProps {
  message: string;
  type: "success" | "error" | "warning";
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`p-6 rounded-lg shadow-lg bg-[rgb(var(--body-bg))] glow-effect border-2 dark:border-white border-secondary text-center w-96 transform transition-transform duration-300 ${
          visible ? "scale-100" : "scale-75"
        } ${
          type === "success"
            ? "bg-green-500 dark:text-white text-secondary"
            : type === "error"
            ? "bg-red-500 dark:text-white text-secondary"
            : "bg-yellow-500 dark:text-white text-secondary"
        }`}
      >
        <h2 className="block text-xl font-semibold mb-4">
          {type === "success" && "🎉 Успех!"}
          {type === "error" && "⚠️ Възникна грешка!"}
          {type === "warning" && "⚠️ Внимание!"}
        </h2>
        <span className="block text-lg font-medium mb-6">{message}</span>
        <button
          className="px-6 py-3 bg-white dark:text-black text-secondary font-bold rounded-lg hover:bg-gray-200 transition-colors"
          onClick={handleClose}
          aria-label="Close notification"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Notification;
