import { Box, Button, TextField } from "@mui/material";
import React from "react";

function ContactUs() {
  const formStyle = {
    display: "grid",
    width: "100%",
    marginTop: "25px",
    gap: "25px",
  };

  const imageLink =
  "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

const imageStyle = {
  backgroundImage: `url("Images/contactus.jpg")`,
  width: "650px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  opacity: "1.0",
  height: "450px",
  borderRadius: "2px",
};

  return (
    <>
      <Box class="container">
        <h1 class="line">Contact Us</h1>
        <p id="content" style={{fontSize:"16px"}}>
        Get in Touch with us for All your Query and inquiry.
        </p>
        <Box class="section">
        <Box style={imageStyle}></Box>
          <Box class="first-section">
            <h3>Send us Message !!!</h3>
            <Box style={formStyle}>
              <TextField label="Name" variant="standard" name="name" />

              <TextField label="Email" variant="standard" name="email" />

              <TextField label="Mobile" variant="standard" name="mobile" />
            </Box>

            <Button
              variant="contained"
              style={{ backgroundColor: "black", marginTop: "50px" }}
              type="button"
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ContactUs;
