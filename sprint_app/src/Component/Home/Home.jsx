import {
  Box,
  Button,
  Grid,
  GridItem,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [data, setData] = useState([]);
  const [bugs, setBugs] = useState([]);
  const [story, setStory] = useState([]);
  const [sprint, setSprint] = useState([]);

  let bugsArr = [];
  let sprintArr = [];
  let storyArr = [];
  useEffect(() => {
      getData();
  }, []);
  function getData() {
    let email = JSON.parse(sessionStorage.getItem("userDetails")).data.email
    fetch(`https://paypal-second.onrender.com/details/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Authorization": JSON.parse(sessionStorage.getItem("userDetails")).token,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setData(response.data);
        console.log(response)
        let responseData = response.data;
        bugsArr = responseData.filter((ele) => ele.type === "bug");
        sprintArr = responseData.filter((ele) => ele.type === "sprint");
        storyArr = responseData.filter((ele) => ele.type === "story");
        setBugs(bugsArr);
        setSprint(sprintArr);
        setStory(storyArr);
        console.log(bugs, sprint, story);
      })
      .catch((err) => console.log(err));
    // setAllData(data)
  }

  const editBtn = {
    fontSize: "15px",
    padding: "3px 15px",
    borderRadius: "9px",
    backgroundColor: "aliceblue",
    color: "black",
  };

  const deleteBtn = {
    fontSize: "15px",
    padding: "3px 15px",
    borderRadius: "9px",
    backgroundColor: "aliceblue",
    color: "black",
  };

  function deleteItem(i) {
    fetch(`https://paypal-second.onrender.com/deleteItem/${i}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "Authorization": JSON.parse(sessionStorage.getItem("userDetails")).token,
      },
    })
      .then((response) => {
        getData()
      })
      .catch((err) => console.log(err));
  }

  const toggleStatus = (id, new_status) => {
    fetch(`https://paypal-second.onrender.com/updateItem/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: new_status }),
      headers: {
        "content-type": "application/json",
        "Authorization": JSON.parse(sessionStorage.getItem("userDetails")).token,
      },
    })
      .then((re) =>{ 
        getData()
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box className="container">
      <Box className="bugContainer">
        <h1 className="bugHead">Bug</h1>

        {bugs.length === 0 ? (
          <h1>No data to Show</h1>
        ) : (
          bugs.map((ele, i) => {
            return (
              <Grid
                key={i}
                className="indItem"
                templateColumns="repeat(4, 1fr)"
              >
                <GridItem>
                  <h1>{ele.details}</h1>
                </GridItem>
                <GridItem>
                  <Text>
                    Status : {ele.status ? "Completed" : "Un-Completed"}
                  </Text>
                </GridItem>
                <GridItem>
                  <Button
                    variant="unstyled"
                    style={editBtn}
                    onClick={() => toggleStatus(ele._id, !ele.status)}
                  >
                    Edit
                  </Button>
                </GridItem>
                <GridItem>
                  <Button
                    variant="unstyled"
                    style={deleteBtn}
                    onClick={() => {
                      deleteItem(ele._id);
                    }}
                  >
                    Delete
                  </Button>
                </GridItem>
              </Grid>
            );
          })
        )}
      </Box>
      <Box className="sprintContainer">
        <h1 className="sprintHead">Todo</h1>

        {sprint.length === 0 ? (
          <h1>No data to Show</h1>
        ) : (
          sprint.map((ele, i) => {
            return (
              <Grid
                key={i}
                className="indItem"
                templateColumns="repeat(4, 1fr)"
              >
                <GridItem>
                  <h1>{ele.details}</h1>
                </GridItem>
                <GridItem>
                  <Text>
                    Status : {ele.status ? "Completed" : "Un-Completed"}
                  </Text>
                </GridItem>
                <GridItem>
                  <Button
                    variant="unstyled"
                    style={editBtn}
                    onClick={() => toggleStatus(ele._id, !ele.status)}
                  >
                    Edit
                  </Button>
                </GridItem>
                <GridItem>
                  <Button
                    variant="unstyled"
                    style={deleteBtn}
                    onClick={() => {
                      deleteItem(ele._id);
                    }}
                  >
                    Delete
                  </Button>
                </GridItem>
              </Grid>
            );
          })
        )}
      </Box>
      <Box className="storyContainer">
        <h1 className="storyHead">Story</h1>
        {story.length === 0 ? (
          <h1>No data to Show</h1>
        ) : (
          story.map((ele, i) => {
            return (
              <Grid
                key={i}
                className="indItem"
                templateColumns="repeat(4, 1fr)"
              >
                <GridItem>
                  <h1>{ele.details}</h1>
                </GridItem>
                <GridItem>
                  <Text>
                    Status : {ele.status ? "Completed" : "Un-Completed"}
                  </Text>
                </GridItem>
                <GridItem>
                  <Button
                    variant="unstyled"
                    style={editBtn}
                    onClick={() => toggleStatus(ele._id, !ele.status)}
                  >
                    Edit
                  </Button>
                </GridItem>
                <GridItem>
                  <Button
                    variant="unstyled"
                    style={deleteBtn}
                    onClick={() => {
                      deleteItem(ele._id);
                    }}
                  >
                    Delete
                  </Button>
                </GridItem>
              </Grid>
            );
          })
        )}
      </Box>
    </Box>
  );
}

export default Home;
