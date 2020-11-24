import { Link } from "react-router-dom";
import logo from "../images/logo_header.png";
import "../stylesheets/_Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="detailLink">
        <img src={logo} className="header__logo" alt="Rick and Morty logo" />
      </Link>
    </header>
  );
};

export default Header;
