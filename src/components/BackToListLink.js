import { Link } from "react-router-dom";
import "../stylesheets/_BackToListLink.scss";

const BackToListLink = () => {
  return (
    <Link
      to="/"
      className="detailLink"
      aria-label="Go back to the list"
      title="Go back to the list"
    >
      &lt; Back to the list
    </Link>
  );
};

export default BackToListLink;
