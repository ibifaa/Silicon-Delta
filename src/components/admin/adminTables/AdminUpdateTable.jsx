import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import SmallAside from "../../../components/aside/SmallAside";

import arrowRight from "../../../assets/arrow-right.svg";
import arrowLeft from "../../../assets/arrow-left.svg";

import updateTableData from "../../../components/admin/adminTables/priceAndCourseData";
import "./AdminUpdateTable.css";
import PriceAndUpdate from "../../../components/admin/adminTables/PriceAndUpdate";
import SmallBarLayout from "../SmallBarLayout";

function AdminUpdateTable() {
  let { title } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const totalRows = updateTableData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = updateTableData.slice(indexOfFirstRow, indexOfLastRow);

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
    <SmallBarLayout>
      <div className="courseTable">
        <main className="tableComp flex">
          <div className="tableTitle">
            <h4 className="school">{title}</h4>
            <div className="flex priceDiv">
              <p>Course Update and Pricing</p>
              <div className="updatedBtn">+ Add courses</div>
            </div>

            <PriceAndUpdate updateTableData={currentRows} />
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
    </SmallBarLayout>
  );
}

export default AdminUpdateTable;
