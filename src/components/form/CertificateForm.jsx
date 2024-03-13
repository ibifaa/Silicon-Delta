import React, { useState, useEffect } from "react";
import "./form.css";

function CertificateForm() {
  const [form, setForm] = useState({
    fullname: "",
    stack: "",
    duration: "",
    dateIssued: "",
    founderName: "",
  });
  // Function to handle school selection

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      stack,
      duration,
      dateIssued,
      founderName,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "/admin/certificate";

    setFullName("");
    setStack("");
    setDuration("");
    setDateIssued("");
    setFounderName("");
  };

  return (
    <>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student's full name"
            value={form.fullName}
            onChange={(e) =>
              setForm({
                ...form,
                fullname: e.target.value,
              })
            }
            required
          />

          <input
            type="text"
            value={form.stack}
            onChange={(e) =>
              setForm({
                ...form,
                stack: e.target.value,
              })
            }
            placeholder="Stack"
            required
          />

          <input
            type="text"
            value={form.duration}
            onChange={(e) =>
              setForm({
                ...form,
                duration: e.target.value,
              })
            }
            placeholder="Duration"
            required
          />

          <input
            type="text"
            value={form.dateIssued}
            onChange={(e) =>
              setForm({
                ...form,
                dateIssued: e.target.value,
              })
            }
            placeholder="Date Issued"
            required
          />

          <input
            type="text"
            value={form.founderName}
            onChange={(e) =>
              setForm({
                ...form,
                founderName: e.target.value,
              })
            }
            placeholder="Founder's Name"
            required
          />

          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </>
  );
}
export default CertificateForm;
