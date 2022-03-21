import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Auth from "./Auth"
type props ={
  personalData:boolean,
      leaveData:boolean,
      employeeData:boolean
}
class Navbar extends React.Component<props,any> {
  constructor(props:props){
    super(props)
    this.state = {
      personalData:false,
      leaveData:false,
      employeeData:false
    };
  }
    personalHandler =() =>
    {
      this.setState({
        personalData:true,
        leaveData:false,
        employeeData:false
      })
    }
    leaveHandler = () =>{
      this.setState({
        leaveData:true,
        personalData:false,
        employeeData:false
      })
    }
    employeeHandler = () =>{
      this.setState({
        employeeData:true,
        leaveData:false,
        personalData:false
      })
    };
    logout() {
      Auth.signout();
    }
    render(){
  return (
    <div>
      <Link to="/logout" style={{marginLeft:"1200px"}}> <button onClick={this.logout}> Logout</button></Link>
      <nav className="navback">
        <h3 className="heading" ><button className="buttons"onClick={this.personalHandler}>Personal Details:-</button></h3>
        <h3 className="heading"><button className="buttons" onClick={this.leaveHandler}>Leave Details:-</button></h3>
        <h3 className="heading"><button className="buttons" onClick={this.employeeHandler}>Employee Details:-</button></h3>
      </nav>
      <nav className="nestedall">
      <h3>{this.state.personalData && <Link to="/personalinformation"><button className="buttons">Personal Information</button></Link>}</h3>
      <h3>{this.state.personalData && <Link to="/bankdetails"><button className="buttons">Bank Details</button></Link>}</h3>
      <h3>{this.state.personalData && <Link to="/emergencycontact"><button className="buttons">Emergency Contact</button></Link>}</h3>
      <h3>{this.state.personalData && <Link to="/infogen"><button className="buttons">Infogen Details</button></Link>}</h3>
      <h3>{this.state.leaveData && <Link to="/leave"><button className="buttons">Attendance Regularization</button></Link>}</h3>
      <h3>{this.state.employeeData && <Link to="/dailyattendance"><button className="buttons">Daily Attendance</button></Link>}</h3>
      <h3>{this.state.employeeData && <Link to="/dailytask"><button className="buttons">Daily Task</button></Link>}</h3>
      <h3>{this.state.employeeData && <Link to="/employeeappraisalform"><button className="buttons">Employee Appraisal Form</button></Link>}</h3>
      <h3>{this.state.employeeData && <Link to="/leavedata"><button className="buttons">Leave Details</button></Link>}</h3>
      <h3>{this.state.employeeData && <Link to="/monthlyattendance"><button className="buttons">Monthly Attendance</button></Link>}</h3>
      </nav>
    </div>
  );
};
}
export default Navbar;
