import React, { useState } from "react";

function Signup({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    course: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { ...form };
    localStorage.setItem("student", JSON.stringify(newStudent)); // save to localStorage
    alert("Signup Successful!");
    setForm({ name: "", roll: "", course: "", email: "", password: "" });
    setPage("login");
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Student Signup</h1>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Enter Name" value={form.name} onChange={handleChange} required />
          <input name="roll" placeholder="Enter Roll Number" value={form.roll} onChange={handleChange} required />
          <input name="course" placeholder="Enter Course" value={form.course} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Enter Password" value={form.password} onChange={handleChange} required />
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account?{" "}
          <span onClick={() => setPage("login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
