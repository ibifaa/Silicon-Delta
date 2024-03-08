import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SmallAside from "../../../components/aside/SmallAside";
import Certificate from "../../../components/admin/certificate/Certificate";
import SmallBarLayout from "../../../components/admin/SmallBarLayout";

function CertificateIssuancePanel() {
  const [formData, setFormData] = useState(null);
  console.log("here");
  const { title } = useParams();
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  return (
    <SmallBarLayout>
      <div className="">
        <main>
          <div className="flex certificate-main">
            <div className="cert-title-section">
              <h2>Silicon Delta</h2>
              <p>INNOVATION HUB</p>

              <h4>Certificate Issuance</h4>
            </div>

            <div>
              <Certificate formData={formData} />
            </div>
          </div>

          <div className="cert-form">
            <p>Send to student’s Email</p>
            <form action="" className="flex">
              <input type="text" placeholder="Email address" />
              <button>Send</button>
            </form>
          </div>
        </main>
      </div>
    </SmallBarLayout>
  );
}

export default CertificateIssuancePanel;
