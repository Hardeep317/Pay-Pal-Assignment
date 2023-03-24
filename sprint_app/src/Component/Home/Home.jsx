import { Box, Button, Grid, GridItem, Spacer, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./Home.css"

function Home() {
  const [data, setData] = useState([]);
  // const [bugs, setBugs] = useState([]);
  // const [story, setStory] = useState([]);
  // const [sprint, setSprint] = useState([]);
  
  useEffect(() => {
    getData();
  },[])
  
  function getData() {
     fetch('http://localhost:4000/details')
    .then((res) => res.json())
    .then((response) => setData(response))
      // setAllData(data)
  }
  // function setAllData(data){
  //   console.log(data);
  //   filterStory(data)
  //   filterSprint(data)
  //   filterBugs(data)
  // }


  // const filterStory = (data) => {
  //   setStory(data.filter(ele => ele.type === 'story'));
  // }

  // const filterBugs = (data) => {
  //   setBugs(data.filter(ele => ele.type === 'bug'));
  // }

  // const filterSprint = (data) => {
  //   setSprint(data.filter(ele => ele.type === 'sprint'));
  // }

  const editBtn = {
    fontSize: "15px",
    padding: "3px 15px",
    borderRadius: "9px",
    backgroundColor: "aliceblue",
    color: "black"
  }

  const deleteBtn = {
    fontSize: "15px",
    padding: "3px 15px",
    borderRadius: "9px",
    backgroundColor: "aliceblue",
    color: "black"
  }

  const bugs = data.filter(ele => ele.type === 'bug');
  const sprint = data.filter(ele => ele.type === 'sprint');
  const story = data.filter(ele => ele.type === 'story');


  const deleteItem = (i) => {
    fetch(`http://localhost:4000/details/${i}`,{
      method: 'DELETE',
    })
    .then(() => getData())
  }

  const toggleStatus = (id, new_status) => {
    return fetch(`http://localhost:4000/details/${id}`,{
      method:"PATCH",
      body: JSON.stringify({status:new_status}),
      headers:{
        "content-type": "application/json"
      }
    })
    .then((res) => res.json())
    .then(() => getData())
  }
  
  return (
    <Box className="container">
        <Box className='bugContainer'>
            <h1 className='bugHead'>Bug</h1>
            
            {
              bugs.length === 0 ? <h1>No data to Show</h1> : bugs.map((ele,i) => {
                return <Grid className='indItem' templateColumns='repeat(4, 1fr)'>
                    <GridItem>
                      <h1 key={i}>{ele.details}</h1>
                    </GridItem>
                    <GridItem>
                      <Text>Status : {ele.status ? "Completed" : "Un-Completed"}</Text>
                    </GridItem>
                    <GridItem>
                      <Button variant="unstyled" style={editBtn} onClick={() => toggleStatus(ele.id, !ele.status)}>Edit</Button>
                    </GridItem>
                    <GridItem>
                      <Button variant="unstyled" style={deleteBtn} onClick={() => {deleteItem(ele.id)}}>Delete</Button>
                    </GridItem>
                  </Grid>
              })
            }
        </Box>
        <Box className="sprintContainer">
            <h1  className='sprintHead'>Todo</h1>

            {
              sprint.length === 0 ? <h1>No data to Show</h1> : sprint.map((ele,i) => {
                return <Grid className='indItem' templateColumns='repeat(4, 1fr)'>
                    <GridItem>
                      <h1 key={i}>{ele.details}</h1>
                    </GridItem>
                    <GridItem>
                      <Text>Status : {ele.status ? "Completed" : "Un-Completed"}</Text>
                    </GridItem>
                    <GridItem>
                      <Button variant="unstyled" style={editBtn} onClick={() => toggleStatus(ele.id, !ele.status)}>Edit</Button>
                    </GridItem>
                    <GridItem>
                      <Button variant="unstyled" style={deleteBtn} onClick={() => {deleteItem(ele.id)}} >Delete</Button>
                    </GridItem>
                  </Grid>
              })
            }
        </Box>
        <Box className="storyContainer">
            <h1  className='storyHead'>Story</h1>
            {
              story.length === 0 ? <h1>No data to Show</h1> : story.map((ele,i) => {
                return <Grid className='indItem' templateColumns='repeat(4, 1fr)'>
                    <GridItem>
                      <h1 key={i}>{ele.details}</h1>
                    </GridItem>
                    <GridItem>
                      <Text>Status : {ele.status ? "Completed" : "Un-Completed"}</Text>
                    </GridItem>
                    <GridItem>
                      <Button variant="unstyled" style={editBtn} onClick={() => toggleStatus(ele.id, !ele.status)}>Edit</Button>
                    </GridItem>
                    <GridItem>
                      <Button variant="unstyled" style={deleteBtn} onClick={() => {deleteItem(ele.id)}}>Delete</Button>
                    </GridItem>
                  </Grid>
              })
            }
        </Box>
    </Box>
  )
}

export default Home