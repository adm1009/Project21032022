import { render } from "@testing-library/react";
import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate, Link } from "react-router-dom";
type props = {
  duration: string;
  goals: string;
  skills: string;
  show: boolean;
  
};
class EmployeeAppraisalForm extends React.Component<props, any> {
  constructor(props: props) {
    super(props);
    
    this.state = {
      duration: "",
      goals: "",
      skills: "",
      show: false,
     
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitForm = () => {
    localStorage.setItem("details", JSON.stringify(this.state));
    this.setState({
      show: true,
    });
  };
  editHandler = () => {
    this.setState({
      show: false,
    });
    <Navigate to="/home/employeeappraisalform" />;
  };
  render() {
    
    return (
      <>
        <Navbar personalData leaveData employeeData />
        <span style={{ textDecoration: "underline" }}>
          EmployeeAppraisalForm
        </span>
        <hr />
        {!this.state.show && (
          <form onSubmit={this.submitForm}>
            <span>Appraisal Duration:- </span>
            <input
              type="text"
              value={this.state.duration}
              onChange={this.onChange}
              name="duration"
              style={{ margin: "10px" }}
              required
            />{" "}
            <br />
            <span>Selected Goals:-</span>{" "}
            <input
              type="text"
              value={this.state.goals}
              onChange={this.onChange}
              name="goals"
              style={{ margin: "10px" }}
              required
            />{" "}
            <br />
            <span>Selected Skills:- </span>
            <input
              type="text"
              value={this.state.skills}
              onChange={this.onChange}
              name="skills"
              style={{ margin: "10px" }}
              required
            />{" "}
            <br />
            <input
              type="submit"
              value="Finalize"
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
        {this.state.show && (
          <span style={{ color: "green" }}>
            Appraisal Data Added Successfully
          </span>
        )}
        {this.state.show && (
          <table style={{ marginLeft: "430px" }}>
            <thead>
              <tr>
                <td>
                  <h3>AppraisalDuration </h3>
                </td>
                <td>
                  <h3>SelectedGoals </h3>
                </td>
                <td>
                  <h3>SelectedSkills </h3>
                </td>
                <td>
                  <h3>Edit </h3>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.duration}</td>
                <td>{this.state.goals}</td>
                <td>{this.state.skills}</td>
                <td>
                  <span onClick={this.editHandler}>
                    <Link to="/employeeappraisalform">Edit</Link>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </>
    );
  }
}
export default EmployeeAppraisalForm;
