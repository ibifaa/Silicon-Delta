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

import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
import AdminRegistration from "./pages/admin/AdminReg/AdminRegistration";
import AdminRegistrationForm from "./pages/admin/AdminStudentReg/AdminRegistrationForm";
import IdCardIssuance from "./pages/admin/IdCardIsuance/IdCardIssuance";
import AdminCoworkSpace from "./pages/admin/AdminCoworkSpace/AdminCoworkSpace";
import AdminClassManagement from "./pages/admin/AdminClassManagement/AdminClassManagement";
import AdminBiodataTable from "./pages/admin/Biodata/AdminBiodataTable";
import TablePage from "./pages/community-manager/TablePage";
import AdminCourseUpdate from "./pages/admin/AdminCourses/AdminCourseUpdate";
import AdminUpdateTable from "./components/admin/adminTables/AdminUpdateTable";
import AdminExamAndCert from "./pages/admin/AdminExamAndCertification/AdminExamAndCert";
import CertificateIssuanceTable from "./pages/admin/AdminExamAndCertification/CertificateIssuanceTable";
import CardIssuancePanel from "./pages/admin/IdCardIsuance/CardIssuancePanel";
import ClassManagementPanel from "./pages/admin/AdminClassManagement/ClassManagementPanel";
import AdminAttendanceMgtPanel from "./pages/admin/AdminClassManagement/AdminAttendanceMgtPanel";
import CertificateIssuancePanel from "./pages/admin/AdminExamAndCertification/CertificateIssuancePanel";
import CertificatePanel from "./pages/admin/AdminExamAndCertification/CertificatePanel";

import AccountDashboard from "./pages/account/home/AccountDashboard";
import Fees from "./pages/account/fees/Fees";
import TablePanel from "./pages/account/fees/TablePanel";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/admin/registration" element={<AdminRegistration />} />

        <Route
          path="/admin/registration-form/:title"
          element={<AdminRegistrationForm />}
        />

        <Route path="/admin/id-card-issuance" element={<IdCardIssuance />} />

        <Route
          path="/admin/card-issuance/:title"
          element={<CardIssuancePanel />}
        />
        <Route
          path="/admin/biodata-table/:title"
          element={<AdminBiodataTable />}
        />

        <Route
          path="/admin/cowork-space-registration"
          element={<AdminCoworkSpace />}
        />

        <Route
          path="/admin/class-management"
          element={<AdminClassManagement />}
        />

        <Route
          path="/admin/class-management/:title"
          element={<ClassManagementPanel />}
        />

        <Route
          path="/admin/class-attendance/:title"
          element={<AdminAttendanceMgtPanel />}
        />

        <Route
          path="/admin/biodata-table/:title"
          element={<AdminBiodataTable />}
        />

        <Route path="/admin/course-update" element={<AdminCourseUpdate />} />
        <Route
          path="/admin/course-update-table/:title"
          element={<AdminUpdateTable />}
        />

        <Route
          path="/admin/exam-and-certification"
          element={<AdminExamAndCert />}
        />

        <Route
          path="/admin/certificate-issuance/:title"
          element={<CertificateIssuanceTable />}
        />

        <Route
          path="/admin/certificate-form"
          element={<CertificateIssuancePanel />}
        />

        <Route path="/admin/certificate" element={<CertificatePanel />} />

        {/* End of Admin Routes */}

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

        {/* Account Routes */}

        <Route path="/account/dashboard" element={<AccountDashboard />} />
        <Route path="/account/fees" element={<Fees />} />
        <Route path="/account/fees/:title" element={<TablePanel />} />

        {/* others */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
