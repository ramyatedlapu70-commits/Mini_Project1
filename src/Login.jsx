import React, { useState } from "react";

function Login({ setPage, setStudent }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedStudent = JSON.parse(localStorage.getItem("student"));
    if (
      savedStudent &&
      form.email === savedStudent.email &&
      form.password === savedStudent.password
    ) {
      setStudent(savedStudent);
      alert("Login Successful!");
      setPage("dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Student Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Enter Password" value={form.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account?{" "}
          <span onClick={() => setPage("signup")}>Signup</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
