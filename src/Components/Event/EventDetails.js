import { Box, Button } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EventDetails() {
  const [event, setEvent] = useState(null);
  const [EventImage, setEventImage] = useState(null);

  let { id } = useParams();

  const eventUrl = event ? event.EventImage : "";
  

// const eventUrl = "https://media.istockphoto.com/id/1461631902/photo/group-of-college-students-discussing-about-project-with-team-leader-from-laptop-at-college.jpg?s=612x612&w=0&k=20&c=6KPm5e4SPQ2r0iHWOU0ujPn3bdCy60QfULFNCeSpEbs="

  // GET - get single event

  const GetEvent = async () => {
    console.log(id);

    const res = await fetch(`http://localhost:8000/EventDetails/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error in Single event  ");
    } else {
      setEvent(data.events);
      console.log("Single event recived", event);
    }
  };

  useEffect(() => {

      GetEvent();

  }, []);

  function hoursConvertor(time) {
    let hh = time.slice(0, 2);
    let mm = time.slice(3, 5);
    let session = "AM";

    if (hh == 0) {
      hh = 12;
    }
    if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }

    let finalTime = hh + ":" + mm + " " + session;

    return finalTime;
  }

  return (
    <>
      <Box sx={{ height: "95vh" }}>
        <Box
          style={{
            background: "#EEEEFF",
            padding: "25px",
            display: "flex",
            width: "90%",
            height: "600px",
            margin: "auto",
            marginTop: "30px",
            marginBottom: "30px",
            borderRadius: "2px",
            boxShadow: "5px 5px 5px 3px grey",
          }}
        >
          <Box
            style={{
              width: "65%",
              height: "600px",
            }}
          >
            <Box
              style={{
                background: `url(${ eventUrl })`,
                height: "600px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: "1.0",
              }}
            >

            </Box>
          </Box>

          <Box
            style={{
              display: "grid",
              width: "35%",
            }}
          >
            {/* Event Name */}
            <Box
              style={{
                display: "flex",
                height: "75px",
                margin: "auto",
                fontSize: "32px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              {event ? event.eventName : ""}
            </Box>
            <Box style={{ display: "grid", height: "200px" }}>
              <Box style={{ display: "grid", height: "200px" }}>
                <Box style={{ display: "flex", width: "100%" }}>
                  <Box
                    style={{ display: "flex", width: "30%", margin: "auto" }}
                  >
                    <CalendarMonthIcon
                      style={{ fontSize: "30px", margin: "0px auto 0px auto" }}
                    />
                  </Box>
                  <Box
                    style={{
                      fontSize: "16px",
                      width: "70%",
                      margin: "auto",
                      textAlign: "start",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {event ? event.startDateTime.slice(0, 10) : ""}
                  </Box>
                </Box>

                <Box style={{ display: "flex", width: "100%" }}>
                  <Box
                    style={{ display: "flex", width: "30%", margin: "auto" }}
                  >
                    <ScheduleIcon
                      style={{ fontSize: "30px", margin: "0px auto 0px auto" }}
                    />
                  </Box>
                  <Box
                    style={{
                      fontSize: "16px",
                      width: "70%",
                      margin: "auto",
                      textAlign: "start",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {event
                      ? hoursConvertor(event.startDateTime.slice(11, 16))
                      : ""}{" "}
                    -
                    {event
                      ? hoursConvertor(event.endDateTime.slice(11, 16))
                      : ""}
                  </Box>
                </Box>

                <Box style={{ display: "flex", width: "100%" }}>
                  <Box
                    style={{ display: "flex", width: "30%", margin: "auto" }}
                  >
                    <PlaceIcon
                      style={{ fontSize: "30px", margin: "0px auto 0px auto" }}
                    />
                  </Box>
                  <Box
                    style={{
                      fontSize: "16px",
                      width: "70%",
                      margin: "auto",
                      textAlign: "start",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {event ? event.location : ""}
                  </Box>
                </Box>

                <Box style={{ display: "flex", width: "100%" }}>
                  <Box
                    style={{ display: "flex", width: "30%", margin: "auto" }}
                  >
                    <PersonSharpIcon
                      style={{ fontSize: "30px", margin: "0px auto 0px auto" }}
                    />
                  </Box>
                  <Box
                    style={{
                      fontSize: "16px",
                      width: "70%",
                      margin: "auto",
                      textAlign: "start",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {event ? event.SpeakerName : ""}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box style={{ display: "grid", height: "100px" }}>
              <p
                style={{
                  fontSize: "13px",
                  margin: "auto",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Are you still thinking it over? Hurry up! Seats are
                filling-fast…
              </p>
              <Button
                style={{
                  width: "90%",
                  height: "50px",
                  margin: "auto",
                  background: "#0a0a23 ",
                  //   color: "black",
                  boxShadow: "2px 2px 2px 1px grey",
                  borderRadius: "10px",
                }}
                variant="contained"
              >
                free registration here !!!
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EventDetails;
