import { Box } from "@mui/material";

import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { EventCard } from "./EventCard";

function Events() {

  const [eventList, seteventList] = useState([]);

  // Validate event API

  const getdata = async () => {
    const res = await fetch("http://localhost:8000/events", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error in event list ");
    } else {
      seteventList(data.events);
      console.log("event list recived", eventList);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Box style={{ width: "100%", display: "flex" }}>
        <Box style={{ width: "100%", display: "grid" }}>
          <SearchBar eventList={eventList } seteventList={seteventList} />

          {eventList.map((eventList, index) => (
            <EventCard eventList={eventList } index={index} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Events;


