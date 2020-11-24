import "../stylesheets/_CharacterList.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const charItems = props.chars.map((char) => {
    return (
      <CharacterCard
        key={char.id}
        id={char.id}
        name={char.name}
        img={char.img}
        species={char.species}
      />
    );
  });
  return <ul className="cardList">{charItems}</ul>;
};

export default CharacterList;
