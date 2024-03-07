import React from "react";
import codingPic from "../../assets/coding.png";
import designPic from "../../assets/design.png";
import dgPic from "../../assets/digital-marketing.png";
import NewAdminLayout from "../../components/admin/NewAdminLayout";

const AdminCourseUpdate = () => {
  return (
    <NewAdminLayout>
      <div className="admin-courses-update">
        <div className="grid-cards">
          <div className="panel-card">
            <div>
              <img src={codingPic} alt="" />
            </div>
            <div className="sub-card">
              <h3>School of Coding </h3>
            </div>
          </div>

          <div className="panel-card">
            <div>
              <img src={designPic} alt="" />
            </div>
            <div className="sub-card">
              <h3>School of Design </h3>
            </div>
          </div>

          <div className="panel-card">
            <div>
              <img src={dgPic} alt="" />
            </div>
            <div className="sub-card">
              <h3>School of Coding </h3>
            </div>
          </div>
        </div>
      </div>
    </NewAdminLayout>
  );
};

export default AdminCourseUpdate;
