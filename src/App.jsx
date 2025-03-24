import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Pages/Login";
import EmployeeDashboard from "./components/Pages/EmployeeDashboard";
import AdminDashboard from "./components/Pages/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [authData, setAuthData] = useState(null);
  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setAuthData(loggedInUser);
    }
  }, []);

  const handleLogin = (email, password) => {
    const admin = JSON.parse(localStorage.getItem("admin"));

    if (admin && admin[0].email === email && admin[0].password === password) {
      const adminUser = { role: "admin" };
      setAuthData(adminUser);
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
      return;
    }

    const employee = userData?.find((e) => e.email === email && e.password === password);
    if (employee) {
      const employeeUser = { role: "employee", data: employee };
      setAuthData(employeeUser);
      localStorage.setItem("loggedInUser", JSON.stringify(employeeUser));
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setAuthData(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      {!authData ? (
        <Login handleLogin={handleLogin} />
      ) : authData.role === "admin" ? (
        <AdminDashboard changeUser={handleLogout} />
      ) : (
        <EmployeeDashboard changeUser={handleLogout} data={authData.data} />
      )}
    </>
  );
};

export default App;
