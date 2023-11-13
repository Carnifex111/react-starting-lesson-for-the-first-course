import React, { useState, useEffect } from "react";
import RickAndMortyService from "./services/RickAndMortyService";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import "./style/app.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const rickAndMortyService = new RickAndMortyService();
    rickAndMortyService.getAllCharacters().then((data) => {
      setCharacters(data.results);
    });
  }, []);

  return (
    <div className="app">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
