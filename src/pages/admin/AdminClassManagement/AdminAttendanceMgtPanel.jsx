import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import SmallBarLayout from "../../../components/admin/SmallBarLayout";

import arrowRight from "../../../assets/arrow-right.svg";
import arrowLeft from "../../../assets/arrow-left.svg";

import attendanceTableData from "./attendanceTableData";
import "./AdminClassManagement.css";
import Chart from "../../../components/admin/charts/Chart";
import AttendanceTableDesign from "./AttendanceTableDesign";

function AdminAttendanceMgtPanel() {
  let { title } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const totalRows = attendanceTableData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = attendanceTableData.slice(
    indexOfFirstRow,
    indexOfLastRow
  );

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
      <div>
        <main className="attendanceMain">
          <div className="heading flex">
            <h4 className="title">{title}</h4>
            <div className="button-section flex">
              <button className="box1 flex">
                {" "}
                <div className="circle circle1"></div>Inactive
              </button>
              <button className="box2 flex">
                <div className="circle circle2"></div>Active
              </button>
            </div>
          </div>
          <div className="sub-section">
            <p className="subTitle">Overview</p>
            <select name="" id="">
              <option value=" ">This week</option>
              <option value="">Next week</option>
            </select>
          </div>
          <div className="chartSection flex">
            <Chart />
          </div>

          <div className="tableComp tableHeading flex"></div>
          <div className="attendanceTable ">
            <div className="tableTitle">
              <div className="flex priceDiv tableHeading ">
                <h4 className="title">Attendance Details</h4>
                <select name="" id="">
                  <option value="">School of Coding</option>
                  <option value="">School of marketing</option>
                </select>

                <input type="text" placeholder="search for name of school" />
                <div className="updatedBtn">+ Add courses</div>
              </div>

              <AttendanceTableDesign attendanceTableData={currentRows} />
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
          </div>
        </main>
      </div>
    </SmallBarLayout>
  );
}

export default AdminAttendanceMgtPanel;
