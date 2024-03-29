import { MainPost } from "../landingPage/LandingPage.style";
import mission from "./assets/mission.svg";
import vision from "./assets/vision.svg";

const MissionVision = () => {
  const headingStyle = {
    color: "#242745",
    fontWeight: "700",
    fontSize: "64px",
    lineHeight: "84px",
    textAlign: "start",
  };

  const paraStyle = {
    color: "#4B465C",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "28px",
    textAlign: "start",
  };

  return (
    <>
      <div className="row my-5 align-items-center w-100 custom-column-reverse">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <MainPost>
            <img src={mission} alt="mission" className="w-100" style={{}} />
          </MainPost>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column custom-padding-left">
          <MainPost>
            <div className="w-100 d-flex align-items-start gap-2">
              <div className="w-100">
                <h1 style={headingStyle}>Our mission</h1>
                <p style={paraStyle}>
                  ePosting was established with a clear mission in mind: to
                  bring jobs to the mass market.
                </p>
              </div>
            </div>
          </MainPost>
        </div>
      </div>

      <div className="row my-5 align-items-center w-100 custom-row-reverse">
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column custom-padding-left">
          <MainPost>
            <div className="w-100 d-flex align-items-start gap-2">
              <div className="w-100">
                <h1 style={headingStyle}>Our mission</h1>
                <p style={paraStyle}>
                  ePosting was established with a clear mission in mind: to
                  bring jobs to the mass market.
                </p>
              </div>
            </div>
          </MainPost>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6">
          <MainPost>
            <img src={vision} alt="vision" className="w-100" style={{}} />
          </MainPost>
        </div>
      </div>
    </>
  );
};

export default MissionVision;