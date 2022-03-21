
import Logout from "./components/Logout";
import Home from "./components/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import PersonalInformation from "./components/personal/PersonalInformation";
import BankDetails from "./components/personal/BankDetails";
import EmergencyContact from "./components/personal/EmergencyContact";
import Infogen from "./components/personal/Infogen";
import LeaveDetails from "./components/leave/LeaveDetails";
import MyRegularize from "./components/leave/MyRegularize";
import ApplyRegularize from "./components/leave/ApplyRegularize";
import DailyAttendance from "./components/employee/DailyAttendance";
import DailyTask from "./components/employee/DailyTask";
import EmployeeAppraisalForm from "./components/employee/EmployeeAppraisalForm";
import LeaveData from "./components/employee/LeaveData";
import MonthlyAttendance from "./components/employee/MonthlyAttendance";
import PrivateRoute from "./components/PrivateRoute";
type props ={

}
class App extends React.Component<props, props> {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Infogen Labs Pvt.Ltd</h1>
        <h1>Employee Management System</h1>
       
        <Routes>
          <Route path="/" element={<Home username="" password="" show/>} />
          <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
          <Route
            path="/personalinformation"
            element={<PrivateRoute>
              <PersonalInformation
                employeecode=""
                firstname=""
                middlename=""
                lastname=""
                gender=""
                dateofbirth=""
                mobileno=""
                emailid=""
                address=""
                passportno=""
                bloodgroup=""
                show
              /></PrivateRoute>
            }
          />
          <Route
            path="/bankdetails"
            element={
             <PrivateRoute><BankDetails pancardno="" accountno="" bankname="" bank="" show /></PrivateRoute>
            }
          />
          <Route
            path="/emergencycontact"
            element={
              <PrivateRoute><EmergencyContact
                firstpersonname=""
                firstpersonno=""
                secondpersoname=""
                secondpersonno=""
                show
              /></PrivateRoute>
            }
          />
          <Route
            path="/infogen"
            element={
              <PrivateRoute><Infogen
                skillexp=""
                skillknow=""
                yearofexp=""
                resume=""
                certificate=""
                show
              /></PrivateRoute>
            }
          />
          <Route path="/leave" element={<PrivateRoute><LeaveDetails /></PrivateRoute>} />
          <Route
            path="/dailyattendance"
            element={
              <PrivateRoute><DailyAttendance entry exit msg datesData="" timesData="" /></PrivateRoute>
            }
          />
          <Route
            path="/dailytask"
            element={
              <PrivateRoute><DailyTask
                project=""
                task=""
                time=""
                status=""
                blockingissue=""
                responsibleperson=""
                show
              /></PrivateRoute>
            }
          />
          <Route
            path="/employeeappraisalform"
            element={
              <PrivateRoute><EmployeeAppraisalForm duration="" goals="" skills="" show /></PrivateRoute>
            }
          />
          <Route
            path="/leavedata"
            element={<PrivateRoute><LeaveData date="" reason="" show /></PrivateRoute>}
          />
          <Route
            path="/monthlyattendance"
            element={<PrivateRoute><MonthlyAttendance /></PrivateRoute>}
          />
          <Route path="/leave/myregularize" element={<PrivateRoute><MyRegularize /></PrivateRoute>} />
          <Route
            path="/leave/applyregularize"
            element={
              <PrivateRoute><ApplyRegularize
                approver=""
                reason=""
                date=""
                checkin=""
                checkout=""
                show
              /></PrivateRoute>
            }
          />
          <Route path="*" element={"404 Not Found"} />
        </Routes>
        <footer style={{ marginTop: "100px" }}>
          <span>Copyright &copy; 2022</span>
        </footer>
      </div>
    );
  }
}
export default App;


