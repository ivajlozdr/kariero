import { FC, Fragment } from "react";
import { Link } from "react-router-dom";

interface Error401Props {}

const Error401: FC<Error401Props> = () => {
  return (
    <Fragment>
      <div className="page error-bg dark:!bg-bodybg" id="particles-js">
        <div className="error-page">
          <div className="container text-defaulttextcolor text-defaultsize">
            <div className="text-center p-5 my-auto">
              <div className="flex items-center justify-center h-full ">
                <div className="xl:col-span-3"></div>
                <div className="xl:col-span-6 col-span-12">
                  <p className="error-text sm:mb-0 mb-2">401</p>
                  <p className="text-[1.125rem] font-semibold mb-4 dark:text-defaulttextcolor/70">
                    Опа 😭! Неудобрен достъп.
                  </p>
                  <div className="flex justify-center items-center mb-[3rem]">
                    <div className="xl:col-span-6 w-[50%]">
                      <p className="mb-0 opacity-[0.7]">
                        Извиняваме се за неудобството! Нямате необходимите права
                        за достъп до тази страница. Моля, влезте в профила си
                        или се свържете с администратора за повече информация.
                        :(
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`${import.meta.env.BASE_URL}signin/`}
                    className="ti-btn bg-primary text-white font-semibold dark:border-defaultborder/10"
                  >
                    <i className="ri-arrow-left-line align-middle inline-block"></i>
                    Влезте в профила ви
                  </Link>
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

export default Error401;
