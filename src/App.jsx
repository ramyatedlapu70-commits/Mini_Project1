import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [page, setPage] = useState("signup");
  const [student, setStudent] = useState(null);

  // Auto-load session from localStorage
  useEffect(() => {
    const savedStudent = JSON.parse(localStorage.getItem("student"));
    if (savedStudent) {
      setStudent(savedStudent);
      setPage("dashboard");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("student");
    setStudent(null);
    setPage("login");
  };

  if (page === "signup") {
    return <Signup setPage={setPage} />;
  }

  if (page === "login") {
    return <Login setPage={setPage} setStudent={setStudent} />;
  }

  return <Dashboard student={student} logout={logout} />;
}

export default App;
