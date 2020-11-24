import { React, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/_App.scss";
import Header from "./Header";
import Filter from "./Filter";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getDataFromAPI from "../services/getDataFromAPI";
import Footer from "./Footer";

function App() {
  const [chars, setChars] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  chars.sort(function (a, b) {
    const charA = a.name.toUpperCase();
    const charB = b.name.toUpperCase();
    if (charA < charB) {
      return -1;
    }
    if (charA > charB) {
      return 1;
    }
    return 0;
  });

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
      return char.id === charId;
    });
    return <CharacterDetail char={foundChar} />;
  };

  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Switch>
          <Route exact path="/">
            <Filter handleFilter={handleFilter} />
            <CharacterList chars={filteredChars} />
          </Route>
          <Route exact path="/char/:id" render={renderCharDetail} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
