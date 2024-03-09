import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import codingPic from "../../assets/coding.png";
import designPic from "../../assets/design.png";
import dgPic from "../../assets/digital-marketing.png";

const AdminCourses = () => {
  return (
    <AdminLayout>
      <div className='admin-courses'>
      <div className='grid-cards'>
            <div className="panel-card">
                <div>
                <img src={codingPic} alt="" />
                </div>
                <div className='sub-card'>
                    <h3>School of Coding </h3>
                </div>
            </div>

            <div className="panel-card">
                <div>
                <img src={designPic} alt="" />
                </div>
                <div className='sub-card'>
                    <h3>School of Design  </h3>
                </div>
            </div>

            <div className="panel-card">
                <div>
                <img src={dgPic} alt="" />
                </div>
                <div className='sub-card'>
                    <h3>School of Coding </h3>
                </div>
            </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminCourses