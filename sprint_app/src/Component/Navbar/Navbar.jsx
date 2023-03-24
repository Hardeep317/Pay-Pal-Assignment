import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {

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
            <Link to="/login"><li style={listStyle}>Login</li></Link>
        </ul></Box>
    </Box>
  )
}

export default Navbar