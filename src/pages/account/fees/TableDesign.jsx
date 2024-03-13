const TableDesign = ({ feesData }) => {
  // Check if tableData is an array
  if (!Array.isArray(feesData)) {
    return <p>Error: tableData is not an array</p>;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Student ID</th>
            <th>Coding</th>
            <th>Design</th>
            <th>Marketing</th>
          </tr>
        </thead>
        <tbody>
          {feesData.map((data, index) => (
            <tr key={index}>
              {/* Validate data properties before rendering */}
              <td className="table-name">{data.name}</td>
              <td className="table-address">{data.regNumber}</td>
              <td className="table-email">{data.coding}</td>
              <td className="table-name">{data.design}</td>
              <td className="table-address">{data.marketing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDesign;
