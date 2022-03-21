import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate} from "react-router-dom";
import { Link } from "react-router-dom";
type props = {
  firstpersonname:string,
  firstpersonno:string,
  secondpersoname:string,
  secondpersonno:string,
  show:boolean,
  
}
class EmergencyContact extends React.Component<props,any> {
  constructor(props:props){
    super(props);
    
    this.state = {
    firstpersonname: "",
    firstpersonno: "",
    secondpersoname: "",
    secondpersonno: "",
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
    localStorage.setItem("emergencydetails", JSON.stringify(this.state));
    this.setState({
      show:true
    })
  };
  editHandler = () =>{
    this.setState({
      show:false
    });
    <Navigate to="/home/emergencycontact"/>
  }
  render(){
    
  return (
    <div>
      <Navbar personalData leaveData employeeData/>
      <span style={{ textDecoration: "underline" }}>Emergency Contact</span>
      <hr />
      {!this.state.show && <form onSubmit={this.submitForm}>
      <span>Firstperson Name:- </span>
      <input
        type="text"
        value={this.state.firstpersonname}
        name="firstpersonname"
        style={{ marginTop: "10px" }}
        onChange={this.onChange}required
      />
      <br />
      <span>Firstperson No:- </span>
      <input
        type="number"
        value={this.state.firstpersonno}
        name="firstpersonno"
        style={{ marginTop: "10px" }}
        onChange={this.onChange}required
      />
      <br />
      <span>Secondperson Name:- </span>
      <input
        type="text"
        value={this.state.secondpersoname}
        name="secondpersoname"
        style={{ marginTop: "10px" }}
        onChange={this.onChange}required
      />
      <br />
      <span>Secondperson No:- </span>
      <input
        type="number"
        value={this.state.secondpersonno}
        name="secondpersonno"
        style={{ marginTop: "10px" }}
        onChange={this.onChange}required
      />
      <br />
      <input
        type="submit"
        value="Submit Data"
        style={{
          backgroundColor: "cornflowerblue",
          marginTop: "10px",
          color: "white",
          border: "none",
          fontSize: "15px",
        }}
      />
      </form>}
      {this.state.show && <span style={{color:"green"}}>Emergency Data Added Successfully</span>}
      {this.state.show && <table style={{marginLeft:"300px"}}>
        <thead>
          <tr>
            <td><h3>Firstperson Name. </h3></td>
            <td><h3>Firstperson No. </h3></td>
            <td><h3>Secondperson Name. </h3></td>
            <td><h3>Secondperson No. </h3></td>
            <td>
              <h3>Edit </h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.firstpersonname}</td>
            <td>{this.state.firstpersonno}</td>
            <td>{this.state.secondpersoname}</td>
            <td>{this.state.secondpersonno}</td>
            <td><span onClick={this.editHandler}><Link to="/emergencycontact">Edit</Link></span></td>
          </tr>
        </tbody>
      </table> }
    </div>
  );
      }
};

export default EmergencyContact;
