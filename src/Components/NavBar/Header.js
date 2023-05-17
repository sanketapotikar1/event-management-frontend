import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../ContextProvider/Context";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { useNavigate } from "react-router-dom";

const settings = ["Logout"];

function Header() {
  const { logindata, setLoginData } = useContext(LoginContext);

  const [admin, setAdmin] = useState(false);

  console.log(`login data in header`, logindata);


  const [userData, setUserData] = useState(null);

  const Navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const ButtonStyle = {
    my: 2,
    color: "white",
    display: "block",
    fontSize: "16px",
    marginLeft: "15px",
    marginTop: "5px",
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutuser = async () => {
    let token = localStorage.getItem("usersdatatoken");
    console.log(token);

    const res = await fetch("http://localhost:8000/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 201) {
      console.log("use logout");
      localStorage.removeItem("usersdatatoken");
      setLoginData(false);
      setUserData(null);
      Navigate("/");
    } else {
      console.log("error");
    }
  };

  // const ValidUser = async () => {
  //   let token = localStorage.getItem("usersdatatoken");

  //   const res = await fetch("http://localhost:8000/validuser", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: token,
  //     },
  //   });

  //   const data = await res.json();

  //   if (data.status == 401 || !data) {
  //     console.log("user not valid");
  //   } else {
  //     console.log("user verify", data);
  //     setUserData(data);
  //     console.log(`user valid data`, userData);
  //   }
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     ValidUser();
  //   }, 1500);
  // }, []);

  return (
    <>
      <AppBar
        position="standard"
        color="primary"
        style={{ background: "#101820FF", position: "sticky" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Box>
            <AddBusinessIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Event Management
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button onClick={() => Navigate("/")} style={ButtonStyle}>
                Home
              </Button>
              {logindata ? (
                <Button
                  onClick={() => {
                    Navigate("/Events");
                  }}
                  style={ButtonStyle}
                >
                  Events
                </Button>
              ) : null}

              <Button
                onClick={() => {
                  Navigate("/AboutUs");
                }}
                style={ButtonStyle}
              >
                About us
              </Button>
              <Button
                onClick={() => {
                  Navigate("/ContactUs");
                }}
                style={ButtonStyle}
              >
                Contact us
              </Button>
              <Button
                onClick={() => {
                  Navigate("/FAQ");
                }}
                style={ButtonStyle}
              >
                FAQ'S
              </Button>

              <Box
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "20px",
                }}
              >
                {logindata ? (
                  <Button
                    onClick={() => {
                      Navigate("/MyEvent");
                    }}
                    style={ButtonStyle}
                  >
                    My Event
                  </Button>
                ) : null}

                {logindata ? (
                  // logindata.ValidUserOne.role == "Admin" ? (
                  <Button
                    onClick={() => {
                      Navigate("/newEvent");
                    }}
                    style={ButtonStyle}
                  >
                    New Event
                  </Button>
                ) : // ) : null
                null}
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    onClick={() => {
                      logoutuser();
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
