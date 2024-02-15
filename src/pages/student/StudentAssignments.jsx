import React from 'react'
import StudentLayout from '../../components/student/StudentLayout'
import { FaEllipsisV } from 'react-icons/fa'
import assignmentPic from "../../assets/Test Results.png";

const StudentAssignments = () => {
  return (
    <StudentLayout>
        <h2>All Assigments</h2>

        <div className='student-assignment-page'>
            <div>
    
                <div><div className='img'><img src={assignmentPic} alt="" /></div> <div>
                <h3>Design Principles</h3> Due 16th feb., 2024</div></div>
                <div>
                    <FaEllipsisV className='icon' />
                </div>
            </div>
            <div>
    
                <div><div className='img'><img src={assignmentPic} alt="" /></div> <div>
                <h3>Design Principles</h3> Due 16th feb., 2024</div></div>
                <div>
                    <FaEllipsisV className='icon' />
                </div>
            </div>
            <div>
    
                <div><div className='img'><img src={assignmentPic} alt="" /></div> <div>
                <h3>Design Principles</h3> Due 16th feb., 2024</div></div>
                <div>
                    <FaEllipsisV className='icon' />
                </div>
            </div>
        </div>
    </StudentLayout>
  )
}

export default StudentAssignments