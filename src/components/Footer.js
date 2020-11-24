import "../stylesheets/_Footer.scss";
import logo from "../images/logochicas.png";

const Footer = () => {
  return (
    <div className="footer">
      <small>
        Data from{" "}
        <a
          href="https://rickandmortyapi.com"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
          title="Go to Rick and Morty API"
          aria-label="Go to Rick and Morty API"
        >
          rickandmortyapi.com
        </a>
      </small>
      <small>
        App developed in 2020 by{" "}
        <a
          href="https://github.com/Celiamf"
          target="_blank"
          rel="noreferrer"
          className="footer__link--github"
          title="Go to Celia's Github profile"
          aria-label="Go to Celia's Github profile"
        >
          Celia
        </a>
      </small>
      <a
        href="https://beta.adalab.es/project-promo-k-modulo-1-team-3/"
        target="_blank"
        rel="noreferrer"
        title="Go to Las Chicas del Coding website"
        aria-label="Go to Las Chicas del Coding website"
      >
        <img
          src={logo}
          alt="Las Chicas del Coding"
          title="Las Chicas del Coding"
        />
      </a>
    </div>
  );
};

export default Footer;
