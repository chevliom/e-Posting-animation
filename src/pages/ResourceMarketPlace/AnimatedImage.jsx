import { MainPost } from "../landingPage/LandingPage.style";

import girlImage from "./assets/girlImage.svg";
import boyComputer from "./assets/boyComputer.svg";
import hande from "./assets/hande.svg";
import certificate from "./assets/certificate.svg";

const AnimatedImage = () => {
  return (
    <>
      <div className="row my-5 align-items-center w-100 custom-row-reverse">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <MainPost>
            <img src={girlImage} alt="girlImage" className="w-100" style={{}} />
          </MainPost>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column custom-padding-left">
          <MainPost>
            <div className="w-100 d-flex align-items-start gap-2">
              <img src={hande} alt="hande" width={32} height={32} />
              <div className="w-100">
                <h1 className="fs-4" style={{ color: "#4B4B4B" }}>
                  Streamlined flow
                </h1>
                <p
                  className="fs-5 fw-normal text-start"
                  style={{ color: "#4B4B4B", lineHeight: "38px" }}
                >
                  A few clicks away, you will be able to <br /> create a job
                  request available to job <br /> posters and recruiters.
                </p>
              </div>
            </div>

            <div className="w-100 d-flex align-items-start gap-2">
              <img src={certificate} alt="certificate" width={32} height={32} />
              <div className="w-100">
                <h1 className="fs-4" style={{ color: "#4B4B4B" }}>
                  Best practices
                </h1>
                <p
                  className="fs-5 fw-normal text-start"
                  style={{ color: "#4B4B4B", lineHeight: "38px" }}
                >
                  Our unique job workflow helps <br /> navigate the job market
                  and increases <br /> your chance of success.
                </p>
              </div>
            </div>
          </MainPost>
        </div>
      </div>

      <div className="row my-5 align-items-center w-100 custom-column-reverse">
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column custom-padding-left">
          <MainPost>
            <div className="w-100 d-flex align-items-start gap-2">
              <img src={hande} alt="hande" width={32} height={32} />
              <div className="w-100">
                <h1 className="fs-4" style={{ color: "#4B4B4B" }}>
                  Streamlined flow
                </h1>
                <p
                  className="fs-5 fw-normal text-start"
                  style={{ color: "#4B4B4B", lineHeight: "38px" }}
                >
                  A few clicks away, you will be able to <br /> create a job
                  request available to job <br /> posters and recruiters.
                </p>
              </div>
            </div>

            <div className="w-100 d-flex align-items-start gap-2">
              <img src={certificate} alt="certificate" width={32} height={32} />
              <div className="w-100">
                <h1 className="fs-4" style={{ color: "#4B4B4B" }}>
                  Best practices
                </h1>
                <p
                  className="fs-5 fw-normal text-start"
                  style={{ color: "#4B4B4B", lineHeight: "38px" }}
                >
                  Our unique job workflow helps <br /> navigate the job market
                  and increases <br /> your chance of success.
                </p>
              </div>
            </div>
          </MainPost>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6">
          <MainPost>
            <img
              src={boyComputer}
              alt="boyComputer"
              className="w-100"
              style={{}}
            />
          </MainPost>
        </div>
      </div>
    </>
  );
};

export default AnimatedImage;
