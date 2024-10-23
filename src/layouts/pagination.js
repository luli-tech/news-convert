import { useState } from "react";
function Pagination({
  id,
  currentPage,
  totalPages,
  setCurrentPage,
  pages,
  handlePageChange,
}) {
  //   let [currentPage, setCurrentPage] = useState(1);
  //   let [itemsPerPage] = useState(10);

  //   let totalPages = Math.ceil(id.length / itemsPerPage);

  //   let startIndex = (currentPage - 1) * itemsPerPage;
  //   let currentItems = id.slice(startIndex, startIndex + itemsPerPage);

  //   let pages = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     pages.push(i);
  //   }

  //   const handlePageChange = (pageNumber) => {
  //     setCurrentPage(pageNumber);
  //   };
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
