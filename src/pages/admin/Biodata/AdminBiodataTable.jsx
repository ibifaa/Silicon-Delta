import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import SmallAside from "../../../components/aside/SmallAside";

import arrowRight from "../../../assets/arrow-right.svg";
import arrowLeft from "../../../assets/arrow-left.svg";

import tableData from "../../data";
import "./AdminBiodata.css";
import AdminTableForUsers from "../../../components/admin/adminTables/AdminTableForUsers";

function AdminBiodataTable() {
  let { title } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const totalRows = tableData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  // Pagination controls
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(value);
    setCurrentPage(1); // Reset to the first page when changing rows per page
  };

  console.log(title);
  return (
    <div>
      <div className="asr-navbar">
        <Navbar />
      </div>

      <div className="asr-content flex">
        <SmallAside />

        <main className="tableComp flex">
          <div className="tableTitle">
            <h4 className="school">{title}</h4>
            <p>Students Biodata</p>
            <AdminTableForUsers tableData={currentRows} />
          </div>
          <div className="pagination-controls">
            <div className="pagination-dropdown">
              <label>Show</label>
              <div>
                <select
                  value={rowsPerPage}
                  onChange={(e) => handleRowsPerPageChange(e.target.value)}
                >
                  <option value={5}>5 rows</option>
                  <option value={10}>10 rows</option>
                  <option value={15}>15 rows</option>
                  <option value={20}>20 rows</option>
                </select>
              </div>
              <label>Per page</label>
            </div>

            <div className="pagination-btns">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <img src={arrowLeft} alt="arrow left" />
              </button>
              <span>{`Page 0${currentPage} of 0${totalPages}`}</span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <img src={arrowRight} alt="arrow right" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminBiodataTable;
