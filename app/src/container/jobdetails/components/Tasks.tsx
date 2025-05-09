import { FC, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

interface Props {
  tasks: any[];
}

const PaginatedTasks: FC<Props> = ({ tasks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const paginatedTasks = tasks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const is1546 = useMediaQuery({ query: "(max-width: 1546px)" });
  return (
    <div className="box custom-box border dark:border-defaultborder/10">
      <div className="box-header">
        <div className="box-title">Често давани задания за професията</div>
      </div>
      <div className="box-body !p-0">
        <ul className="list-group list-group-flush">
          {paginatedTasks.map((item: any, index: number) => (
            <li
              key={index}
              className={`list-group-item ${
                index === 0 ? `!border-t-0` : `!border-b-0`
              } !border-s-0 !border-e-0 hover:bg-primary/70 !hover:text-white transition group`}
            >
              <div className="sm:flex items-center">
                <span className="avatar avatar-md !rounded-full bg-primary/10 border dark:border-defaultborder/10 flex items-center justify-center">
                  <i className="ti ti-clipboard-text text-primary group-hover:text-white/85 dark:group-hover:text-secondary text-[1.5rem]"></i>
                </span>

                <div className="ms-2 flex-grow max-w-[85%] relative">
                  <p className="font-semibold text-[.875rem] hover:text-white/85 dark:hover:text-defaulttextcolor whitespace-normal p-1 overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-[2em] group-hover:max-h-[10em]">
                    {item}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="box-footer">
          <div className="sm:flex items-center">
            <div
              className={`text-defaulttextcolor dark:text-defaulttextcolor/70 text-[${
                is1546 ? "0.65rem" : "0.70rem"
              }]`}
            >
              Показване на резултати от{" "}
              <b>{currentPage === 1 ? 1 : (currentPage - 1) * 5 + 1} </b>
              до{" "}
              <b>
                {currentPage === totalPages ? tasks.length : currentPage * 5}{" "}
              </b>
              от общо <b>{tasks.length}</b> (Страница <b>{currentPage}</b> )
              <i className="bi bi-arrow-right ms-2 font-semibold"></i>
            </div>
            <div className="ms-auto">
              <nav aria-label="Page navigation" className="pagination-style-4">
                <ul className="ti-pagination mb-0">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <Link
                      className="page-link"
                      to="#"
                      onClick={handlePrevious}
                      style={{
                        padding: "0.25rem 0.5rem",
                        fontSize: "0.8rem",
                        lineHeight: "1.25"
                      }}
                    >
                      Предишна
                    </Link>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <Link
                        className="page-link"
                        to="#"
                        onClick={() => setCurrentPage(index + 1)}
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
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <Link
                      className="page-link"
                      to="#"
                      onClick={handleNext}
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
  );
};

export default PaginatedTasks;
