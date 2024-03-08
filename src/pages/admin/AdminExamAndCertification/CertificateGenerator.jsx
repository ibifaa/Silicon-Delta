import React, { useState } from "react";
import CertificateForm from "../../../components/form/CertificateForm";
import Certificate from "../../../components/admin/certificate/Certificate";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function CertificateGenerator() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <CertificateForm onSubmit={handleFormSubmit} />
      {formData && <Certificate formData={formData} />}
    </div>
  );
}

export default CertificateGenerator;
