import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        if (userData.role === "admin") {
          setUsername("ADMIN");
        } else if (userData.role === "employee" && userData.data?.firstName) {
          setUsername(userData.data.firstName);
        }
      } catch (error) {
        console.error("Error parsing loggedInUser", error);
      }
    }
  }, []);

  const logOutUser = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("loggedInUser");
      props.changeUser(null);
    }
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium line-clamp-1">{username}'S DASHBOARD</h1>
      <button
        onClick={logOutUser}
        className="bg-indigo-900 text-nowrap hover:bg-indigo-950 font-bold px-5 py-2 rounded-lg"
      >
        LOG OUT
      </button>
    </div>
  );
};

export default Header;
