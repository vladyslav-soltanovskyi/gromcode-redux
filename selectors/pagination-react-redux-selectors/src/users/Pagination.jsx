import React from "react";

function Pagination({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) {
  const lastPage = Math.ceil(totalItems / itemsPerPage) - 1;
  const isPrevPageAvailable = currentPage === 0;
  const isNextPageAvailable = currentPage >= lastPage;
  
  return (
    <div className="pagination">
    <button
      className="btn"
      onClick={goPrev}
      disabled={isPrevPageAvailable}
    >
      {!isPrevPageAvailable && '←'}
    </button>
    <span className="pagination__page">{currentPage + 1}</span>
    <button
      className="btn"
      onClick={goNext}
      disabled={isNextPageAvailable}
    >
      {!isNextPageAvailable && '→'}
    </button>
  </div>
  );
}

export default Pagination;
