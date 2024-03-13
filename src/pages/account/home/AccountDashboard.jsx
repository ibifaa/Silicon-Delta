import React from "react";
import Chart1 from "./charts/Chart1";
import BChart from "./charts/BChart";
import calendar from "../../../assets/AdminRegImg/calendar.svg";
import "./AccountDashboard.css";

function AccountDashboard() {
  return (
    <div className="account-main">
      <h2>Overview</h2>
      <div className="chart-items">
        {" "}
        <div className="chart1 chart">
          <p>General Income</p>
          <div className="flex month-summary">
            <div className="flex boxes ">
              <img src={calendar} alt="" />
              <p>Last 30 days</p>
            </div>
            <div className="boxes ">
              <p>Compare : Mar 1 - Mar 31, 2024</p>
            </div>
          </div>
          <h2>N 100,000</h2>
          <Chart1 />
        </div>
        <div className="chart2 chart">
          <p>Logistics</p>
          <h2>N 100,000</h2>
          <Chart1 />
        </div>
        <div className="chart3 chart">
          <p>Client Analysis</p>
          <Chart1 />
        </div>
        <div className="chart4 chart">
          <p>Resource Allocation for schools</p>
          <BChart />
        </div>
      </div>
    </div>
  );
}

export default AccountDashboard;
