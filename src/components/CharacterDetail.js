import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props, "CharacterDetail props");
  if (props.char === undefined) {
    return (
      <>
        <Link to="" className="detailLink">
          {" "}
          &lt; Back to the list
        </Link>
        <article className="detail">
          <p>No character was found. Sorry!</p>
        </article>
      </>
    );
  } else
    return (
      <>
        <Link to="" className="detailLink">
          {" "}
          &lt; Back to the list
        </Link>
        <article className="detail">
          <img
            src={props.char.img}
            alt={props.char.name}
            className="detail__img"
          />
          <div className="detail_info">
            <h3 className="detail_info--name">{props.char.name}</h3>
            <p className="detail_info--item">Status:</p>
            <span>{props.char.status}</span>
            <p className="detail_info--item">Species:</p>
            <span>{props.char.species}</span>
            <p className="detail_info--item">Origin:</p>
            <span>{props.char.origin}</span>
            <p className="detail_info--item">No. of pisodes:</p>
            <span>{props.char.episodes}</span>
          </div>
        </article>
      </>
    );
};

export default CharacterDetail;
