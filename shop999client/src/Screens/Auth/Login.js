import React, { useState } from 'react'
import Layout from '../Layouts/Layout'
import "../../Styles/Auth.css"
const Login = () => {

  const [formData,setformData]=useState({
    email:"",
    password:"",
  })
 
  const handleChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})
  }

const handleSubmit=async(e)=>{
  e.preventDefault();
  try {
    const response = await fetch('https://shop999backend.vercel.app/api/v1/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Accept: "application/json",
       },
       body:JSON.stringify(formData),
    }
  );
  const result = await response.json()
  if(response.ok){
    alert("User user successfully");
    window.location.href = "/";

    console.log(result);
}else{
  alert("Invalid user credentials");

  }
    
  } catch (error) {
    
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
