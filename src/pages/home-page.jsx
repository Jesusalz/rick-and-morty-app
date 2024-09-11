import React from "react";
import { Route, Routes } from "react-router-dom";
import { CharactersInfo, NavLinks } from "../components";
import { CharacterDetailPage, NotFound } from "./home";
import CharacterListPage from "./home/character-list-page";
import "../styles/home-page.css";

export function HomePage() {
  return (
    <div className="home-page">
      <NavLinks />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<CharactersInfo />} />
          <Route path="/characters" element={<CharacterListPage />} />
          <Route path="/characters/:id" element={<CharacterDetailPage />} />
          {/* TODO Agregar ruta NOT FOUND */}
        </Routes>
      </div>
    </div>
  );
}
