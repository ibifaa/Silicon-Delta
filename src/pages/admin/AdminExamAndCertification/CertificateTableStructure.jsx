const CertificateTableStructure = ({ certificateData }) => {
  // Check if tableData is an array
  if (!Array.isArray(certificateData)) {
    return <p>Error: tableData is not an array</p>;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Registration Number</th>
            <th>Email</th>
            <th>Stack</th>
            <th>Result</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {certificateData.map((data, index) => (
            <tr key={index}>
              {/* Validate data properties before rendering */}
              <td className="table-name">{data.name}</td>
              <td className="table-address">{data.regNumber}</td>
              <td className="table-email">{data.email}</td>
              <td className="table-name">{data.stack}</td>
              <td className="table-address">{data.result}</td>
              <td className="table-email">{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertificateTableStructure;
