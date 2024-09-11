import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../services/character.services"; 

export default function CharacterDetailPage() {
  const { id } = useParams(); 
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      setLoading(true);
      try {
        const data = await getCharacterById(id); 
        setCharacter(data); 
      } catch (error) {
        console.error("Error fetching character details:", error);
        setError("Failed to load character details");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterInfo();
  }, [id]); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="character-details">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
    </div>
  );
}
