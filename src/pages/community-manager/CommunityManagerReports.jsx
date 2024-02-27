import React from "react";
import CommunityManagerLayout from "../../components/community-manager/CommunityManagerLayout";
import calanderPic from "../../assets/calander-icon.png";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";
import { RiSearchLine } from "react-icons/ri";

const CommunityManagerReports = () => {
  const [value, onChange] = useState(new Date());
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    // setSearchTerm(event.target.value);
    // You can add your search logic here
  };

  return (
    <CommunityManagerLayout>
      <div>
        <h1>Records of Activities</h1>
        <br />
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search-icon" onClick={handleSearch}>
            <RiSearchLine />
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="panel-sections">
        <div className="panel-section1">
          <div className="panel-card">
            <h2>Upcoming Event</h2>
            <br />

            <div className="event-card">
              <img src={calanderPic} alt="" />
              <span>
                16/03/2024 - Bits and Banter (Involving everyone even outside)
              </span>
            </div>

            <div className="event-card">
              <img src={calanderPic} alt="" />
              <span>
                16/03/2024 - Bits and Banter (Involving everyone even outside)
              </span>
            </div>

            <div className="event-card">
              <img src={calanderPic} alt="" />
              <span>
                16/03/2024 - Bits and Banter (Involving everyone even outside)
              </span>
            </div>
          </div>
        </div>
        <div className="panel-section2">
          <div className="panel-card">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>


   <div className="panel-card">
   <div className="table-container">
    <h2>Communities</h2><br />
        <table className="material-table">
            <thead>
                <tr>  
                  <th>S/N</th>
                    <th>DATE</th>
                    <th>NAME</th>
                    <th>COMMUNITY</th>
  
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>12/01/2024</td>
                    <td>Amas Cleopas.E</td>
                    <td>SD Startup Community</td>
                </tr>
                <tr>
                <td>2</td>
                    <td>12/01/2024</td>
                    <td>Amas Cleopas.E</td>
                    <td>SD Startup Community</td>
                </tr>
            </tbody>
        </table>

      </div>
   </div><br /><br />
    </CommunityManagerLayout>
  );
};

export default CommunityManagerReports;
