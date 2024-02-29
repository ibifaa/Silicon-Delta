const Table = ({ tableData }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Fullname</th>
          <th>Address</th>
          <th>Email</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index}>
            <td className="table-name">{data.name}</td>
            <td className="table-address">{data.address}</td>
            <td className="table-email">{data.email}</td>
            <td className="table-phone">{data.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
