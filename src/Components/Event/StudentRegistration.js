import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function StudentRegistration() {
  let { id } = useParams();

  const Navigate = useNavigate();

  const [UserData, setUserData] = useState(false);

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
      console.log("user verified", data);

      setUserData(data);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      ValidUser();
    }, 1500);
  }, []);

  const StudentRegister = (StudentData) => {
    console.log(`register method triggred`);
    console.log(id);

    fetch(`https://event-management-backend-phiv.onrender.com/eventRegister/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(StudentData),
    })
        Navigate("/Events");
      console.log(`Register has been completed.`);
 
  };

  const formvalidationSchema = yup.object({
    name: yup
      .string()
      .required("Please enter the your name")
      .min(3, " Please give bigger name"),
    email: yup
      .string()
      .min(8, "email is too short")
      .max(25, "too long")
      .required("Required"),
    mobile: yup
      .string()
      .required("Please enter your mobile number")
      .min(10, "Please enter 10 digit phone number")
      .max(10, "Please enter 10 digit phone number"),
    city: yup
      .string()
      .required("Please enter your address")
      .min(3, "please enter your address in more detail")
      .max(50, "please keep your address short"),
    address: yup
      .string()
      .required("Please enter your address")
      .min(3, "please enter your address in more detail"),
    // .max(50, "please keep your address short"),
    yourselfInfo: yup
      .string()
      .required("please enter about yourself")
      .min(10, "please enter your decription in more detail"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        mobile: "",
        city: "",
        address: "",
        yourselfInfo: "",
      },
      validationSchema: formvalidationSchema,

      onSubmit: (StudentData) => {
        // User ID
        // console.log(UserData.ValidUserOne._id);

        StudentData.UserID = UserData.ValidUserOne._id;

        console.log(StudentData);

        StudentRegister(StudentData);
      },
    });

  return (
    <>
      <Box>
        <Box style={{ display: "block" }}>
          <h2
            style={{
              marginLeft: "150px",
              textAlign: "left",
              marginRight: "120px",
              padding: "20px",
            }}
          >
            Student Registration Details
          </h2>

          <Box>
            <form
              style={{ marginTop: "-30px" }}
              onSubmit={handleSubmit}
              className="Add-data-form"
            >
              <TextField
                label="Your Name"
                variant="filled"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name && errors.name ? errors.name : ""}
                error={touched.name && errors.name ? true : false}
              />

              <TextField
                label="Email address"
                variant="filled"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email ? errors.email : ""}
                error={touched.email && errors.email ? true : false}
              />

              <TextField
                label="Mobile Number"
                variant="filled"
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.mobile && errors.mobile ? errors.mobile : ""
                }
                error={touched.mobile && errors.mobile ? true : false}
              />

              <TextField
                label="Town/City"
                variant="filled"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.city && errors.city ? errors.city : ""}
                error={touched.city && errors.city ? true : false}
              />

              <TextField
                label="Your Address"
                variant="filled"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.address && errors.address ? errors.address : ""
                }
                error={touched.address && errors.address ? true : false}
              />

              <TextField
                multiline
                rows={2}
                label="About yourself"
                variant="filled"
                name="yourselfInfo"
                value={values.yourselfInfo}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.yourselfInfo && errors.yourselfInfo
                    ? errors.yourselfInfo
                    : ""
                }
                error={
                  touched.yourselfInfo && errors.yourselfInfo ? true : false
                }
              />

              <Button
                style={{
                  marginTop: "50px",
                  background: "orange",
                  color: "black",
                  height: "40px",
                }}
                type="submit"
                variant="contained"
                color="success"
              >
                Register The Event
              </Button>


            </form>
            <Button
                style={{
                  marginTop: "-10px",
                  background: "#4681f4",
                  height: "40px",
                  width:"80%",
                  marginBottom:"40px",
                }}
                variant="contained"
                color="success"
                onClick={()=>Navigate(-1)}
              >
                Back to Event Details
              </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default StudentRegistration;
