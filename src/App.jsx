
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, LandingPage } from "./pages";
import { CharacterListPage, CharacterDetailPage } from './pages/home'; // Debe coincidir con las exportaciones en index.js

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/characters" element={<CharacterListPage />} />
        <Route path="/characters/:id" element={<CharacterDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

