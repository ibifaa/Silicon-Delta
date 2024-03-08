import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SmallAside from "../../../components/aside/SmallAside";
import CertificateForm from "../../../components/form/CertificateForm";
import SmallBarLayout from "../../../components/admin/SmallBarLayout";
import Certificate from "../../../components/admin/certificate/Certificate";

function CertificateIssuancePanel() {
  const { title } = useParams();
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <SmallBarLayout>
      <div className="cert">
        <main className="flex studentsReg">
          <div className="asr-text-section">
            <h2>Silicon Delta</h2>
            <p>INNOVATION HUB</p>

            <h4>Certificate Issuance</h4>
          </div>

          {/* Render CertificateForm component and pass onSubmit prop */}
          <CertificateForm onSubmit={handleFormSubmit} />

          {/* Optionally render Certificate component if form data is available */}
          {formData && <Certificate formData={formData} />}
        </main>
      </div>
    </SmallBarLayout>
  );
}

export default CertificateIssuancePanel;
