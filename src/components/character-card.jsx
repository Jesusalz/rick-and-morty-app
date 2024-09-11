import React from "react";
import { useNavigate } from "react-router-dom";

// Este componente muestra una tarjeta de un personaje
// Las propiedades deben coincidir con los datos recibidos de la API
export function CharacterCard({ character }) {
  const navigate = useNavigate();

  return (
    <div
      className="character-card"
      onClick={() => {
        navigate(`/home/characters/${character.id}`);
      }}
    >
      <img src={character.image} alt={character.name} />
      <section>
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
      </section>
    </div>
  );
}
