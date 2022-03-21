import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Auth from "./Auth";
import data from "./data.json";
type props = {
  username: string;
  password: string;
  show: boolean;
};
class Home extends React.Component<props, any> {
  constructor(props: props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      show: false,
    };
  }
  submitForm = (e: any) => {
    e.preventDefault();
    Auth.authenticate();
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        {!this.state.show && (
          <h3 style={{ backgroundColor: "cornflowerblue", color: "white" }}>
            Welcome to Infogen Labs Pvt.Ltd
          </h3>
        )}
        {this.state.show && <Navbar personalData leaveData employeeData />}
        {!this.state.show && (
          <form onSubmit={this.submitForm}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
              required
            />
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />
            <br />
            <input type="submit" value="Login" />
          </form>
        )}
      </>
    );
  }
}

export default Home;
