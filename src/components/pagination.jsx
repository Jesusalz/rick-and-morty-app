import React from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/pagination.css";

// Este componente maneja la paginación para una lista de elementos
// Recibe el número total de páginas como prop y permite navegar entre ellas
export function Pagination({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  // Función para manejar el cambio de página
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: newPage.toString() });
    }
  };

  return (
    <div className="pagination">
      {/* Botón para ir a la página anterior */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Previous
      </button>
      {/* Muestra la página actual y el total de páginas */}
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      {/* Botón para ir a la página siguiente */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
}
