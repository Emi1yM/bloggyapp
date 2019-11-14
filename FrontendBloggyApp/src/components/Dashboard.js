import React from "react";
import Header from "./post/Header";
import Main from "./post/Main";


const Dashboard = props => {
  return (
    <div>
      <div>
        {/* <h1>Dashboard</h1> */}
        {/* <h1>Status: {props.loggedInStatus}</h1> */}
       
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;