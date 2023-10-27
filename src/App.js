import "./style/app.css";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import { characters } from "./data/data.js";

function App() {
  return (
    <div className="app">
      <h2>Персонажи:</h2>
      <div className="characters">
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
