import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

function AdminCalender() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      {/* <div className="text-center">{date.toDateString()}</div> */}
    </div>
  );
}

export default AdminCalender;
