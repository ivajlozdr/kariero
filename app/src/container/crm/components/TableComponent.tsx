import { FC, Fragment, useEffect, useState, useMemo } from "react";
import { Category, DataType, FilteredTableData } from "../home-types";
import {
  filterTableData,
  isActor,
  isDirector,
  isWriter
} from "../helper_functions";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { tableCategoryDisplayNames } from "../home-data";

interface TableComponentProps {
  data: DataType;
}

const TableComponent: FC<TableComponentProps> = ({ data }) => {
  const [prosperitySortCategory, setProsperitySortCategory] =
    useState<Category>("Directors");

  const [filteredTableData, setFilteredTableData] = useState<FilteredTableData>(
    []
  );
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const itemsPerTablePage = 5;

  const totalItems = filteredTableData.length;
  const totalTablePages = Math.ceil(totalItems / itemsPerTablePage);

  // Следи за промени в `data` и актуализира филтрираните данни в таблицата съответно
  useEffect(() => {
    const initialFilteredData =
      data[`sorted${prosperitySortCategory}ByProsperity`];
    setFilteredTableData(initialFilteredData);
  }, [data, prosperitySortCategory]);

  // Използва useMemo за запаметяване на изчисляването на филтрираните данни
  const memoizedFilteredData = useMemo(
    () =>
      filterTableData(
        filteredTableData,
        prosperitySortCategory,
        currentTablePage,
        itemsPerTablePage
      ),
    [filteredTableData, prosperitySortCategory, currentTablePage]
  );

  const handleCategoryChange = (category: Category) => {
    // Превключва филтрираните данни в зависимост от избраната категория
    setFilteredTableData(data[`sorted${category}ByProsperity`]);
    setProsperitySortCategory(category);
  };

  // Обработка на логиката за предишна страница
  const handlePrevTablePage = () => {
    if (currentTablePage > 1) {
      setCurrentTablePage((prev) => prev - 1);
    }
  };

  const handleNextTablePage = () => {
    if (currentTablePage < totalTablePages) {
      setCurrentTablePage((prev) => prev + 1);
    }
  };

  const getCategoryName = (item: FilteredTableData[number]) => {
    if (isDirector(item)) return item.director_bg;
    if (isActor(item)) return item.actor_bg;
    if (isWriter(item)) return item.writer_bg;
    return "";
  };

  const is1546 = useMediaQuery({ query: "(max-width: 1546px)" });

  return (
    <Fragment>
      <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
        <div className="box custom-card h-[27.75rem]">
          <div className="box-header justify-between">
            <div className="box-title">
              {
                tableCategoryDisplayNames[
                  prosperitySortCategory as keyof typeof tableCategoryDisplayNames
                ]
              }{" "}
              по Просперитет
            </div>
            <div className="flex flex-wrap gap-2">
              <div
                className="inline-flex rounded-md shadow-sm"
                role="group"
                aria-label="Sort By"
              >
                {["Directors", "Actors", "Writers"].map((category, index) => (
                  <button
                    key={category}
                    type="button"
                    className={`ti-btn-group !border-0 !text-xs !py-2 !px-3 ${
                      category === prosperitySortCategory
                        ? "ti-btn-primary-full text-white"
                        : "text-[#E74581] dark:text-[#CC3333] bg-[#AF0B48] dark:bg-[#9A110A] bg-opacity-10 dark:bg-opacity-10"
                    } ${
                      index === 0
                        ? "rounded-l-md"
                        : index === 2
                        ? "rounded-r-md"
                        : ""
                    }`}
                    onClick={() => handleCategoryChange(category as Category)}
                  >
                    {
                      tableCategoryDisplayNames[
                        category as keyof typeof tableCategoryDisplayNames
                      ]
                    }
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="box-body">
            <div className="overflow-x-auto">
              <table
                key={prosperitySortCategory}
                className="table min-w-full whitespace-nowrap table-hover border table-bordered"
              >
                <thead>
                  <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                    <th
                      scope="col"
                      className="!text-start !text-[0.85rem] w-[40px]"
                    >
                      #
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      {
                        tableCategoryDisplayNames[
                          prosperitySortCategory as keyof typeof tableCategoryDisplayNames
                        ]
                      }
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Просперитетен рейтинг
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      IMDb рейтинг
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Боксофис
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Брой филми
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Общо препоръки
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Победи на награди
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Номинации за награди
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {memoizedFilteredData.map((item, index) => (
                    <tr
                      key={index}
                      className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                    >
                      <td>{(currentTablePage - 1) * 5 + index + 1}</td>
                      <td>{getCategoryName(item)}</td>
                      <td>{item.prosperityScore}</td>
                      <td>{item.avg_imdb_rating}</td>
                      <td>{item.total_box_office}</td>
                      <td>{item.movie_count}</td>
                      <td>{item.total_recommendations}</td>
                      <td>{item.total_wins}</td>
                      <td>{item.total_nominations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="box-footer">
            <div className="sm:flex items-center">
              <div
                className={`text-defaulttextcolor dark:text-defaulttextcolor/70 text-[${
                  is1546 ? "0.6rem" : "0.75rem"
                }]`}
              >
                Показване на резултати от{" "}
                <b>
                  {currentTablePage === 1 ? 1 : (currentTablePage - 1) * 5 + 1}{" "}
                </b>
                до{" "}
                <b>
                  {currentTablePage === totalTablePages
                    ? totalItems
                    : currentTablePage * 5}{" "}
                </b>
                от общо <b>{totalItems}</b> ( Страница <b>{currentTablePage}</b>{" "}
                )<i className="bi bi-arrow-right ms-2 font-semibold"></i>
              </div>
              <div className="ms-auto">
                <nav
                  aria-label="Page navigation"
                  className="pagination-style-4"
                >
                  <ul className="ti-pagination mb-0">
                    <li
                      className={`page-item ${
                        currentTablePage === 1 ? "disabled" : ""
                      }`}
                      style={{ marginRight: "0.25rem" }}
                    >
                      <Link
                        className="page-link"
                        to="#"
                        onClick={handlePrevTablePage}
                        style={{
                          padding: "0.25rem 0.5rem",
                          fontSize: "0.8rem",
                          lineHeight: "1.25"
                        }}
                      >
                        Предишна
                      </Link>
                    </li>
                    {[...Array(totalTablePages)].map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          index + 1 === currentTablePage ? "active" : ""
                        }`}
                        style={{
                          marginRight: "0.25rem"
                        }}
                      >
                        <Link
                          className="page-link"
                          to="#"
                          onClick={() => setCurrentTablePage(index + 1)}
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
                        currentTablePage === totalTablePages ? "disabled" : ""
                      }`}
                      style={{ marginLeft: "0.25rem" }}
                    >
                      <Link
                        className="page-link"
                        to="#"
                        onClick={handleNextTablePage}
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

export default TableComponent;
