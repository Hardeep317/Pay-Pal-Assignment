import { Box, Button, FormControl, FormLabel, Input, Radio, Stack, Text, useStatStyles } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {  RadioGroup } from '@chakra-ui/react'
import "./AddSprint.css"

function AddSprint() {
  const [radioVal, setRadioVal] = useState('hoo');
  const [inputVal, setInputVal] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    allUsersfun()
  }, [])

  const setValue = (e) => {
    e.preventDefault();
    setRadioVal(e.target.value)
  }

  const setThought = (e) => {
    e.preventDefault();
    setInputVal(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault(0)
      const data = {
        details:inputVal,
        type:radioVal,
        status:false,
        assignTo
      }
      setInputVal('')

      return fetch('https://paypal-second.onrender.com/addSprint', {
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "content-type": "application/json",
          "Authorization" : JSON.parse(sessionStorage.getItem("userDetails")).token
        }
      })
  }

  function allUsersfun() {
    let email = null
    // console.log(email)
    fetch(`https://paypal-second.onrender.com/allUsers/${email}`, {
      headers: {
        "content-type": "application/json",
        "Authorization": JSON.parse(sessionStorage.getItem("userDetails")).token,
      }
    })
    .then(res => res.json())
    .then(res => {
      setAllUsers(res.data)
      setAssignTo(res.data[0].email)
    }).catch(err => console.log(err))
  }

  return (
    <Box className='mainContainer'>
        <Text className='heading'>Add Your Thoughts</Text>
        <FormControl>
          <FormLabel ml={"300px"} mb={"10px"}>
            Write your thought :
            <br/>
            <Input className='input' width="50%" border={"2px solid black"} focusBorderColor={"crimson"} type="text" onChange={setThought} value={inputVal} placeholder='Enter your bug story or feature'/>
          </FormLabel>
          <select name="assignTo" id="assignTo" onChange={e => setAssignTo(e.target.value)}>
            {
              allUsers.map((user) => {
                return (
                  <option key={user.email} value={user.email}>{user.email}</option>
                )
              }) 

            }
          </select>
          <RadioGroup >
            <Stack direction='row' className='stack'>
              <Radio value='bug' border={"2px solid black"} onChange={setValue}>Bug</Radio>
              <Radio value='story' border={"2px solid black"} onChange={setValue}>Story</Radio>
              <Radio value='sprint' border={"2px solid black"} onChange={setValue}>Sprint</Radio>
            </Stack>
          </RadioGroup>
          <Button onClick={handleClick} backgroundColor={"crimson"} color="white">Submit</Button>
      </FormControl>
    </Box>
  )
}

export default AddSprint