import React, { useState } from 'react'
import Layout from '../Layouts/Layout'
import "../../Styles/Auth.css"
const Login = () => {

  const [formData, setformData] = useState({
    email: "",
    password: "",
  })
  const [loading,setLoading]=useState(false)

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://shop999backend.vercel.app/api/v1/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        const user = result.user || (result.users ? result.users.find(user => user.email === formData.email) : null);
        if (user) {
          if (user.role === "user") {
            alert("Login successful! Redirecting to home...");
            window.location.href = "/";

          } else {
            window.location.href = "/admin";

          }
        } else {
          alert("Invalid credentials. Please try again.");

        }
      } else {
        alert(result.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again later.");
    }finally{
      setLoading(false)
    }
  }

    return (
      <Layout>
        <div className="login-container">
          <div className="login-box">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}

                  placeholder="Email" required />
              </div>
              <div className="input-group">
                <input type="password"
                  name='password'
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}

                  required />
              </div>
              <button type="submit" className="login-btn"   disabled={loading}>
                
                { loading?"Logging in...":"Login"}</button>

            </form>
            <p className="register-link">
              Don't have an account? <a href="/register">Sign Up</a>
            </p>
          </div>
        </div>
      </Layout>
    )
  }

  export default Login
