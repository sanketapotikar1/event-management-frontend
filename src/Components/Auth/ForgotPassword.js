import React, { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function ForgotPassword() {
  const { id, token } = useParams();

  const Navigate = useNavigate();

  const [data2, setData] = useState(false);

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const userValid = async () => {
    const res = await fetch(`https://event-management-backend-phiv.onrender.com//forgotpassword/${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.status === 201) {
      console.log("user valid");
    } else {
      Navigate("*");
    }
  };

  const setval = (e) => {
    setPassword(e.target.value);
  };

  const sendpassword = async (e) => {
    e.preventDefault();

    if (password === "") {
      alert("password is required!");
    } else if (password.length < 6) {
      alert("password must be 6 char!");
    } else {
      const res = await fetch(`https://event-management-backend-phiv.onrender.com/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setPassword("");
        setMessage(true);
        Navigate("/login")
      } else {
        alert("! Token Expired generate new LInk");
      }
    }
  };

  useEffect(() => {
    userValid();
    setTimeout(() => {
      setData(true);
    }, 3000);
  },[]);

  const myStyle = {
    backgroundImage: "url(./Images/Home/HomeImage-1.jpg)",
    height: "100vh",
    margin: "0px, auto",
    width: "98.7%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: "0.8",
  };


  return (
    <>
      {data2 ? (
        <>
          <section style={myStyle}>
            <div className="form_data">
              <div className="form_heading">
                <h1>Enter Your NEW Password</h1>
              </div>

              <form>
                {message ? (
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Password Successfully Update{" "}
                  </p>
                ) : (
                  ""
                )}
                <div className="form_input">
                  <label htmlFor="password">New password</label>
                  <div className="two">
                  <input
                    type="password"
                    value={password}
                    onChange={setval}
                    name="password"
                    id="password"
                    placeholder="Enter Your new password"
                  /></div>
                </div>

                <button className="btn" onClick={sendpassword}>
                  Send
                </button>
              </form>
              <p>
                <NavLink to="/">Home</NavLink>
              </p>
            </div>
          </section>
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
    </>
  );
}

export default ForgotPassword;
