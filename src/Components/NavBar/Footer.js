import { Box, IconButton } from "@mui/material";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const footerStyle = {
    
    height: "140px",
    background: "#101820FF",
    color: "white",
    margin:"auto",
    // position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",

  };

  const socialBoxStyle = {
    display: "block",
    padding: "2px",
    width: "auto",
    margin: "auto",
  };

  const socialIconStyle = {
    color: "white",
  };

  const iconbtnStyle = {
    marginLeft: "10px",
  };

  const copyrightStyle = {
    margin: "auto",
    color: "white",
    fontSize: "15px",
  };
  return (
    <>
      <Box style={footerStyle}>

        <Box style={{ display: "flex", width: "90%", margin: "auto" }}>
          <Box
            style={{
              display: "grid",
              color: "white",
              listStyleType: "none",
              width: "25%",
            }}
          >
            <Box
              style={{ fontWeight: "bold", fontSize: "15px", marginTop: "5px" }}
            >
              Our Services
            </Box>
            <Box
              style={{ marginTop: "10px", fontSize: "14px", padding: "1px" }}
            >
              <li>About us</li>
              <li>Our Work</li>
              <li>Help Center</li>
              <li>Login</li>
            </Box>
          </Box>

          <Box
            style={{
              display: "grid",
              color: "white",
              listStyleType: "none",
              width: "25%",
            }}
          >
            <Box
              style={{ fontWeight: "bold", fontSize: "15px", marginTop: "5px" }}
            >
              Company
            </Box>
            <Box
              style={{ marginTop: "10px", fontSize: "14px", padding: "1px" }}
            >
              <li>Term of Use</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Event</li>
            </Box>
          </Box>

          <Box
            style={{
              display: "grid",
              color: "white",
              listStyleType: "none",
              width: "25%",
            }}
          >
            <Box
              style={{ fontWeight: "bold", fontSize: "15px", marginTop: "5px" }}
            >
              Resources
            </Box>
            <Box
              style={{ marginTop: "10px", fontSize: "14px", padding: "1px" }}
            >
              <li>Resources Hub</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Learn more</li>
            </Box>
          </Box>


          <Box
           style={{display:"grid", width: "25%",}}
           >

           
          <Box style={socialBoxStyle}>
            <IconButton style={iconbtnStyle}>
              <FacebookIcon style={socialIconStyle} />
            </IconButton>
            <IconButton style={iconbtnStyle}>
              <InstagramIcon style={socialIconStyle} />
            </IconButton>
            <IconButton style={iconbtnStyle}>
              <TwitterIcon style={socialIconStyle} />
            </IconButton>
            <IconButton style={iconbtnStyle}>
              <EmailIcon style={socialIconStyle} />
            </IconButton>
            <IconButton style={iconbtnStyle}>
              <LinkedInIcon style={socialIconStyle} />
            </IconButton>
          </Box>

          <Box style={copyrightStyle}>
          &#169; 2023 Copyright : Zen Management and Team &#8482;
        </Box>
        </Box>


      


        </Box>

      </Box>
    </>
  );
};

export default Footer;
