import PrimaryButton from "../../components/Button/PrimaryButton";
import unsuscribe from "./assets/unsuscribe.svg";

const UnsuscribeContent = () => {
  const heading5 = {
    color: "#7367F0",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "36px",
  };
  return (
    <>
      <div className="my-5 w-100" style={{}}>
        <div
          className="w-100 d-flex flex-column gap-4 justify-content-center align-items-center"
          style={{ marginBottom: "12rem" }}
        >
          <img src={unsuscribe} alt="unsuscribe" />

          <div
            style={{
              display: "flex",
              gap: "5px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5 style={heading5}>You will be missed</h5>

            <p>
              [email address] has been unsubscribed from the ePosting email
              list.
            </p>

            <p>If that was a mistake or if you change your mind:</p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PrimaryButton>I want to re-subscribe</PrimaryButton>
            <p>
              Question or feedback? Please contact us at support@eposting.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnsuscribeContent;
