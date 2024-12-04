import { FC, Fragment } from "react";
import { useNavigate } from "react-router-dom";

interface Error404Props {}

const Error404: FC<Error404Props> = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page in history
  };
  return (
    <Fragment>
      <div className="page error-bg dark:!bg-bodybg" id="particles-js">
        <div className="error-page">
          <div className="container text-defaulttextcolo dark:text-defaulttextcolor/70r text-defaultsize">
            <div className="text-center p-5 my-auto">
              <div className="flex items-center justify-center h-full !text-defaulttextcolor">
                <div className="xl:col-span-3"></div>
                <div className="xl:col-span-6 col-span-12">
                  <p className="error-text sm:mb-0 mb-2">404</p>
                  <p className="text-[1.125rem] font-semibold mb-4">
                    Опа 😭! Страницата, която търсите, не съществува.
                  </p>
                  <div className="flex justify-center items-center mb-[3rem]">
                    <div className="xl:col-span-6 w-[50%]">
                      <p className="mb-0 opacity-[0.7]">
                        Извиняваме се за неудобството! Страницата, която се
                        опитвате да достъпите, не е на линия или никога не е
                        съществувала. :(
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleGoBack}
                    className="ti-btn bg-primary text-white font-semibold"
                  >
                    <i className="ri-arrow-left-line align-middle inline-block"></i>
                    Назад
                  </button>
                </div>
                <div className="xl:col-span-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Error404;
