import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Auth.css";
import { Box } from "@mui/material";

import { LoginContext } from "../ContextProvider/Context";

function Login() {
  const { logindata, setLoginData } = useContext(LoginContext);

  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const loginuser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      alert("email is required!");
    } else if (!email.includes("@")) {
      alert("includes @ in your email!");
    } else if (password === "") {
      alert("password is required!");
    } else if (password.length < 6) {
      alert("password must be 6 char!");
    } else {

      const data = await fetch("https://event-management-backend-phiv.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const res = await data.json();
      console.log(res);

      if (res.status === 201) {
        alert("Login Successfully done 😃!");
        localStorage.setItem("usersdatatoken", res.result.token);
        console.log(`login user data`, res.result.userValid.role);
        // setLoginData(res.result );
        Navigate("/events");
        setInpval({ ...inpval, email: "", password: "" });
      } else {
        alert("Please Provide correct details !!!");
      }
    }
  };

  const myStyle = {
    backgroundImage: "url(./Images/Home/HomeImage-1.jpg)",
    height: "100vh",
    margin: "0px, auto",
    width: "98.7%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: "0.8",
    display: "flex",
  };

  return (
    <>
      <Box style={myStyle}>
        <Box
          style={{
            width: "30%",
            marginTop: "150px",
            textAlign: "end",
            padding: "50px",
          }}
        >
          <div
            style={{
              height: "100px",
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: "22px",
            }}
          >
            Login By Student
            <div
              style={{ height: "50px", marginTop: "30px", fontSize: "18px" }}
            >
              Email : Student@gmail.com
            </div>
            <div style={{ height: "50px", fontSize: "18px" }}>
              Password : Student@123
            </div>
          </div>
        </Box>
        <Box style={{ width: "40%" }}>
          <section>
            <div className="form_data">
              <div className="form_heading">
                <h1>Welcome Back, Log In</h1>
                <p>Hi, we are you glad you are back. Please login.</p>
              </div>

              <form>
                <div className="form_input">
                  <label htmlFor="email">Email</label>
                  <div className="two">
                    <input
                      type="email"
                      value={inpval.email}
                      onChange={setVal}
                      name="email"
                      id="email"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                </div>
                <div className="form_input">
                  <label htmlFor="password">Password</label>
                  <div className="two">
                    <input
                      type={!passShow ? "password" : "text"}
                      onChange={setVal}
                      value={inpval.password}
                      name="password"
                      id="password"
                      placeholder="Enter Your password"
                    />
                    <div
                      className="showpass"
                      onClick={() => setPassShow(!passShow)}
                    >
                      {!passShow ? "Show" : "Hide"}
                    </div>
                  </div>
                </div>

                <button className="btn" onClick={loginuser}>
                  Login
                </button>
                <p>
                  Don't have an Account? <Link to="/register">Sign Up</Link>{" "}
                </p>
                <p style={{ color: "black", fontWeight: "bold" }}>
                  Forgot Password{" "}
                  <NavLink to="/password-reset">Click Here</NavLink>
                </p>
              </form>
            </div>
          </section>
        </Box>
        <Box
          style={{
            width: "30%",
            marginTop: "150px",
            textAlign: "start",
            padding: "50px",
            fontSize: "22px",
          }}
        >
          <div
            style={{
              height: "100px",
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            Login By Admin
            <div
              style={{ height: "50px", marginTop: "30px", fontSize: "18px" }}
            >
              Email : Admin@gmail.com
            </div>
            <div style={{ height: "50px", fontSize: "18px" }}>
              Password : Admin@123
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Login;
