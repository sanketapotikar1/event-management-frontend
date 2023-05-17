import { Box, Button } from "@mui/material";
import React from "react";
import "./aboutus.css";

function AboutUs() {
  const imageLink =
    "https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWJvdXQlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

  const imageStyle = {
    backgroundImage: `url("Images/aboutus.jpg")`,
    width: "650px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: "1.0",
    height: "450px",
    borderRadius: "5px",
  };

  return (
    <>
      <Box class="container">
        <h1 class="line">About Us</h1>
        <p id="content">
          We are in Event Planning and Organizing Business since 2015 and we belive that Quality Service Is A Top Priority !
        </p>
        <Box class="section">
          <Box style={imageStyle}></Box>
          <Box class="first-section">
            <h3>We Carry Out Events With Style. !!!</h3>
            <p class="first-section-content" style={{fontSize:"16px"}}>
              Event Management is an event Planner and event organizing company
              which was formed back in 2013. The company offers A-Z event
              planning and organizing services from a team of experienced and
              energetic event planners, suppliers, venues and more. One of the
              main reasons behind the success of Event Planner is the fact that
              the team does not charge fees to its clients! With the number of
              events we organise, Event Planner Ltd does not need to add
              exorbitant fees and mark-ups to make its profit margins. This
              ensures that our clients list, which is constantly growing, make
              regular use of our services.
            </p>
            <Button style={{ color: "black", marginTop:"20px" }} type="button">
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
