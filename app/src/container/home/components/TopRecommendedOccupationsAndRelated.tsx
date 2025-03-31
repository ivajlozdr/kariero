import { FC, Fragment, useMemo, useState } from "react";
import { useGlobalState } from "../../../pages/GlobalStateProvider";
import { Link } from "react-router-dom";
import { MostRecommendedOccupationsChart } from "./Charts";
import { OccupationSeriesType } from "../home-types";
import {
  MostNeededQuality,
  TopRecommendedOccupation
} from "../../../types_common";
import {
  paginateBarChartData,
  getTotalBarChartPages,
  handleBarChartPageChange,
  handleOccupationSortCategory
} from "../helper_functions";
import { useMediaQuery } from "react-responsive";
import { occupationDisplayNames } from "../home-data";

interface TopRecommendedOccupationsAndRelatedProps {
  dataType: "individual" | "platform";
}

const TopRecommendedOccupationsAndRelated: FC<TopRecommendedOccupationsAndRelatedProps> = ({dataType}) => {
  const { data } = useGlobalState();
  const pageSize = 5; // Размер на страницата (брой елементи на страница)
  const [currentChartPage, setCurrentChartPage] = useState(1); // Текущата страница на графиката
  const [occupationSortCategory, setOccupationSortCategory] =
    useState("Occupations"); // Категория за сортиране (IMDb, Metascore, RottenTomatoes)

  // Меморизиране на данните за сериите за графиката на филмите
  const seriesDataForMoviesAndSeriesByRatingsChart: OccupationSeriesType =
    useMemo(() => {
      // Пагиниране на обикновени професии
      const regularOccupations = paginateBarChartData<TopRecommendedOccupation>(
        data.topRecommendedOccupations[dataType] || [],
        currentChartPage,
        pageSize
      );

      // Пагиниране на свързани професии
      const relatedOccupations = paginateBarChartData<MostNeededQuality>(
        data.topRecommendedRelatedOccupations[dataType] || [],
        currentChartPage,
        pageSize
      );

      // Връщане на разделените данни
      return {
        regularOccupations,
        relatedOccupations
      };
    }, [currentChartPage, data]);

  // Меморизиране на общия брой страници на графиката
  const totalChartPages = useMemo(() => {
    return getTotalBarChartPages(
      (data.topRecommendedOccupations[dataType] || []).length, // Използваме дължината на IMDb рейтингите
      pageSize
    );
  }, [(data.topRecommendedOccupations[dataType] || []).length, pageSize]);

  // Обработчици за пагинация (предишна и следваща страница)
  const handlePrevChartPage = () => {
    handleBarChartPageChange(
      "prev", // Преминаване на предишната страница
      currentChartPage,
      pageSize,
      (data.topRecommendedOccupations[dataType] || []).length,
      setCurrentChartPage
    );
  };

  const handleNextChartPage = () => {
    handleBarChartPageChange(
      "next", // Преминаване на следващата страница
      currentChartPage,
      pageSize,
      (data.topRecommendedOccupations[dataType] || []).length,
      setCurrentChartPage
    );
  };

  // Отзивчиви точки за прекъсване
  const is1461 = useMediaQuery({ query: "(max-width: 1461px)" });
  const is1546 = useMediaQuery({ query: "(max-width: 1546px)" });
  const is1675 = useMediaQuery({ query: "(max-width: 1675px)" });

  return (
    <Fragment>
      <div className="xl:col-span-6 col-span-12 mt-6">
        <div className="box custom-box">
          <div className="custom-box-header justify-between">
            <div
              className="box-title"
              style={{
                maxWidth:
                  window.innerWidth < 1400
                    ? "100%"
                    : is1675
                    ? is1461
                      ? "200px"
                      : "250px"
                    : "100%"
              }}
            >
              {`Най-препоръчвани ${
                occupationDisplayNames[
                  occupationSortCategory as keyof typeof occupationDisplayNames
                ]
              }`}
            </div>

            <div className="flex flex-wrap gap-2">
              <div
                className="inline-flex rounded-md shadow-sm"
                role="group"
                aria-label="Sort By"
              >
                {["Occupations", "Related"].map((category, index) => (
                  <button
                    key={category}
                    type="button"
                    className={`ti-btn-group !border-0 !text-xs !py-2 !px-3 ${
                      category === occupationSortCategory
                        ? "ti-btn-primary-full text-white"
                        : "charts-options-unselected"
                    } ${
                      index === 0
                        ? "rounded-l-md"
                        : index === 2
                        ? "rounded-r-md"
                        : ""
                    }`}
                    onClick={() =>
                      handleOccupationSortCategory(
                        category,
                        setOccupationSortCategory
                      )
                    }
                  >
                    {
                      occupationDisplayNames[
                        category as keyof typeof occupationDisplayNames
                      ]
                    }
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="box-body h-[21.75rem]">
            <div id="bar-basic">
              <MostRecommendedOccupationsChart
                key={occupationSortCategory}
                seriesData={seriesDataForMoviesAndSeriesByRatingsChart}
                category={occupationSortCategory}
              />
            </div>
          </div>
          <div className="box-footer">
            <div className="sm:flex items-center">
              <div
                className={`text-defaulttextcolor dark:text-defaulttextcolor/70 text-[${
                  is1546 ? "0.65rem" : "0.70rem"
                }]`}
              >
                Показване на резултати от{" "}
                <b>
                  {currentChartPage === 1 ? 1 : (currentChartPage - 1) * 5 + 1}{" "}
                </b>
                до{" "}
                <b>
                  {currentChartPage === totalChartPages
                    ? (data.topRecommendedOccupations[dataType] || []).length
                    : currentChartPage * 5}{" "}
                </b>
                от общо <b>{(data.topRecommendedOccupations[dataType] || []).length}</b> (Страница{" "}
                <b>{currentChartPage}</b> )
                <i className="bi bi-arrow-right ms-2 font-semibold"></i>
              </div>
              <div className="ms-auto">
                <nav
                  aria-label="Page navigation"
                  className="pagination-style-4"
                >
                  <ul className="ti-pagination mb-0">
                    <li
                      className={`page-item ${
                        currentChartPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <Link
                        className="page-link"
                        to="#"
                        onClick={handlePrevChartPage}
                        style={{
                          padding: "0.25rem 0.5rem",
                          fontSize: "0.8rem",
                          lineHeight: "1.25"
                        }}
                      >
                        Предишна
                      </Link>
                    </li>
                    {[...Array(totalChartPages)].map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentChartPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <Link
                          className="page-link"
                          to="#"
                          onClick={() => setCurrentChartPage(index + 1)}
                          style={{
                            padding: "0.25rem 0.5rem",
                            fontSize: "0.8rem",
                            lineHeight: "1.25"
                          }}
                        >
                          {index + 1}
                        </Link>
                      </li>
                    ))}
                    <li
                      className={`page-item ${
                        currentChartPage === totalChartPages ? "disabled" : ""
                      }`}
                    >
                      <Link
                        className="page-link"
                        to="#"
                        onClick={handleNextChartPage}
                        style={{
                          padding: "0.25rem 0.5rem",
                          fontSize: "0.8rem",
                          lineHeight: "1.25"
                        }}
                      >
                        Следваща
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TopRecommendedOccupationsAndRelated;
