import { Box, Button, FormControl, FormLabel, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {

  const initialData = {
    name:"",
    email:"",
    password:""
  }

  const navigate = useNavigate();

  const [user, setUser] = useState(initialData)

  const handleChange = (e) => {
    e.preventDefault();
    let {name, value} = e.target;
    let temp = value;
    setUser({...user,[name]:temp})
  }

  const handleLogin = () => {
    fetch(`https://paypal-second.onrender.com/register`,{
      method:"POST",
      body: JSON.stringify(user),
      headers:{
        "content-type": "application/json"
      }
    }).then(res => res.json())
    .then((res) => {
      // console.log(res)
      if(res.responseStatus === "SUCCESS") {
        navigate("/login")
      }
      setUser(initialData)
    }).catch(err => console.log(err))
  }

  return (

    <Box width={["98%","70%","70%","50%","25%"]} margin="auto">
      <Box style={{padding:"15px"}} >
        <Image width="200px" m="auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYy2sjbm-UAJMYsm3GLki3TTE_qyr489O02Q&usqp=CAU'/>
        <Text fontSize="25px">Login Here</Text>
        <FormControl>
            <FormLabel>
              Name:
              <Input type="text" name="name" onChange={handleChange} value={user.name}/>
            </FormLabel>
            <FormLabel>
              Email:
              <Input type="email" name='email' onChange={handleChange} value={user.email}/>
            </FormLabel>
            <FormLabel>
              Password:
              <Input type="password" name='password' onChange={handleChange} value={user.password}/>
            </FormLabel>
            <Button mt="15px" onClick={handleLogin}>Submit</Button>
        </FormControl>
      </Box>
    </Box>
  )
}
