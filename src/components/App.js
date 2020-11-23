import logo from "../images/logo_header.png";
import "../stylesheets/_App.scss";
import CharacterList from "./CharacterList";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="header__logo" alt="Rick and Morty logo" />
      </header>
      <CharacterList></CharacterList>
    </div>
  );
}

export default App;
