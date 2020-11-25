import alive_icon from "../images/alive_icon.png";
import dead_icon from "../images/dead_icon.png";
import unknown_icon from "../images/unknown_icon.png";
import PropTypes from "prop-types";
import "../stylesheets/_DeadOrAliveIcon.scss";

const DeadOrAliveIcon = (props) => {
  if (props.char.status === "Alive")
    return (
      <img src={alive_icon} alt="Happy face emoji" className="statusIcon" />
    );
  else if (props.char.status === "Dead")
    return <img src={dead_icon} alt="Dead face emoji" className="statusIcon" />;
  else
    return (
      <img
        src={unknown_icon}
        alt="Question mark emoji"
        className="statusIcon__unknown"
      />
    );
};

DeadOrAliveIcon.propTypes = {
  char: PropTypes.object.isRequired,
};

export default DeadOrAliveIcon;
