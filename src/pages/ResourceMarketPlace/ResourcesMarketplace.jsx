import NavBar from "./NavBar";
import { LandingPageWrapper } from "../Personas/Personas.style";
import { Button, MainPost } from "../landingPage/LandingPage.style";
import SnakePath from "./SnakePath";
import AnimatedImage from "./AnimatedImage";
import Footer from "./Footer";
import About from "./About";

const ResourcesMarketplace = () => {
  return (
    <>
      <LandingPageWrapper>
        <NavBar />

        <div className="row m-0 align-items-start w-100 custom-column-reverse">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <MainPost>
              <h1 className="fw-bold" style={{ color: "#4B4B4B" }}>
                We set everyone everywhere for success.
              </h1>
              <p
                className="fw-normal fs-6 text-start"
                style={{ color: "#4B4B4B", lineHeight: "2em" }}
              >
                ePosting aims to empower job seekers by modernizing the job
                process and harnessing the potential of technology for positive
                change. Our targeted approach and best practices allow us to
                revolutionize the way job seekers approach jobs. Our platform
                offers a dynamic ecosystem of cutting-edge technologies,
                valuable resources, and strategic partnerships, all designed to
                empower every user on their path to success.
              </p>

              <div className="d-flex gap-2 w-100 custom-button">
                <Button
                  margin="0 0 24px 0"
                  className="fit-content landing modify-custom-btn"
                >
                  Get registered
                </Button>
                <Button className="ms-0 blue me-auto me-lg-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="mb-1 me-2"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.83325 3.33301V16.6663L16.6666 9.99967L5.83325 3.33301Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  How it works
                </Button>
              </div>
            </MainPost>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 custom-margin">
            <SnakePath />
          </div>
        </div>

        <div
          className="my-5 d-flex flex-column align-items-center justify-content-center w-100"
          style={{ backgroundColor: "#A8AAAE14", height: "534px" }}
        >
          <h1
            className="text-black fw-semibold fs-2 text-center"
            style={{ color: "#4B4B4B" }}
          >
            We’ve made it easy to request for a job
          </h1>

          <p
            className="fw-medium fs-5 text-center"
            style={{ color: "#242745" }}
          >
            With just a few clicks, you can initiate a targeted job request,
            saving you time and effort.
          </p>

          <Button
            margin="0 0 24px 0"
            className="fit-content landing modify-custom-btn"
          >
            Learn How
          </Button>
        </div>

        <AnimatedImage />

        <About />

        <Footer />
      </LandingPageWrapper>
    </>
  );
};

export default ResourcesMarketplace;
