import * as React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Home() {
  
  const divStyle = {
    display: "flex",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    backgroundSize: "100% 100%",
    opacity: "0.8",
  };
  const slideImages = [
    {
      url: "Images/Home/HomeImage-1.jpg",
    },
    {
      url: "Images/Home/HomeImage-2.jpg",
    },
    {
      url: "Images/Home/HomeImage-3.jpg",
    },
    {
      url: "Images/Home/HomeImage-4.jpg",
    },
    {
      url: "Images/Home/HomeImage-5.jpg",
    },
    {
      url: "Images/Home/HomeImage-6.jpg",
    },
    {
      url: "Images/Home/HomeImage-7.jpg",
    },
    {
      url: "Images/Home/HomeImage-8.jpg",
    },
    {
      url: "Images/Home/HomeImage-9.jpg",
    },
  ];

  const ContentblockStyle = {
    marginTop: "70px",
    fontSize: "90px",
    width: "100%",
    fontFamily: "'Josefin Sans', sans-serif",
    color: "black",
    textShadow: "4px 3px 6px grey",
    opacity: "1.0",
    position:"absolute",
    top:"10px"
  };

  const Navigate = useNavigate();

  const ButtonStyle = {
    background: "#101820FF",
    color: "white",
    height: "55px",
    width: "250px",
    padding: "14px 35px",
    margin: "70px 60px 30px 60px",
    marginTop: "70px",
    opacity: "1.0",
  };

  return (
    <>
      <Box

      >
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  
                </div>
              </div>
            ))}
          </Slide>

          <Box style={ContentblockStyle}>
                    <Box>Welcome to Zen</Box>
                    <Box
                      style={{
                        marginTop: "25px",
                        fontSize: "45px",
                        textShadow: "2px 2px 5px grey",
                        opacity: "1.0",
                      }}
                    >
                      Event Management Portal
                    </Box>
                    <Box
                      style={{
                        marginTop: "20px",
                        fontSize: "22px",
                        textShadow: "0px 0px grey",
                        color: "black",
                        opacity: "1.0",
                      }}
                    >
                      We are managing portal for student Events
                    </Box>


                    <Box>
                      <Button
                        variant="contained"
                        size="large"
                        style={ButtonStyle}
                        onClick={() => Navigate("/login")}
                      >
                        Login
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        style={ButtonStyle}
                        onClick={() => Navigate("/register")}
                      >
                        Sign-up
                      </Button>
                    </Box>
                  </Box>
        </div>
      </Box>
    </>
  );
}

export default Home;
