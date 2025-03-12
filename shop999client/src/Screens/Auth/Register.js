import React from 'react'
import Layout from '../Layouts/Layout'
const Register = () => {
  return (
    <Layout>
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <form>
          <div className="input-group">
            <input type="name" placeholder="First Name" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email id" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <button type="submit" className="login-btn">Register</button>

        </form>
        <p className="register-link">
          Already have account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  </Layout>
  )
}

export default Register
