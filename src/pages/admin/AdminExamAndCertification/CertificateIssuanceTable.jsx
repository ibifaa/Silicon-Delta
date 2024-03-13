import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import SmallAside from "../../../components/aside/SmallAside";

import arrowRight from "../../../assets/arrow-right.svg";
import arrowLeft from "../../../assets/arrow-left.svg";

import certificateData from "./certificateData";

import CertificateTableStructure from "./CertificateTableStructure";

import certIcon from "../../../assets/AdminRegImg/cert.svg";
import SmallBarLayout from "../../../components/admin/SmallBarLayout";

function CertificateIssuanceTable() {
  let { title } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const totalRows = certificateData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = certificateData.slice(indexOfFirstRow, indexOfLastRow);

  // Pagination controls
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(value);
    setCurrentPage(1); // Reset to the first page when changing rows per page
  };

  return (
    <SmallBarLayout>
      <div className="certificateTableMain">
        <main className="tableComp flex">
          <div className="tableTitle">
            <p className="school">{title}</p>
            <div className="flex sub-nav">
              <form className="certForm" action="">
                <select>
                  <option value="School of Coding">School of Coding</option>
                  <option value="School of Design">School of Design</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </form>
              <Link to={`/admin/certificate-form`}>
                <div className="create-icon flex">
                  <img src={certIcon} alt="icon" />
                  <p>Create Certificate</p>
                </div>
              </Link>
            </div>

            <CertificateTableStructure certificateData={currentRows} />
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

export default CertificateIssuanceTable;
