import React from "react";
import { CharacterCard } from "./character-card";

export function CharacterList({ characters = [] }) {
  // Si la lista de personajes está vacía, mostramos un mensaje alternativo
  if (characters.length === 0) {
    return <p>No hay personajes disponibles para mostrar.</p>;
  }

  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
