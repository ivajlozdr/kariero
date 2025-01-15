import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { FullCareerDetails } from "../../quiz/quiz-types";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const RelatedOccupations = ({
  fullCareerDetails
}: {
  fullCareerDetails: FullCareerDetails;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(
    fullCareerDetails.translated.related_occupations.length / itemsPerPage
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const paginatedOccupations =
    fullCareerDetails.translated.related_occupations.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  const is1546 = useMediaQuery({ query: "(max-width: 1546px)" });

  return (
    <div className="box custom-box border dark:border-defaultborder/10">
      <div className="box-header">
        <div className="box-title">Сходни професии</div>
      </div>
      <div className="box-body !p-0">
        <ul className="list-group list-group-flush">
          {paginatedOccupations.map((item: any, index: number) => (
            <li
              key={index}
              className="list-group-item d-flex align-items-center !border-0 hover:bg-primary/70 hover:text-white transition group"
            >
              <p className="mb-0 me-4 d-flex align-items-center">
                <i className="bi bi-briefcase text-primary transition-colors group-hover:text-secondary me-2"></i>
                {item.translated_name} (
                {fullCareerDetails.related_occupations.occupation[index].code})
              </p>
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
                {currentPage === totalPages
                  ? fullCareerDetails.translated.related_occupations.length
                  : currentPage * 5}{" "}
              </b>
              от общо{" "}
              <b>{fullCareerDetails.translated.related_occupations.length}</b>{" "}
              (Страница <b>{currentPage}</b> )
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

export default RelatedOccupations;
