import { React, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "../images/logo_header.png";
import "../stylesheets/_App.scss";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";
import getDataFromAPI from "../services/getDataFromAPI";

function App() {
  const [chars, setChars] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    getDataFromAPI().then((data) => {
      setChars(data);
    });
  }, []);

  const handleFilter = (inputValue) => {
    setNameFilter(inputValue);
  };

  const filteredChars = chars.filter((char) => {
    return char.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  const renderCharDetail = (props) => {
    const charId = parseInt(props.match.params.id);
    const foundChar = chars.find((char) => {
      return char.id == charId;
    });
    return <CharacterDetail char={foundChar} />;
  };

  return (
    <div className="App">
      <header className="App__header">
        <img
          src={logo}
          className="App__header__logo"
          alt="Rick and Morty logo"
        />
      </header>
      <main className="App__main">
        <Switch>
          <Route exact path="/">
            <Filter handleFilter={handleFilter} />
            <CharacterList chars={filteredChars} />
          </Route>
          <Route exact path="/char/:id" render={renderCharDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
