import { type FC } from "react";
import { useNavigate } from "react-router-dom";

const Redirect: FC = () => {
  const navigate = useNavigate();
  const handleRedirectToQuiz = () => {
    navigate("/app/quiz");
  };

  return (
    <div className="xl:col-span-6 col-span-12 mt-6">
      <div className="box custom-box h-[30rem] flex flex-col justify-center items-center">
        <div className="text-center p-6">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 className="text-xl font-semibold mb-4">Няма налични данни</h3>
          <p className="mb-6">
            Трябва първо да генерирате препоръки, за да видите индивидуалната
            статистика.
          </p>
          <button
            onClick={handleRedirectToQuiz}
            className="ti-btn ti-btn-primary-full rounded-md px-6 py-2.5 transition-all duration-300 hover:shadow-lg"
          >
            Генериране на препоръки
          </button>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
