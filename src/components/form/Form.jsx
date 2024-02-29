import React from "react";
import "./form.css";

function Form() {
  return (
    <div className="form-content">
      <form action="">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone number" />
        <select name="school" id="school" value="school">
          <option value="">Codding School</option>
          <option value="">Digital Marketing School</option>
          <option value="">Designing School</option>
        </select>
        <select name="course" id="course" value="Course">
          <option value="">course</option>
          <option value="">course2</option>
          <option value="">course3</option>
        </select>
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
}

export default Form;
