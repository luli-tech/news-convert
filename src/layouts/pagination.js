import { useState } from "react";
function Pagination({ currentPage, pages, handlePageChange }) {
  console.log(currentPage);
  return (
    <>
      <div className="pagination">
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={pageNumber === currentPage ? "active" : "notActive"}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
}
export default Pagination;
