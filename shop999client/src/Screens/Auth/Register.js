import React, { useState } from "react";
import Layout from "../Layouts/Layout";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://shop999backend.vercel.app/back-end/rest-API/Secure/api/v1/auth/Create-User/api1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert("User created successfully");
        console.log(result);
        if(response.status===201){
          window.location.href = "/login";
        }
        // Reset the form after successful registration
        setFormData({
          name: "",
          lastname: "",
          email: "",
          password: "",
          phone: "",
        });

      } else {
        alert(result.error || "Registration Failed!");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="login-container">
        <div className="login-box">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Register
            </button>
          </form>
          <p className="register-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
