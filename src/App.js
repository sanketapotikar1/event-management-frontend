import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import Header from "./Components/NavBar/Header";
import Footer from "./Components/NavBar/Footer";

import FAQ from "./Components/NavBar/FAQ";
import AboutUs from "./Components/NavBar/AboutUs";
import ContactUs from "./Components/NavBar/ContactUs";

import Events from "./Components/Event/Events";
import NewEvent from "./Components/Event/NewEvent";
import EventDetails from "./Components/Event/EventDetails";
import StudentRegistration from "./Components/Event/StudentRegistration";
import MyEvent from "./Components/Event/MyEvent/MyEvent";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import PasswordReset from "./Components/Auth/PasswordReset";

import Error from "./Components/Error";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "./Components/ContextProvider/Context";
import { Box, CircularProgress } from "@mui/material";

function App() {
  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);

  const ValidUser = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("https://event-management-backend-phiv.onrender.com/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify", data);
      setLoginData(data);
      // Navigate("/products");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      ValidUser();
      setData(true);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {data ? (
        <>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route
              path="/forgotpassword/:id/:token"
              element={<ForgotPassword />}
            />

            <Route path="/" element={<Home />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />

            <Route path="/Events" element={<Events />} />
            <Route path="/newEvent" element={<NewEvent />} />
            <Route path="/EventDetails/:id" element={<EventDetails />} />
            <Route
              path="/StudentRegistration/:id"
              element={<StudentRegistration />}
            />
            <Route path="/MyEvent" element={<MyEvent />} />

            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default App;
