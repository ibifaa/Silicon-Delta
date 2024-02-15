import React from 'react'
import StudentLayout from '../../components/student/StudentLayout'
import coursePic from "../../assets/Silicon Delta 2.png";

const StudentCourses = () => {
  return (
    <StudentLayout>
        <h2>Your Courses</h2>

        <div className='student-course-page'>
            <div className='panel-card'>
                <div className='course-pic'><img src={coursePic} /></div>
                <div><h2>Foundations of User Experience
(UI/UX) Design</h2>Joshua Greene</div>
            </div>
            <div className='panel-card'>
                <div className='course-pic'><img src={coursePic} /></div>
                <div><h2>Foundations of User Experience
(UI/UX) Design</h2>Joshua Greene</div>
            </div>
            <div className='panel-card'>
                <div className='course-pic'><img src={coursePic} /></div>
                <div><h2>Foundations of User Experience
(UI/UX) Design</h2>Joshua Greene</div>
            </div>
        </div>
    </StudentLayout>
  )
}

export default StudentCourses