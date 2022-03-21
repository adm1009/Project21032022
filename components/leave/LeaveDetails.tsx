import React from 'react'
import Navbar from '../Navbar';
import {Link} from "react-router-dom";
import { Navigate} from "react-router-dom";
type props = {
  
}
class LeaveDetails extends React.Component<props,props> {
  constructor(props:props){
    super(props);
    
    this.state = {
     
    }
  }
  render(){
   
  return (
    <div>
        <Navbar personalData leaveData employeeData/>
        <Link to="myregularize"><button>My Regularizartion</button></Link>
        <Link to="applyregularize"><button>Apply for Regularization</button></Link>
    </div>
  )
}
}
export default LeaveDetails;
