import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";
type props ={
  entry: boolean,
      exit: boolean,
      msg: boolean,
      datesData: string,
      timesData: string
}
class DailyAttendance extends React.Component<props, any> {
  constructor(props: props) {
    super(props);
    
    this.state = {
      entry: false,
      exit: false,
      msg: false,
    };
    let date = new Date();
    const dates =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    const times =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    this.state = {
      datesData: dates,
      timesData: times,
      
    };
  }
  entryHandler = () => {
    this.setState({ entry: true });
    localStorage.setItem("datesdata", this.state.datesData);
    localStorage.setItem("timesdata", this.state.timesData);
  };
  exitHandler = () => {
    this.setState({ exit: true });
    this.setState({ msg: true });
  };
  render() {
    
    return (
      <div style={{ textAlign: "center" }}>
        <Navbar personalData leaveData employeeData/>
        <span style={{ textDecoration: "underline" }}>Daily Attendance</span>
        <hr />
        <h3 style={{ color: "green" }}>
          {this.state.entry && !this.state.msg && "Successfully Checked in"}
        </h3>
        <h3 style={{ color: "red" }}>
          {this.state.exit && this.state.msg && "Successfully Checked out"}
        </h3>
        <button onClick={this.entryHandler}>CheckIn</button>
        <button onClick={this.exitHandler}>CheckOut</button>
        <table style={{ marginLeft: "500px" }}>
          <thead>
            <tr>
              <td>
                <h3>CheckinTime </h3>
              </td>
              <td>
                <h3>CheckOutTime </h3>
              </td>
              <td>
                <h3>Status</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.state.entry &&
                  localStorage.getItem("datesdata") +
                    "-" +
                    localStorage.getItem("timesdata")}
              </td>
              <td>
                {this.state.exit &&
                  new Date().getDate() +
                    "/" +
                    new Date().getMonth() +
                    "/" +
                    new Date().getFullYear() +
                    "-" +
                    new Date().getHours() +
                    ":" +
                    new Date().getMinutes() +
                    ":" +
                    new Date().getSeconds()}
              </td>
              <td>{!this.state.exit ? "" : "Present"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default DailyAttendance;


