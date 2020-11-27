import SearchError from "./SearchError";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";
import "../stylesheets/_CharacterList.scss";

const CharacterList = (props) => {
  if (props.chars.length === 0) {
    return <SearchError />;
  } else {
    const charItems = props.chars.map((char) => {
      return (
        <CharacterCard
          key={char.id}
          id={char.id}
          name={char.name}
          img={char.img}
          species={char.species}
          status={char.status}
        />
      );
    });
    return <ul className="cardList">{charItems}</ul>;
  }
};

CharacterList.propTypes = {
  chars: PropTypes.array.isRequired,
};

export default CharacterList;
