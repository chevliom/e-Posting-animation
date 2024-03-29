import { MainPost } from "../landingPage/LandingPage.style";
import girlMakePainting from "./assets/girlMakePanting.svg";

const Approach = () => {
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
      <div className="row my-5 align-items-center w-100 custom-row-reverse">
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column custom-padding-left">
          <MainPost>
            <div className="w-100 d-flex align-items-start gap-2">
              <div className="w-100">
                <h1 style={headingStyle}>Our unique approach</h1>
                <p style={paraStyle}>
                  At ePosting, we prioritize simplicity when it comes to
                  obtaining and securing jobs. We understand that the process of
                  networking and seeking jobs can sometimes be daunting. That's
                  why we have developed a streamlined approach to make it
                  effortless for everyone involved.
                </p>
                <p style={paraStyle}>
                  Our platform is designed to guide job seekers through each
                  step of the job process, ensuring a seamless experience from
                  start to finish. By doing so, we hope to eliminate unnecessary
                  hurdles and make jobs accessible. We believe that everyone
                  should have an equal opportunity to leverage the power of
                  jobs, regardless of their background or prior experience.
                </p>
                <p style={paraStyle}>
                  With ePosting, you can trust that obtaining and closing jobs
                  will be a straightforward and rewarding experience, helping
                  you unlock new doors and propel your career forward.
                </p>
              </div>
            </div>
          </MainPost>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6">
          <MainPost>
            <img
              src={girlMakePainting}
              alt="girlImage"
              className="w-100"
              style={{}}
            />
          </MainPost>
        </div>
      </div>
    </>
  );
};

export default Approach;
