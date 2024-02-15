import React from 'react'
import StudentLayout from '../../components/student/StudentLayout'

const StudentAttendance = () => {
  return (
    <StudentLayout>
        <div className='student-attendance-page'>

    <h2 style={{textAlign: "center"}}>Attendance For This Month</h2><br />
        <div className="table">
        <table>
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>ATTENDANCE STATUS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Monday</b><br />1244</td>
                    <td><button className='bg-green'>Present</button></td>
                </tr>
                <tr>
                    <td><b>Monday</b><br />1244</td>
                    <td><button className='bg-red'>Abesent</button></td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>

        
    </StudentLayout>
  )
}

export default StudentAttendance