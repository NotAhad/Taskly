import React from "react";
import Header from "../other/Header";
import Tasks from "../TaskList/Tasks";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-5 h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <Tasks data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
