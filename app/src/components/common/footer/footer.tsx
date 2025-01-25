import { FC, Fragment } from "react";

const Footer: FC = () => (
  <Fragment>
    <footer className="footer mt-auto xl:ps-[15rem] font-inter bg-white dark:bg-bodybg text-defaultsize text-gray dark:text-defaulttextcolor/50 leading-normal shadow-[0_0_0.4rem_rgba(0,0,0,0.1)] py-10">
      <div className="container mx-auto px-6 xl:ps-[15rem]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <h2 className="text-defaulttextcolor font-semibold dark:text-defaulttextcolor text-lg">
              За Нас
            </h2>
            <div className="space-y-1">
              <p className="text-sm">Проект №65</p>
              <p className="text-sm">2025 НОИТ</p>
            </div>
            <h2 className="text-defaulttextcolor font-semibold dark:text-defaulttextcolor text-lg">
              Изработено от
            </h2>
            <div className="space-y-1">
              <p className="text-sm">Ивайло Здравков</p>
              <p className="text-sm">Алекс Генов</p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-defaulttextcolor font-semibold dark:text-defaulttextcolor text-lg">
              Използвани Технологии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 auto-rows-min">
              <div className="flex items-center space-x-2">
                <i className="ti ti-brand-react text-lg"></i>
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ti ti-brand-tailwind text-lg"></i>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ti ti-brand-typescript text-lg"></i>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ti ti-brand-python text-lg"></i>
                <span>Python</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ti ti-brand-javascript text-lg"></i>
                <span>Express JS</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ti ti-brand-vite text-lg"></i>
                <span>Vite</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ti ti-brand-nodejs text-lg"></i>
                <span>NodeJS</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ti ti-brand-openai text-lg"></i>
                <span>OpenAI API</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ti ti-database text-lg"></i>
                <span>MySQL</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ti ti-api text-lg"></i>
                <span>O*NET API</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-defaulttextcolor font-semibold dark:text-defaulttextcolor text-lg">
              Страници
            </h2>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href={`${import.meta.env.BASE_URL}app/home`}
                  className="hover:underline transition-all duration-300"
                >
                  Начало
                </a>
              </li>
              <li>
                <a
                  href={`${import.meta.env.BASE_URL}app/quiz`}
                  className="hover:underline transition-all duration-300"
                >
                  За Нас
                </a>
              </li>
              <li>
                <a
                  href={`${import.meta.env.BASE_URL}app/contact`}
                  className="hover:underline transition-all duration-300"
                >
                  Контакт
                </a>
              </li>
            </ul>
          </div>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 180" // Ensures the aspect ratio is maintained
            className="w-full h-auto max-w-full max-h-full" // Ensures the SVG fits inside its parent container
          >
            <path
              d="M0 0 C8.649604 6.154526 15.073933 15.184832 19 25 C19 25.66 19 26.32 19 27 C31.587957 19.027627 43.25501 9.60315 55.064453 0.540771 C56.380532 -0.468962 57.698843 -1.475795 59.019531 -2.479492 C60.40415 -3.542535 61.775615 -4.622832 63.136719 -5.71582 C63.834102 -6.265928 64.531484 -6.816035 65.25 -7.382812 C66.185859 -8.135222 66.185859 -8.135222 67.140625 -8.902832 C69 -10 69 -10 73 -10 C73.02333 4.846479 73.04098 19.692957 73.051812 34.539451 C73.056975 41.432475 73.064017 48.325489 73.075439 55.218506 C73.086447 61.864462 73.092276 68.510409 73.094877 75.156374 C73.096732 77.698229 73.100354 80.240084 73.10573 82.781935 C73.112937 86.328515 73.113991 89.875045 73.113525 93.421631 C73.117121 94.48402 73.120716 95.546409 73.12442 96.640991 C73.123046 97.601579 73.121671 98.562168 73.120255 99.551865 C73.121637 100.811495 73.121637 100.811495 73.123048 102.096572 C73 104 73 104 72 105 C59.79 105 47.58 105 35 105 C35 77.61 35 50.22 35 22 C31.04 24.97 27.08 27.94 23 31 C22.34 31 21.68 31 21 31 C21.495 32.794375 21.495 32.794375 22 34.625 C25.393248 50.199764 22.146662 65.490274 14 79 C5.064408 92.593295 -8.168898 100.837338 -23.853516 104.60083 C-40.760202 107.744874 -56.924911 103.544933 -71 94 C-83.571876 85.363022 -91.219244 70.741272 -94 56 C-94.277797 53.242513 -94.334915 50.520177 -94.3125 47.75 C-94.30686 47.009836 -94.301221 46.269673 -94.29541 45.50708 C-93.960273 30.195309 -87.77271 15.966813 -77 5 C-76.34 5 -75.68 5 -75 5 C-75 4.34 -75 3.68 -75 3 C-53.520362 -15.865965 -22.934901 -15.407188 0 0 Z M-43 -7 C-43 19.73 -43 46.46 -43 74 C-39.192353 72.476941 -37.241433 71.64046 -34.242188 69.234375 C-33.543757 68.681045 -32.845327 68.127715 -32.125732 67.557617 C-31.382991 66.961104 -30.640249 66.36459 -29.875 65.75 C-23.39832 60.626209 -16.854899 55.623184 -10.1875 50.75 C-3.578541 45.91393 2.962975 41.007861 9.433594 35.988281 C11.607401 34.30416 13.794564 32.642346 16 31 C14.694393 19.983937 7.356374 10.890584 -1 4 C-14.779075 -5.839052 -25.766591 -7 -43 -7 Z M11.773438 38.078125 C10.48506 39.068608 10.48506 39.068608 9.170654 40.079102 C8.248088 40.795498 7.325522 41.511895 6.375 42.25 C4.452199 43.729656 2.529019 45.208818 0.605469 46.6875 C-0.347954 47.422266 -1.301377 48.157031 -2.283691 48.914062 C-5.938954 51.721052 -9.62065 54.491399 -13.3125 57.25 C-13.944785 57.722764 -14.57707 58.195527 -15.228516 58.682617 C-16.497783 59.631645 -17.767152 60.580539 -19.036621 61.529297 C-21.138422 63.103687 -23.235605 64.684086 -25.332031 66.265625 C-26.050281 66.806709 -26.76853 67.347793 -27.508545 67.905273 C-28.87293 68.933323 -30.236441 69.962533 -31.598877 70.993164 C-32.218513 71.459482 -32.838149 71.925801 -33.476562 72.40625 C-34.06647 72.860322 -34.656377 73.314395 -35.26416 73.782227 C-37 75 -37 75 -40.4375 76.640625 C-43.494279 79.455098 -43.416518 80.192371 -43.585938 84.203125 C-43.546139 86.219583 -43.474697 88.235615 -43.375 90.25 C-43.34793 91.28125 -43.320859 92.3125 -43.292969 93.375 C-43.222308 95.918788 -43.123721 98.458331 -43 101 C-26.165677 101.725791 -12.249627 99.092165 1.28125 88.15625 C11.4258 78.63598 18.648293 65.189151 19.132812 51.152344 C19.135446 49.747396 19.132726 48.342429 19.125 46.9375 C19.128867 46.230449 19.132734 45.523398 19.136719 44.794922 C19.130327 41.391055 19.064538 38.252755 18 35 C15.136981 35 14.026662 36.334395 11.773438 38.078125 Z "
              fill="currentColor"
              transform="translate(201,64)"
            />
            <path
              d="M0 0 C12.54 0 25.08 0 38 0 C38 17.82 38 35.64 38 54 C54.83 54 71.66 54 89 54 C89 36.51 89 19.02 89 1 C90.32 1 91.64 1 93 1 C93 37.96 93 74.92 93 113 C91.68 113 90.36 113 89 113 C89 94.85 89 76.7 89 58 C72.17 58 55.34 58 38 58 C38 75.82 38 93.64 38 112 C25.46 112 12.92 112 0 112 C0 75.04 0 38.08 0 0 Z "
              fill="currentColor"
              transform="translate(5,54)"
            />
            <path
              d="M0 0 C35.97 0 71.94 0 109 0 C109 1.32 109 2.64 109 4 C97.12 4 85.24 4 73 4 C73 41.29 73 78.58 73 117 C60.79 117 48.58 117 36 117 C35 116 35 116 34.876952 114.127807 C34.878335 112.8903 34.878335 112.8903 34.879745 111.627792 C34.878371 110.684032 34.876996 109.740273 34.87558 108.767914 C34.879175 107.724226 34.88277 106.680539 34.886475 105.605225 C34.886329 104.512679 34.886183 103.420133 34.886032 102.294479 C34.886732 98.663748 34.894527 95.033067 34.902344 91.402344 C34.904208 88.892706 34.905632 86.383067 34.906631 83.873428 C34.910067 77.930654 34.917957 71.987896 34.927981 66.04513 C34.940237 58.617981 34.945622 51.190829 34.951172 43.763672 C34.961912 30.509103 34.97951 17.254557 35 4 C23.45 4 11.9 4 0 4 C0 2.68 0 1.36 0 0 Z "
              fill="currentColor"
              transform="translate(287,52)"
            />
          </svg>
        </div>

        <div className="border-t border-gray/20 dark:border-defaulttextcolor/20 my-6"></div>

        <div className="text-center text-xs">
          <span>
            22-ра Национална Олимпиада по Информационни Технологии - 2025 г. -
            Професионална Гимназия по Икономика - гр. Перник
          </span>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
