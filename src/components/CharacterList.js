import "../stylesheets/_CharacterList.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  console.log(props, "props de chrList");
  if (props.chars.length === 0) {
    return <p>Sorry, the character you typed was not found.</p>;
  } else {
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
  }
};

export default CharacterList;
