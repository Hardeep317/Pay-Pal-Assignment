import { Box, Button, FormControl, FormLabel, Image, Input, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react';

export default function Login() {

  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getUsers();
  },[])

  const getUsers = () => {
    return fetch(`http://localhost:4000/users`)
     .then((res) => res.json())
     .then((res) => setData(res))
  }

  console.log(data)

  const styles = {
    padding:"15px"
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePass = (e) => {
    setPassword(e.target.value);
  }

  let checkUser = [];
  const handleLogin = () => {
     checkUser = data.filter(user => user.email === email && user.password === password);
  }
  const toast = useToast();
  return (
      <Box  width={["98%","70%","70%","50%","25%"]} m="8% auto">
    <Box border="1px solid #ccc" borderRadius="8px">
      <Box style={styles} >
        <Image width="200px" m="auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYy2sjbm-UAJMYsm3GLki3TTE_qyr489O02Q&usqp=CAU'/>
        <Text fontSize="25px">Login Here</Text>
        <FormControl>
            <FormLabel>
              Email:
              <Input type="email" onChange={handleEmail}/>
            </FormLabel>
            <FormLabel>
              Password:
              <Input type="password" onChange={handlePass}/>
            </FormLabel>
            <Button mt="15px" onClick={handleLogin}>Submit</Button>
        </FormControl>
      {
        checkUser.length === 0 ?  toast({
          title: 'Incorrect Credentials',
          description: "Incorrect Email or Password.",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        :  toast({
          title: 'Successfully Logged In',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      }
        <Text textAlign="left"><Link to="/signup">Create Account</Link> </Text>
      </Box>
    </Box>
      <Box textAlign="right" margin="-90px auto opx">
          <Stack  direction="row" >
            <Text>Help</Text>
            <Text>Privacy</Text>
            <Text>Terms</Text>
          </Stack>
      </Box>
    </Box>
  )
}
