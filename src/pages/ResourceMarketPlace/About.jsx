import playIcon from "./assets/playIcon.svg";

const About = () => {
  const paraStyle = {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "38px",
  };

  const bgColorStyle = {
    backgroundColor: "#4B465C",
    height: "80vh",
    display: "flex",
    justifyContent: "cenetr",
    alignItems: "center",
    padding: "0rem 5rem",
  };

  const sliderDiv = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.4em",
    padding: "0rem 4rem",
  };

  const aboutAccount = {
    textAlign: "center",
    padding: "66px 84px",
    // margin: "0 auto -100px",
    width: "23em",
    maxWidth: "1700px",
    borderRadius: "8px",
    // background: var(--Primary-Primary---100, #e3e1fc);
    position: "relative",
    cursor: "pointer",
    top: "-8rem",
    height: "15rem",
    backgroundColor: "#7367F0",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  };

  return (
    <>
      <div className="my-5">
        <div style={bgColorStyle}>
          <div className="row">
            <div className="col-sm-12">
              <div className="w-100">
                <h1
                  className="fw-bold fs-1 text-center"
                  style={{ color: "#FFFFFF" }}
                >
                  Discover how various users <br /> can benefit from ePostings
                  Jobs Marketplace
                </h1>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="w-100 d-flex gap-4 my-4 custom-flex-column">
                <p style={paraStyle}>
                  Reaching your goal has never been easier. Our end-to-end
                  technology-enabled solution is your single point of entry to
                  navigating the job landscape. Expand your options, manage
                  connections, and pay it forward through one single platform.
                </p>

                <p style={paraStyle}>
                  With best practices and workflows in place, ePosting can help
                  you find and expand opportunities at every stage of your life.
                  That means you can fast -track your success in what you choose
                  to do, at ease and with security.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={sliderDiv} className="custom-slider-div">
          <section style={aboutAccount}>
            <img src={playIcon} alt="playIcon" width={48} height={48} />
            <p className="sub-heading fs-6" style={paraStyle}>
              Tim, <br /> Job seeker
            </p>
          </section>

          <section style={aboutAccount}>
            <img src={playIcon} alt="playIcon" width={48} height={48} />
            <p className="sub-heading fs-6" style={paraStyle}>
              Tim, <br /> Job seeker
            </p>
          </section>

          <section style={aboutAccount}>
            <img src={playIcon} alt="playIcon" width={48} height={48} />
            <p className="sub-heading fs-6" style={paraStyle}>
              Tim, <br /> Job seeker
            </p>
          </section>

          <section style={aboutAccount}>
            <img src={playIcon} alt="playIcon" width={48} height={48} />
            <p className="sub-heading fs-6" style={paraStyle}>
              Tim, <br /> Job seeker
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
