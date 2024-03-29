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
          <h1 style={headingStyle}>Jobs are a breeze</h1>
          <p style={paraStyle}>
            Referring someone or being referred to a job opportunity should be a
            hassle-free experience. <br /> At ePosting, we provide users with
            comprehensive support and best practices in closing jobs.
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
