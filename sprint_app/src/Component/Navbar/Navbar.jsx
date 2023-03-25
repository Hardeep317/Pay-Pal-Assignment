import { Box } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthContext';
import "./Navbar.css";

function Navbar({userDetails, setUserDetails}) {

  const navigate = useNavigate()
  const {toggleContext} = useContext(AuthContext)

  useEffect(() => {
    console.log(JSON.parse(sessionStorage.getItem("userDetails")))
    setUserDetails(JSON.parse(sessionStorage.getItem("userDetails")))
  }, [])

  function logoutUser() {
    toggleContext(false)
    sessionStorage.removeItem("userDetails")
    setUserDetails(null)
    navigate("/login")
  }

  const listStyle = {
    listStyle:"none",
    padding:"7px 20px",
    cursor:"pointer"
  }

  return (
    <Box className='header'>
        <Box className='appName'>Sprint App</Box>
        <Box className='navItems'><ul>
            <Link style={listStyle} to="/"><li>Home</li></Link>
            <Link style={listStyle} to="/add-sprint"><li>Add Sprint</li></Link>
            {
              userDetails ? 
              <li onClick={logoutUser} style={listStyle}>Logout</li>
              :
              <Link to="/login" ><li style={listStyle}>Login</li></Link>
            }
        </ul></Box>
    </Box>
  )
}

export default Navbar