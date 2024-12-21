import { FC, Fragment, useEffect, useState } from "react";
import { DataType, MovieData, RecommendationData } from "../home-types";
import {
  getTotalBarChartPages,
  handleBarChartPageChange,
  paginateBarChartData
} from "../helper_functions";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { TopRecommendationsBarChart } from "./Charts";

interface TopRecommendationsChartComponentProps {
  data: DataType;
}

const TopRecommendationsChartComponent: FC<
  TopRecommendationsChartComponentProps
> = ({ data }) => {
  const [seriesDataForTopStatsChart, setSeriesDataForTopStatsChart] = useState<
    (MovieData | RecommendationData)[]
  >([]);

  const pageSize = 5;
  const [currentTopChartPage, setCurrentTopChartPage] = useState(1);

  const totalTopChartPages = getTotalBarChartPages(
    data.topRecommendations.length,
    pageSize
  );

  useEffect(() => {
    const paginatedDataForTopStats = paginateBarChartData(
      data.topRecommendations,
      currentTopChartPage,
      pageSize
    );
    setSeriesDataForTopStatsChart(paginatedDataForTopStats);
  }, [currentTopChartPage, data]);

  const handlePrevTopChartPage = () => {
    handleBarChartPageChange(
      "prev",
      currentTopChartPage,
      pageSize,
      data.topRecommendations.length,
      setCurrentTopChartPage
    );
  };

  const handleNextTopChartPage = () => {
    handleBarChartPageChange(
      "next",
      currentTopChartPage,
      pageSize,
      data.topRecommendations.length,
      setCurrentTopChartPage
    );
  };

  const is1546 = useMediaQuery({ query: "(max-width: 1546px)" });

  return (
    <Fragment>
      <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
        <div className="xl:col-span-6 col-span-12">
          <div className="box custom-box">
            <div className="custom-box-header">
              <div className="box-title">
                Най-често препоръчвани филми и сериали
              </div>
            </div>
            <div className="box-body h-[22rem]">
              <div id="donut-simple">
                <TopRecommendationsBarChart
                  seriesData={seriesDataForTopStatsChart}
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
                    {currentTopChartPage === 1
                      ? 1
                      : (currentTopChartPage - 1) * 5 + 1}{" "}
                  </b>
                  до{" "}
                  <b>
                    {currentTopChartPage === totalTopChartPages
                      ? data.topRecommendations.length
                      : currentTopChartPage * 5}{" "}
                  </b>
                  от общо <b>{data.topRecommendations.length}</b> ( Страница{" "}
                  <b>{currentTopChartPage}</b> )
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
                          currentTopChartPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <Link
                          className="page-link"
                          to="#"
                          onClick={handlePrevTopChartPage}
                          style={{
                            padding: "0.25rem 0.5rem",
                            fontSize: "0.8rem",
                            lineHeight: "1.25"
                          }}
                        >
                          Предишна
                        </Link>
                      </li>
                      {[...Array(totalTopChartPages)].map((_, index) => (
                        <li
                          key={index}
                          className={`page-item ${
                            currentTopChartPage === index + 1 ? "active" : ""
                          }`}
                        >
                          <Link
                            className="page-link"
                            to="#"
                            onClick={() => setCurrentTopChartPage(index + 1)}
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
                          currentTopChartPage === totalTopChartPages
                            ? "disabled"
                            : ""
                        }`}
                      >
                        <Link
                          className="page-link"
                          to="#"
                          onClick={handleNextTopChartPage}
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
      </div>
    </Fragment>
  );
};

export default TopRecommendationsChartComponent;
