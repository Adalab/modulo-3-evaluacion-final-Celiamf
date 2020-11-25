import header_logo from "../images/header_logo.png";
import "../stylesheets/_Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img
        src={header_logo}
        className="header__logo"
        alt="Rick and Morty logo"
        title="Rick and Morty logo"
      />
    </header>
  );
};

export default Header;
