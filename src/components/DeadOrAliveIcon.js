import alive_icon from "../images/alive_icon.png";
import dead_icon from "../images/dead_icon.png";
import "../stylesheets/_DeadOrAliveIcon.scss";

const DeadOrAliveIcon = (props) => {
  console.log(props.char.status);
  if (props.char.status === "Alive")
    return (
      <img src={alive_icon} alt="Happy face emoji" className="statusIcon" />
    );
  else
    return <img src={dead_icon} alt="Dead face emoji" className="statusIcon" />;
};

export default DeadOrAliveIcon;
