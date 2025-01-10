import React, { useState, useEffect } from "react";

interface NotificationProps {
  message: string;
  type: string;
  onClose: () => void;
  onConfirm?: () => void;
}

const QuizNotification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose,
  onConfirm
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

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
      console.log("true!");
    }
    handleClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {type === "reason" ? (
        <div
          className={`p-6 rounded-lg shadow-lg bg-[rgb(var(--body-bg))] glow-effect border-2 dark:border-white border-secondary text-center w-96 transform transition-transform duration-300 ${
            visible ? "scale-100" : "scale-75"
          } bg-green-500 dark:text-white text-secondary`}
        >
          <h2 className="block text-xl font-semibold mb-4">
            Защо ви препоръчваме тази кариера?
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
      ) : (
        <div
          className={`p-6 rounded-lg shadow-lg bg-[rgb(var(--body-bg))] glow-effect border-2 dark:border-white border-secondary text-center w-96 transform transition-transform duration-300 ${
            visible ? "scale-100" : "scale-75"
          } bg-green-500 dark:text-white text-secondary`}
        >
          <h2 className="block text-xl font-semibold mb-4">
            Сигурни ли сте, че искате да изберете {message}?
          </h2>
          <span className="block text-lg font-medium mb-6">
            След като изберете професията, ще бъдете пренасочени в страницата за
            професията. Сигурни ли сте, че искате да продължите?
          </span>
          <div className="flex justify-center space-x-4">
            <button
              className="px-6 py-3 bg-white dark:text-black text-secondary font-bold rounded-lg hover:bg-gray-200 transition-colors"
              onClick={handleConfirm}
              aria-label="Close notification"
            >
              Да
            </button>
            <button
              className="px-6 py-3 bg-white dark:text-black text-secondary font-bold rounded-lg hover:bg-gray-200 transition-colors"
              onClick={handleClose}
              aria-label="Close notification"
            >
              Не
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizNotification;
