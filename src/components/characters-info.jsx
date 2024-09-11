import React, { useState, useEffect } from "react";
import { getCharactersInfo } from "../services"; 

export function CharactersInfo() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await getCharactersInfo(); 
        setInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInfo();
  }, []);

  return (
    <div className="characters-info">
      <h2>Rick and Morty Characters Information</h2>
      <p>
        Total number of characters: <strong>{info?.count}</strong>{" "}
      </p>
    </div>
  );
}
