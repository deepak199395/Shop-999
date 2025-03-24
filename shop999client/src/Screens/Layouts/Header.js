import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='MainHederContainer'>
    <h1>Shop@999/-</h1>
    <nav>
      <ul className='linklist'>
        <li className='textlogin'><Link to='/'>Home</Link></li>
        <li className='textlogin'><Link to='/login'>Login</Link></li>
        <li className='textlogin'><Link to='/register'>Register</Link></li>
        <li className='textlogin'><Link to='/register'>Profile</Link></li>

      </ul>
    </nav>
    </div>
  )
}

export default Header
