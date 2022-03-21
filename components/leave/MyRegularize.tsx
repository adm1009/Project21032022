import React from "react";
import Navbar from "../Navbar";
import { Navigate} from "react-router-dom";
type props = {
 
}
class MyRegularize extends React.Component<props,props>{
  constructor(props:props){
    super(props);
  
    this.state = {
    
    }
  }
  data = localStorage.getItem("regularizedetails");
  render(){
    
  if (!this.data)
    {return (
      <div>
        <Navbar personalData leaveData employeeData/>
        <span style={{ textDecoration: "underline" }}>My Regularization</span>
        <hr />
        <span style={{ color: "green" }}>Nothing in Regularizartion</span>
      </div>
    );
    } 
  return (
    <>
      <Navbar personalData leaveData employeeData/>
      <span style={{ textDecoration: "underline" }}>My Regularization</span>
      <hr />
      <span>{this.data}</span>
    </>
  );
};
}
export default MyRegularize;
