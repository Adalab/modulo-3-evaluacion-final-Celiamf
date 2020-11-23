import "../stylesheets/_CharacterCard.scss";
import logo from "../images/logo_header.png";

const CharacterCard = () => {
  return (
    <>
      <li className="card">
        <img src={logo} alt="" className="card__img" />
        <main className="card__info">
          <h3>Nombre</h3>
          <p>Especie</p>
        </main>
      </li>
    </>
  );
};

export default CharacterCard;
