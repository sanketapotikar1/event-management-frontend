import React, { useEffect, useState } from "react";

export function EventBox({ eventList, index }) {
  const [event, setEvent] = useState(null);

  const id = eventList;

  const GetEvent = async () => {
    const res = await fetch(
      `https://event-management-backend-phiv.onrender.com/EventDetails/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error in Single event");
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
      <div
        style={{
          height: "125px",
          display: "flex",
          fontSize: "14px",
          boxShadow: "2px 3px 3px 2px grey",
          gap: "5px",
          marginTop: "15px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <div style={{ width: "25%", margin: "auto" }}>
          {event ? (
            <img
              src={event.EventImage}
              alt="product"
              className="event-img"
            ></img>
          ) : (
            ""
          )}
        </div>

        <div style={{ width: "25%", margin: "auto", fontWeight: "500" }}>
          {event ? event.eventName : ""}
        </div>

        <div style={{ width: "15%", margin: "auto", fontWeight: "500" }}>
          {event ? event.location : ""}
        </div>

        <div style={{ width: "15%", margin: "auto", fontWeight: "500" }}>
          <div style={{ padding: "10px" }}>
            {event ? event.startDateTime.slice(0, 10) : ""}
          </div>
          <div style={{ padding: "10px" }}>
            {event ? hoursConvertor(event.startDateTime.slice(11, 16)) : ""} -{" "}
            {event ? hoursConvertor(event.endDateTime.slice(11, 16)) : ""}
          </div>
        </div>

        <div style={{ width: "20%", margin: "auto", fontWeight: "500" }}>
          {event ? event.SpeakerName : ""}
        </div>
      </div>
    </>
  );
}
