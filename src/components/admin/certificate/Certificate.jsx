import React from "react";
import certLogo from "../../../assets/AdminRegImg/certLogo.png";
import ellipse from "../../../assets/AdminRegImg/ellipse.svg";
import retangle from "../../../assets/AdminRegImg/rectangle.svg";
import certIcon from "../../../assets/AdminRegImg/certIcon.png";
import SmallBarLayout from "../SmallBarLayout";
import "./Certificate.css";

function Certificate({ formData }) {
  if (!formData) {
    return <div>Loading...</div>; // Or render some loading indicator
  }

  return (
    <main>
      <div className="cert-main">
        <img src={ellipse} alt="icon" className="top-img" />
        <img src={retangle} alt="icon" className="bottom-img" />

        <div className="cert-heading">
          <div>
            <img src={certLogo} alt="silicon delta logo" />
          </div>
          <div className="cert-name">
            <h2>Silicon Delta</h2>
            <p>INNOVATION HUB</p>
          </div>
        </div>
        <div>
          <div className="certification">
            <p>CERTIFICATE OF COMPLETION</p>
            <img src={certIcon} alt="certificate Icon" />
          </div>

          <p className="presentation">This certificate is presented to:</p>
          <p className="holder">{formData.fullName}</p>
          <hr className="name-rule" />
          <p className="text">
            to have successfully completed a 6-weeks training in software
            development
          </p>
        </div>
        <div className="footer-section">
          <div className="date">
            <p>{formData.dateIssued}</p>
            <hr />
            <h4>Date</h4>
          </div>
          <div className="founder">
            <hr />
            <h6>{formData.founderName}</h6>
            <p>Founder of Silicon Delta Innovation Hub</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Certificate;
