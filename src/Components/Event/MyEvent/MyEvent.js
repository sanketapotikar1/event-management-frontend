import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import "../Event.css";
import { EventListHeader } from "./EventListHeader";
import { EventBox } from "./EventBox";

function MyEvent() {
  const [eventList, setEventList] = useState([]);

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

      setEventList(data.ValidUserOne.eventRegistation);
    }
  };

  useEffect(() => {
    ValidUser();
  }, []);

  return (
    <>
      <Box
        style={{
          height: "100vh",
          display: "block",
          width: "80%",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "left",
            padding: "20px",
          }}
        >
          Your Registered Events
        </h2>
        <Box>
          <EventListHeader />
          
          {/* {
            eventList ? <EventBox /> : ""
          } */}

          {eventList.map((eventList, index) => (
            <EventBox eventList={eventList} index={index} />
          ))}

        </Box>
      </Box>
    </>
  );
}

export default MyEvent;
