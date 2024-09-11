
import React, { useEffect, useState } from "react";
import { CharacterList } from "../../components";
import { getCharacters } from "../../services/character.services"; 

export default function CharacterListPage() {
  const [characters, setCharacters] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const data = await getCharacters(); 
        setCharacters(data.results); 
      } catch (error) {
        console.error("Error fetching characters:", error);
        setError("Failed to load characters");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []); 

 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <CharacterList characters={characters} /> 
    </div>
  );
}
