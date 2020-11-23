import "../stylesheets/_CharacterCard.scss";

const CharacterCard = (props) => {
  console.log(props.id);
  return (
    <>
      <li className="card">
        <img src={props.img} alt={props.name} className="card__img" />
        <main className="card__info">
          <h3>{props.name}</h3>
          <p>{props.species}</p>
        </main>
      </li>
    </>
  );
};

export default CharacterCard;
