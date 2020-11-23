import logo from "../images/logo_header.png";
import "../stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="header__logo" alt="Rick and Morty logo" />
        <h1>Hola, corasón.</h1>
      </header>
      <main></main>
    </div>
  );
}

export default App;
