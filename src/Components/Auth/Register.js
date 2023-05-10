import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {

  const Navigate = useNavigate();
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

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

  const addUserdata = async (e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = inpval;
    if (email === "") {
      alert("email is required!");
    } else if (!email.includes("@")) {
      alert("includes @ in your email!");
    } else if (password === "") {
      alert("password is required!");
    } else if (password.length < 6) {
      alert("password must be 6 char!");
    } else {
      console.log("user registration succesfully done");

      const data = await fetch("http://localhost:8000/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          password,
          cpassword,
        }),
      });

      const res = await data.json();
      console.log(res);

      if (res.status === 201) {
        alert("Registration Successfully done 😃!");
        setInpval({
          ...inpval,
          fname: "",
          email: "",
          password: "",
          cpassword: "",
         
        });
        Navigate("/login");
      }
      else{
        alert("error while Registration  😌!");
      }
    }

  };

  const myStyle = {
    backgroundImage: "url(./Images/camera.jpg)",
    height: "110vh",
    margin: "0px, auto",
    width: "98.7%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: "0.8",
  };

  return (
    <>
      <section style={myStyle}>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be using our Event Management Portal <br />
              We hope that you will like it.
            </p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <div className="two">
                <input
                  type="text"
                  onChange={setVal}
                  value={inpval.fname}
                  name="fname"
                  id="fname"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <div className="two">
                <input
                  type="email"
                  onChange={setVal}
                  value={inpval.email}
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
                  value={inpval.password}
                  onChange={setVal}
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

            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input
                  type={!cpassShow ? "password" : "text"}
                  value={inpval.cpassword}
                  onChange={setVal}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm password"
                />
                <div
                  className="showpass"
                  onClick={() => setCPassShow(!cpassShow)}
                >
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn" onClick={addUserdata}>
              Sign Up
            </button>
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
