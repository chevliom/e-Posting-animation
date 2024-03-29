import mailIcon from "./assets/mailIcon.svg";
import messageIcon from "./assets/messageIcon.svg";
import calenderIcon from "./assets/calenderIcon.svg";
import starIcon from "./assets/starIcon.svg";
import groupIcon from "./assets/groupIcon.svg";
import addIcon from "./assets/addIcon.svg";
import timeIcon from "./assets/timeIcon.svg";
import peopleIcon from "./assets/peopleIcon.svg";
import "./InfinityScroll.css";

const InfinityScroll = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <img src={mailIcon} alt="mailIcon" />
        <img src={messageIcon} alt="messageIcon" />
        <img src={calenderIcon} alt="calenderIcon" />
        <img src={starIcon} alt="starIcon" />
        <img src={groupIcon} alt="groupIcon" />
        <img src={addIcon} alt="addIcon" />
        <img src={timeIcon} alt="timeIcon" />
        <img src={peopleIcon} alt="peopleIcon" />
      </div>
    </div>
  );
};

export default InfinityScroll;
