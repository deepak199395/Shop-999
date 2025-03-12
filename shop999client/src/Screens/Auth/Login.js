import React from 'react'
import Layout from '../Layouts/Layout'
import "../../Styles/Auth.css"
const Login = () => {
  return (
    <Layout>
      <div className="login-container">
        <div className="login-box">
          <h2>Log In</h2>
          <form>
            <div className="input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="login-btn">Login</button>

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
