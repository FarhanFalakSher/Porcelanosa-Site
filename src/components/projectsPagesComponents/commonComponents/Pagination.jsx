import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  // Sirf 5 pages dikhane ke liye logic (taakay UI kharab na ho)
  const getPages = () => {
    let pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center my-10">
      <nav className="inline-flex items-center p-1 bg-white border border-gray-200 rounded-2xl shadow-sm space-x-1">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors duration-200"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {getPages().map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`min-w-[40px] h-[40px] flex items-center justify-center text-sm font-medium rounded-xl transition-all duration-200 
                ${
                  currentPage === page
                    ? "bg-black text-white shadow-md shadow-black/20 scale-105"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black"
                }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors duration-200"
        >
          <ChevronRight size={20} />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
