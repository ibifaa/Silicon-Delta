const AttendanceTableDesign = ({ attendanceTableData }) => {
  // Check if tableData is an array
  if (!Array.isArray(attendanceTableData)) {
    return <p>Error: tableData is not an array</p>;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Stack</th>
            <th>Student status</th>
            <th>Reg Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {attendanceTableData.map((data, index) => (
            <tr key={index}>
              {/* Validate data properties before rendering */}
              <td className="table-name">{data.name}</td>
              <td className="table-address">{data.stack}</td>
              <td className="table-status">
                <span
                  className={
                    data.status == "active" ? "red status" : "green status"
                  }
                >
                  {data.status}
                </span>
              </td>
              <td className="table-address">{data.reg}</td>
              <td className="table-email">
                <img src={data.action} alt="icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTableDesign;
