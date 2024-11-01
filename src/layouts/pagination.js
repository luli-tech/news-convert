import { useState } from "react";
function Pagination({ currentPage, pages, handlePageChange }) {
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
