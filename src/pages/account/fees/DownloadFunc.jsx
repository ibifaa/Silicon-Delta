import React from "react";
import html2pdf from "html2pdf.js";
import * as XLSX from "xlsx";

export function ExportToPDFButton({ contentId }) {
  const handleExportToPDF = () => {
    const element = document.getElementById(contentId);
    html2pdf().from(element).save();
  };
  return <button onClick={handleExportToPDF}>Export to PDF</button>;
}

export function ExportToExcelButton({ contentId }) {
  const handleExportToExcel = () => {
    const element = document.getElementById(contentId);
    const ws = XLSX.utils.table_to_sheet(element);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "export.xlsx");
  };
  return <button onClick={handleExportToExcel}>Export to Excel</button>;
}

function DownloadFunc() {
  return <div></div>;
}

export default DownloadFunc;
