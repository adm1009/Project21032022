import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate,Link} from "react-router-dom";
type props ={
  date: string,
    reason: string,
    show:boolean,
   
}
class LeaveData extends React.Component<props,any>  {
  constructor(props:props){
    super(props);
    
    this.state = {
      date: "",
    reason: "",
    show:false,
    
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange =(e: any)=> {
    this.setState({
      [e.target.name]:e.target.value
    })
  };
  submitForm =()=> {
    localStorage.setItem("details", JSON.stringify(this.state));
    this.setState({
      show:true
    })
  };
  editHandler = () =>{
    this.setState({
      show:false
    });
    <Navigate to="/home/leavedata"/>
  }
  render(){
    
  return (
    <>
      <Navbar personalData leaveData employeeData/>
      <span style={{textDecoration:"underline"}}>Leave Details</span>
      <hr />
      {!this.state.show && <form onSubmit={this.submitForm}>
        <span>Date:- </span>
        <input
          type="text"
          value={this.state.date}
          onChange={this.onChange}
          name="date"
          style={{ marginTop: "10px" }}required
        /> <span>YYYY-MM-DD</span>
        <br />
        <span>Reason:- </span>
        <input
          type="text"
          value={this.state.reason}
          onChange={this.onChange}
          name="date"
          style={{ marginTop: "10px" }}required
        />
        <br />
        <input type="submit" value="Apply" style={{
              backgroundColor: "cornflowerblue",
              marginTop: "10px",
              color: "white",
              border: "none",
              fontSize: "15px",
            }}/>
      </form>}
      {this.state.show && <span style={{color:"red"}}>Applied for Leave</span> }
      {this.state.show && <table style={{marginLeft:"580px"}}>
        <thead>
          <tr>
            <td><h3>Date </h3></td>
            <td><h3>Reason </h3></td>
            <td><h3>Edit </h3></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.date}</td>
            <td>{this.state.reason}</td>
            <td><span onClick={this.editHandler}><Link to="/leavedata">Edit</Link></span></td>
          </tr>
        </tbody>
      </table> }
    </>
  );
};
}
export default LeaveData;
