import { React, useEffect, useState } from "react";
import logo from "../images/logo_header.png";
import "../stylesheets/_App.scss";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import getDataFromAPI from "../services/getDataFromAPI";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromAPI().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="header__logo" alt="Rick and Morty logo" />
      </header>
      <main>
        <CharacterList></CharacterList>
        <CharacterDetail></CharacterDetail>
        <Filters></Filters>
      </main>
    </div>
  );
}

export default App;
