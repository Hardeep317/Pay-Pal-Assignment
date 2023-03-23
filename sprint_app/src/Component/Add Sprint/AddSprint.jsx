import { Box, Input, Radio } from '@chakra-ui/react'
import React from 'react'

function AddSprint() {
  return (
    <Box>
        <Input type="text" placeholder='Enter your sprint'/>
        <Radio value="Bug"/>
    </Box>
  )
}

export default AddSprint