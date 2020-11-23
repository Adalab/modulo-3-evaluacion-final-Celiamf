import "../stylesheets/_App.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  return (
    <ul className="cardList">
      <CharacterCard></CharacterCard>
    </ul>
  );
};

export default CharacterList;
