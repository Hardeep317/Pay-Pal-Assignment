import { Box, Button, FormControl, FormLabel, Input, Radio, Stack, Text, useStatStyles } from '@chakra-ui/react'
import React, { useState } from 'react'
import {  RadioGroup } from '@chakra-ui/react'
import "./AddSprint.css"

function AddSprint() {
  const [radioVal, setRadioVal] = useState('hoo');
  const [inputVal, setInputVal] = useState('');

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
        status:false
      }
      setInputVal('')

      return fetch('http://localhost:4000/details', {
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "content-type": "application/json"
        }
      })
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