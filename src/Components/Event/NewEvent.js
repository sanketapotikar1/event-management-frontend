import { Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./Event.css";
import { DateTimePicker } from "@mui/x-date-pickers";

function NewEvent() {
  const Navigate = useNavigate();

  const [startDateTime, setStartDateTime] = useState(null);
  const [endDateTime, setEndDateTime] = useState(null);

  const addevent = (newevent) => {
    console.log(`addevent triggred`);
    fetch(`http://localhost:8000/addevents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newevent),
    }).then(() => Navigate("/Events"));
  };

  const formvalidationSchema = yup.object({
    eventName: yup
      .string()
      .required("Please enter the your name")
      .min(3, " Please give bigger name"),

    EventImage: yup
      .string()
      .required("Please enter your Image Link")
      .min(3, "please enter your Image Link in more detail")
      .max(250, "please keep your Image Link short"),

    location: yup
      .string()
      .required("Please enter your location")
      .min(3, "please enter your location in more detail")
      .max(250, "please keep your location short"),

    SpeakerName: yup
      .string()
      .required("Please enter the your Speaker name")
      .min(3, " Please give bigger Speaker name"),

    SpeakerDetails: yup
      .string()
      .required("Please enter your speaker details")
      .min(3, "please enter your speaker details in more detail")
      .max(250, "please keep your speaker details short"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        eventName: "",
        EventImage: "",
        location: "",
        SpeakerName: "",
        SpeakerDetails: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (newevent) => {
        console.log("onSubmit", newevent, startDateTime.$d, endDateTime.$d);
        newevent.startDateTime = startDateTime.$d;
        newevent.endDateTime = endDateTime.$d;

        addevent(newevent);

        // Navigate(`/payment/${total}`);
      },
    });

  return (
    <>
      <Box>
        <Box style={{ display: "block" }} className="cart-block ">
          <h2
            style={{
              marginLeft: "150px",
              textAlign: "left",
              marginRight: "120px",
              padding: "20px",
            }}
          >
            New Event
          </h2>

          <Box>
            <form
              style={{ marginTop: "-30px" }}
              onSubmit={handleSubmit}
              className="Add-data-form"
            >
              <TextField
                label="Event Name"
                variant="filled"
                name="eventName"
                value={values.eventName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.eventName && errors.eventName ? errors.eventName : ""
                }
                error={touched.eventName && errors.eventName ? true : false}
              />

              <TextField
                label="Event Image Link"
                variant="filled"
                name="EventImage"
                value={values.EventImage}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.EventImage && errors.EventImage
                    ? errors.EventImage
                    : ""
                }
                error={touched.EventImage && errors.EventImage ? true : false}
              />

              <TextField
                label="location"
                variant="filled"
                name="location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.location && errors.location ? errors.location : ""
                }
                error={touched.location && errors.location ? true : false}
              />

              <TextField
                label="Speaker Name"
                variant="filled"
                name="SpeakerName"
                value={values.SpeakerName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.SpeakerName && errors.SpeakerName
                    ? errors.SpeakerName
                    : ""
                }
                error={touched.SpeakerName && errors.SpeakerName ? true : false}
              />

              <TextField
                label="Speaker details"
                multiline
                rows={3}
                variant="filled"
                name="SpeakerDetails"
                value={values.SpeakerDetails}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.SpeakerDetails && errors.SpeakerDetails
                    ? errors.SpeakerDetails
                    : ""
                }
                error={
                  touched.SpeakerDetails && errors.SpeakerDetails ? true : false
                }
              />

              <Box style={{ display: "flex", marginTop: "25px" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box style={{ display: "grid", width: "100%" }}>
                    <Box style={{ display: "flex" }}>
                      <Box style={{ width: "50%" }}>
                        <DateTimePicker
                          label=" Start Date and Time"
                          variant="filled"
                          value={startDateTime}
                          format="LLL"
                          onChange={(newValue) => {
                            setStartDateTime(newValue);
                          }}
                        />
                      </Box>

                      <Box style={{ width: "50%" }}>
                        <DateTimePicker
                          label=" End Date and Time"
                          variant="filled"
                          value={endDateTime}
                          format="LLL"
                          onChange={(newValue) => {
                            setEndDateTime(newValue);
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </LocalizationProvider>
              </Box>

              <Button
                style={{
                  marginTop: "30px",
                  background: "#101820FF",
                  height: "40px",
                }}
                type="submit"
                variant="contained"
                color="success"
              >
                Add New Event
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default NewEvent;
