import React from "react";
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
  const Navigate = useNavigate();

  // const [data, setData] = useState(false);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const ButtonStyle = { my: 2, color: "white", display: "block", fontSize:"16px", marginLeft:"15px", marginTop:"5px" };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
              {/* {data ? ( */}
              <Button
                onClick={() => {
                  Navigate("/Events");
                }}
                style={ButtonStyle}
              >
                Events
              </Button>
              {/* ) : null} */}

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

              <Box style={{marginLeft:"auto", marginRight:"20px"}}>
              <Button
                onClick={() => {
                  Navigate("/newEvent");
                }}
                style={ButtonStyle}
              >
                New Event
              </Button>

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
                      // logoutuser();
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
