import { useState } from "react";

function Pagination({ totalJobs, jobsPerPage, paginate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setCurrentPage(number);
    paginate(number);
  };

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            onClick={() =>
              handleClick(currentPage > 1 ? currentPage - 1 : currentPage)
            }
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => handleClick(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() =>
              handleClick(
                currentPage < pageNumbers.length ? currentPage + 1 : currentPage
              )
            }
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
