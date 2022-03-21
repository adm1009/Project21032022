import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate,Link} from "react-router-dom";
type props ={
      project: string,
      task: string,
      time: string,
      status: string,
      blockingissue: string,
      responsibleperson: string,
      show:boolean,
      
}
class DailyTask extends React.Component<props,any> {
  constructor(props:props){
    super(props);
  
    this.state = {
      project: "",
      task: "",
      time: "",
      status: "inprogress",
      blockingissue: "",
      responsibleperson: "",
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
    <Navigate to="/home/dailytask"/>
  }
  render(){
  
  return (
    <>
      <Navbar personalData leaveData employeeData/>
      <span style={{ textDecoration: "underline" }}>Daily Task Details</span>
      <hr />
      {!this.state.show && (
        <form onSubmit={this.submitForm}>
          <span>Project:- </span>
          <input
            type="text"
            name="project"
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.project}required
          />
          <br />
          <span>Task:- </span>
          <input
            type="text"
            name="task"
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.task}required
          />
          <br />
          <span>Time(in Hrs):- </span>
          <input
            type="text"
            name="time"
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.time}required
          />
          <br />
          <span>Status:- </span>
          <select
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.status}
          >
            <option value="inprogress">in progress</option>
            <option value="completed">completed</option>
          </select>
          <br />
          <span>Blocking Issue:- </span>
          <input
            type="text"
            name="blockingissue"
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.blockingissue}required
          />
          <br />
          <span>Responsible Person:- </span>
          <input
            type="text"
            name="responsibleperson"
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.responsibleperson}required
          />
          <br />
          <input
            type="submit"
            value="Submit Task"
            style={{
              backgroundColor: "cornflowerblue",
              marginTop: "10px",
              color: "white",
              border: "none",
              fontSize: "15px",
            }}
          />
        </form>
      )}
      {this.state.show && <span style={{ color: "green" }}>Daily Task updated!</span>}
      <br />
      {this.state.show && <table style={{marginLeft:"400px"}}>
        <thead>
          <tr>
            <td><h3>Project </h3></td>
            <td><h3>Task </h3></td>
            <td><h3>Time </h3></td>
            <td><h3>Status </h3></td>
            <td><h3>BlockingIssues </h3></td>
            <td><h3>ResponsiblePerson</h3></td>
            <td><h3>Edit</h3> </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.project}</td>
            <td>{this.state.task}</td>
            <td>{this.state.time}</td>
            <td>{this.state.status}</td>
            <td>{this.state.blockingissue}</td>
            <td>{this.state.responsibleperson}</td>
            <td><span onClick={this.editHandler}><Link to="/dailytask">Edit</Link></span></td>

          </tr>
        </tbody>
      </table> }
    </>
  );
};
}
export default DailyTask;

