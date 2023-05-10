import * as React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Home() {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "500px",
    width: "100%",
  };
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1561489401-fc2876ced162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1638132704795-6bb223151bf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },

    {
      url: "https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const fullStyle = {
    // backgroundImage: `url("https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
    backgroundColor: "#ece8e8",
    height: "100vh",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: "1.0",
    color: "black",
    marginTop: "-50px",
    display: "flex",
  };

  const leftblockStyle = {
    margin: "auto",
    width: "50%",
    border: "2px solid black ",
    marginLeft:"25px"
  };

  const rightblockStyle = {
    marginTop: "70px",
    fontSize: "40px",
    width: "50%",
    fontFamily: "Alegreya', serif",
    color: "black",
    textShadow: "3px 2px 4px grey",
  };
  const studentLink =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

  const studentStyle = {
    margin: "auto",
    marginTop: "25px",
    fontSize: "18px",
    height: "250px",
    width: "70%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: "1.0",
    backgroundImage: `url(${studentLink})`,
    border: "2px solid black ",
  };

  const Navigate = useNavigate();

  const ButtonStyle = {
    background: "#101820FF",
    color: "white",
    padding: "12px 45px",
    margin: "20px 30px 15px 30px",
  };

  return (
    <>
      <Box style={fullStyle}>
        <Box style={leftblockStyle}>
          <div className="slide-container">
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                  ></div>
                </div>
              ))}
            </Slide>
          </div>
        </Box>
        <Box style={rightblockStyle}>
          <Box>Welcome to Zen</Box>
          <Box style={{ marginTop: "25px", fontSize: "35px",    textShadow: "2px 2px 5px grey",
 }}>
            Event Management Portal
          </Box>

          <Box
            style={{
              marginTop: "50px",
              fontSize: "18px",
              textShadow: "0px 0px grey",
            }}
          >
            We are managing portal for student Events
          </Box>
          <Box style={studentStyle}></Box>
          <Box
            style={{
              marginTop: "25px",
              fontSize: "18px",
              textShadow: "0px 0px grey",
            }}
          >
            If you are Visiting our site for first time the please Sign Up for
            free !!!
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
      </Box>
    </>
  );
}

export default Home;
