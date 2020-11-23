import "../stylesheets/_CharacterList.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const charItems = props.chars.map((char) => {
    console.log(char.id, "props en List");
    return (
      <CharacterCard
        key={char.id}
        name={char.name}
        img={char.img}
        species={char.species}
      />
    );
  });
  return <ul className="cardList">{charItems}</ul>;
};

export default CharacterList;
