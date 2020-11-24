import { Link } from "react-router-dom";
import header_logo from "../images/header_logo.png";
import "../stylesheets/_Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="detailLink">
        <img
          src={header_logo}
          className="header__logo"
          alt="Rick and Morty logo"
        />
      </Link>
    </header>
  );
};

export default Header;
