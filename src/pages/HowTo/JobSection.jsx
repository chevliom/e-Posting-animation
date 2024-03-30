import { MainPost } from "../landingPage/LandingPage.style";
import jobWorkflow from "./assets/jobWorkflow.svg";
import "./howTo.css";

const JobSection = () => {
  const heading1Style = {
    color: "#242745",
    fontWeight: "700",
    fontSize: "64px",
    lineHeight: "84px",
    textAlign: "start",
  };

  const heading2Style = {
    color: "#242745",
    fontWeight: "700",
    fontSize: "32px",
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
        <div className="col-sm-12 d-flex flex-column custom-padding-left">
          <MainPost>
            <h1 style={heading2Style}>Job workflow</h1>
            <img src={jobWorkflow} alt="jobWorkflow" className="w-100" />
          </MainPost>
        </div>
      </div>

      <div className="row my-5 align-items-center w-100 custom-row-reverse">
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column custom-padding-left">
          <MainPost>
            <h1 className="custom-heading" style={heading1Style}>
              Candidate
            </h1>
            <div className="w-100">
              <p className="p-0 my-4" style={paraStyle}>
                As someone seeking a job to a job opportunity, ePosting is
                designed to provide you with powerful tools and support at every
                step of the way, ensuring your success throughout the entire
                process. Here's how we can assist you:
              </p>

              <p className="p-0 m-0" style={paraStyle}>
                1. Discovering a wide range of available job opportunities
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                2. Requesting a job if the opportunity is not yet available
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                3.Connecting you with a vast network of individual and corporate
                employers
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                4. Providing you with a secure and efficient way to handle
                contracts
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                5. Offering just-in-time tips to help you through the interview
                and offer stages
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                6. Getting feedback and building relationships with the
                employers
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                7. Ensuring a fulfilling job experience
              </p>
              <p className="p-0 my-4" style={paraStyle}>
                At ePosting, we not only help open doors to job opportunities
                that might otherwise be inaccessible, but also provide you with
                the tools necessary to reach your full potential.
              </p>
            </div>
          </MainPost>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column custom-padding-left">
          <MainPost>
            <h1 className="custom-heading" style={heading1Style}>
              Employer
            </h1>
            <div className="w-100">
              <p className="p-0 my-4" style={paraStyle}>
                For someone who can provide jobs, leveraging ePosting offers
                numerous benefits, including access to a wide pool of qualified
                candidates and streamlined process from start to finish. Here’s
                how we can assist you:
              </p>

              <p className="p-0 m-0" style={paraStyle}>
                1. Posting job opportunities and getting to your desired fee for
                successful jobs.
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                2. Expanding reach with access to a pool of targeted job
                requests
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                3. Shortlisting qualified candidates
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                4. Initiating and managing job contracts with candidates
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                5. Offering just-in-time tips to support you at each stage of
                the job process
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                6. Getting feedback and building relationships with the
                candidates
              </p>
              <p className="p-0 m-0" style={paraStyle}>
                7. Ensuring a fulfilling job experience
              </p>
              <p className="p-0 my-4" style={paraStyle}>
                We are committed to enhancing your job experience and helping
                you connect with the right candidates for the job opportunities
                you're offering.
              </p>
            </div>
          </MainPost>
        </div>
      </div>
    </>
  );
};

export default JobSection;
