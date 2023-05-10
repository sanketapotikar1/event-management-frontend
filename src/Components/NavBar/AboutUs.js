import { Box, Button } from "@mui/material";
import React from "react";
import "./aboutus.css";

function AboutUs() {
  const imageLink ="https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWJvdXQlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

  const imageStyle = {
    backgroundImage: `url(${imageLink})`,
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
          We are in Renting business since 2015 and we belive that Rent Anything
          From Anyone
        </p>
        <Box class="section">
          <Box style={imageStyle}></Box>
          <Box class="first-section">
            <h3>Rent what you like !!!</h3>
            <p class="first-section-content">
              Equipment Rental has established itself as one of the leading
              full-service film equipment rental stores in India. From their
              homepage, it is immediately noticeable that they offer a great
              range of equipment with a mix of new and popular products. Thanks
              to categorization, customers can find camera gear, lenses, and
              accessories in a few clicks.
            </p>
            <Button style={{ color: "black" }} type="button">
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
