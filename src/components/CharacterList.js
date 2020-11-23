import "../stylesheets/_CharacterList.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  return (
    <ul className="cardList">
      <CharacterCard></CharacterCard>
      <CharacterCard></CharacterCard>
      <CharacterCard></CharacterCard>
      <CharacterCard></CharacterCard>
    </ul>
  );
};

export default CharacterList;
