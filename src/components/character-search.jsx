import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Este componente maneja la búsqueda de personajes
// Permite al usuario ingresar un término de búsqueda y navegar a la página de resultados
export function CharacterSearch() {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Efecto para sincronizar el término de búsqueda con los parámetros de la URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name");
    if (name) {
      setSearchTerm(name);
    }
  }, [location.search]);

  // Maneja la acción de búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Si hay un término de búsqueda, navega a la página de resultados con el parámetro
      navigate(`/home/search?name=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      // Si no hay término de búsqueda, navega a la página de búsqueda general
      navigate("/home/search");
    }
  };

  // Renderiza el formulario de búsqueda
  return (
    <form onSubmit={handleSearch} className="character-search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search characters..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
