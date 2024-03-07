const PriceAndUpdate = ({ updateTableData }) => {
  // Check if tableData is an array
  if (!Array.isArray(updateTableData)) {
    return <p>Error: tableData is not an array</p>;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Price</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {updateTableData.map((data, index) => (
            <tr key={index}>
              {/* Validate data properties before rendering */}
              <td className="table-name">{data.course}</td>
              <td className="table-address">{data.price}</td>
              <td className="table-email">{data.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceAndUpdate;
