import React from "react";
import arrow from "../../../assets/AdminRegImg/arrow.svg";

import {
  ExportToPDFButton,
  ExportToExcelButton,
} from "../../../pages/account/fees/DownloadFunc";

function DownloadCard({ contnetId }) {
  return (
    <div>
      <div>
        <img src={arrow} alt="arrow icon" />
        <p>Download File</p>
      </div>

      <div>
        <ExportToPDFButton contentId={contentId} />
        <ExportToExcelButton contentId={contentId} />
      </div>
    </div>
  );
}

export default DownloadCard;
