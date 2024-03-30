import { useEffect } from "react";
import "./InfinityScrollStory.css";

const InfinityScroll = () => {
  useEffect(() => {
    const sliderRight = document.querySelector(".infi-content-right");
    const sliderLeft = document.querySelector(".infi-content-left");
    const copyRight = sliderRight.cloneNode(true);
    const copyLeft = sliderLeft.cloneNode(true);

    document.querySelector(".infi-container-right").appendChild(copyRight);
    document.querySelector(".infi-container-right").appendChild(copyRight);

    document.querySelector(".infi-container-left").appendChild(copyLeft);
    document.querySelector(".infi-container-left").appendChild(copyLeft);

    return () => {
      document.querySelector(".infi-container-right").removeChild(copyRight);
      document.querySelector(".infi-container-left").removeChild(copyLeft);
    };
  }, []);

  const buttonNormal = {
    width: "204px",
    height: "52px",
    border: "1px solid #898888",
    padding: "15px, 30px, 15px, 30px",
    borderRadius: "50px",
  };

  const buttonColor = {
    width: "204px",

    height: "52px",
    border: "1px solid #28C76F",
    padding: "15px, 30px, 15px, 30px",
    borderRadius: "50px",
    backgroundColor: "#28C76F",
  };

  return (
    <>
      <div className="infi-container-right">
        <div className="infi-content-right">
          <button className="ms-1" style={buttonNormal}>
            Full Stact Developer
          </button>
          <button style={buttonColor}>Back End Developer</button>
          <button style={buttonNormal}>Graphic Designer</button>
          <button style={buttonNormal}>UI Designer</button>
          <button style={buttonNormal}>UX Designer</button>
          <button style={buttonNormal}>Product Designer</button>
          <button style={buttonNormal}>3D Designer</button>
          <button style={buttonColor}>Social Media Specialist</button>
          <button style={buttonNormal}>Marketing</button>
        </div>
      </div>
      <div className="infi-container-left">
        <div className="infi-content-left gap-4">
          <button className="ms-4" style={buttonColor}>
            Software Developer
          </button>
          <button style={buttonNormal}>Software Engineer</button>
          <button style={buttonNormal}>Product Manager</button>
          <button style={buttonNormal}>Data Science</button>
          <button style={buttonNormal}>Data Analysis</button>
          <button style={buttonColor}>Front End Developer</button>
          <button style={buttonNormal}>Sales Management</button>
          <button style={buttonNormal}>Branding Management</button>
          <button style={buttonNormal}>Office Administration</button>
        </div>
      </div>
    </>
  );
};

export default InfinityScroll;
