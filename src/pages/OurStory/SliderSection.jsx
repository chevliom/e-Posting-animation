import NavBar from "../ResourceMarketPlace/NavBar";
import { MainPost } from "../landingPage/LandingPage.style";
import InfinityScroll from "./InfinityScroll";

const SliderSection = () => {
  const headingStyle = {
    color: "#000000",
    fontWeight: "700",
    fontSize: "64px",
    lineHeight: "84px",
    textAlign: "center",
  };

  const paraStyle = {
    color: "#000000",
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "33px",
    textAlign: "center",
  };

  return (
    <div className="mb-5 w-100" style={{ backgroundColor: "#7367F014" }}>
      <NavBar />

      <div className="w-100">
        <MainPost className="w-100">
          <h1 className="custom-main-heading" style={headingStyle}>
            We’re here to help with closing jobs
          </h1>
          <p className="custom-main-para" style={paraStyle}>
            We aim to set everyone for success by providing a platform that
            brings jobs <br /> to the mass market.
          </p>
        </MainPost>
      </div>

      <div className="w-100">
        <InfinityScroll />
      </div>
    </div>
  );
};

export default SliderSection;
