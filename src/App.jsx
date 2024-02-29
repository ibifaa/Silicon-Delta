import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import StudentDashboard from "./pages/student/StudentDashboard";
import StudentAttendance from "./pages/student/StudentAttendance";
import StudentCourses from "./pages/student/StudentCourses";
import StudentAssignments from "./pages/student/StudentAssignments";
import StudentProfile from "./pages/student/StudentProfile";
import StudentCertificates from "./pages/student/StudentCertificates";

import CommunityManagerDashboard from "./pages/community-manager/CommunityManagerDashboard";
import CommunityManagerReports from "./pages/community-manager/CommunityManagerReports";
import CommunityManagerCommunities from "./pages/community-manager/CommunityManagerCommunities";
import CommunityManagerSmsManagement from "./pages/community-manager/CommunityManagerSmsManagement";
import CommunityManagerEmailManagement from "./pages/community-manager/CommunityManagerEmailManagement";
import CommunityManagerSettings from "./pages/community-manager/CommunityManagerSettings";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRegistration from "./pages/admin/AdminReg/AdminRegistration";
import AdminStudentRegistration from "./pages/admin/AdminStudentReg/AdminStudentRegistration";
import IdCardIssuance from "./pages/admin/IdCardIsuance/IdCardIssuance";
import AdminCoworkSpace from "./pages/admin/AdminCoworkSpace/AdminCoworkSpace";
import AdminClassManagment from "./pages/admin/AdminClassManagement/AdminClassManagement";
import TablePage from "./pages/community-manager/TablePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />

        {/* student */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/courses" element={<StudentCourses />} />
        <Route path="/student/assignments" element={<StudentAssignments />} />
        <Route path="/student/certificates" element={<StudentCertificates />} />
        <Route path="/student/profile" element={<StudentProfile />} />

        {/* community manager */}
        <Route
          path="/community-manager/dashboard"
          element={<CommunityManagerDashboard />}
        />
        <Route
          path="/community-manager/reports"
          element={<CommunityManagerReports />}
        />
        <Route
          path="/community-manager/communities"
          element={<CommunityManagerCommunities />}
        />
        <Route
          path="/community-manager/sms-management"
          element={<CommunityManagerSmsManagement />}
        />
        <Route
          path="/community-manager/email-management"
          element={<CommunityManagerEmailManagement />}
        />
        <Route
          path="/community-manager/settings"
          element={<CommunityManagerSettings />}
        />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/registration" element={<AdminRegistration />} />

        <Route
          path="/admin/student-registration"
          element={<AdminStudentRegistration />}
        />

        <Route path="/admin/id-card-issuance" element={<IdCardIssuance />} />

        <Route
          path="/admin/cowork-space-registration"
          element={<AdminCoworkSpace />}
        />

        <Route
          path="/admin/class-management"
          element={<AdminClassManagment />}
        />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route
          path="/community-manager/dashboard"
          element={<CommunityManagerDashboard />}
        />
        <Route
          path="/community-manager/reports"
          element={<CommunityManagerReports />}
        />
        <Route
          path="/community-manager/communities"
          element={<CommunityManagerCommunities />}
        />
        <Route
          path="/community-manager/sms-management"
          element={<CommunityManagerSmsManagement />}
        />
        <Route
          path="/community-manager/sms-management/:type"
          element={<TablePage />}
        />

        <Route
          path="/community-manager/email-management"
          element={<CommunityManagerEmailManagement />}
        />

        <Route
          path="/community-manager/email-management/:type"
          element={<TablePage />}
        />

        <Route
          path="/community-manager/settings"
          element={<CommunityManagerSettings />}
        />

        {/* others */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
