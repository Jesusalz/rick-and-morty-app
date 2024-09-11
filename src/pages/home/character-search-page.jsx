import React, { useEffect, useState } from "react";
import { CharacterSearch, CharacterList } from "../../components";
import { useLocation } from "react-router-dom";
import { searchCharacters } from "../../services";
import "../../styles/search-page.css";

export default function CharacterSearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  useEffect(() => {
    const fetchCharacters = async () => {
      if (name) {
        setLoading(true);
        setError(null);
        try {
          const res = await searchCharacters(name);
          setSearchResults(res.results);
        } catch (err) {
          setError("Failed to fetch characters. Please try again.");
          console.error("Error fetching characters:", err);
        } finally {
          setLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchCharacters();
  }, [name]);

  return (
    <div className="character-search-page">
      <div className="character-search">
        <CharacterSearch />
      </div>
      {name ? (
        <>
          {loading && <p className="loading">Loading...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && <CharacterList characters={searchResults} />}
        </>
      ) : (
        <div className="empty-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p>No search query entered. Please enter a character name to search.</p>
        </div>
      )}
    </div>
  );
}
