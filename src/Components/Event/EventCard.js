import { Box, Button } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import React from "react";
import { useNavigate } from "react-router-dom";

export function EventCard({ eventList }) {

    const Navigate = useNavigate();

    const eventUrl = eventList.EventImage;

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
    
    let redirect = (id)=>{
        console.log(`onclick id`, id)
        Navigate(`/EventDetails/${id}`)
    }
    return (
        <>
            <Box
                style={{
                    background: "#EEEEFF",
                    padding: "20px",
                    display: "flex",
                    width: "70%",
                    height: "400px",
                    margin: "auto",
                    marginTop: "30px",
                    marginBottom: "50px",
                    borderRadius: "2px",
                    boxShadow: "5px 5px 5px 3px grey",
                }}
            >
                <Box
                    style={{
                        width: "65%",
                        height: "400px",
                    }}
                >
                    <Box
                        style={{
                            background: `url(${eventUrl})`,
                            height: "390px",
                            margin: "5px",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            opacity: "1.0",
                        }}
                    ></Box>
                </Box>
                <Box
                    style={{
                        display: "grid",
                        width: "35%",
                    }}
                >
                    <Box
                        style={{
                            display: "flex",
                            height: "75px",
                            margin: "auto",
                            fontSize: "28px",
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "bold",
                            marginTop: "20px",
                        }}
                    >
                        {eventList.eventName}
                    </Box>
                    <Box style={{ display: "grid", height: "200px" }}>
                        <Box style={{ display: "grid", height: "200px" }}>
                            <Box style={{ display: "flex", width: "100%" }}>
                                <Box style={{ display: "flex", width: "30%", margin: "auto" }}>
                                    <CalendarMonthIcon
                                        style={{ fontSize: "30px", margin: "0px auto 0px auto" }} />
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
                                    {eventList.startDateTime.slice(0, 10)}
                                </Box>
                            </Box>

                            <Box style={{ display: "flex", width: "100%" }}>
                                <Box style={{ display: "flex", width: "30%", margin: "auto" }}>
                                    <ScheduleIcon
                                        style={{ fontSize: "30px", margin: "0px auto 0px auto" }} />
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
                                    {hoursConvertor(eventList.startDateTime.slice(11, 16))} -{" "}
                                    {hoursConvertor(eventList.endDateTime.slice(11, 16))}
                                </Box>
                            </Box>

                            <Box style={{ display: "flex", width: "100%" }}>
                                <Box style={{ display: "flex", width: "30%", margin: "auto" }}>
                                    <PlaceIcon
                                        style={{ fontSize: "30px", margin: "0px auto 0px auto" }} />
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
                                    {eventList.location}
                                </Box>
                            </Box>

                            <Box style={{ display: "flex", width: "100%" }}>
                                <Box style={{ display: "flex", width: "30%", margin: "auto" }}>
                                    <PersonSharpIcon
                                        style={{ fontSize: "30px", margin: "0px auto 0px auto" }} />
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
                                    {eventList.SpeakerName}
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
                            Are you still thinking it over? Hurry up! Seats are filling-fast…
                        </p>
                        <Button
                            style={{
                                width: "90%",
                                margin: "auto",
                                background: "orange",
                                color: "black",
                                boxShadow: "2px 2px 2px 1px grey",
                            }}
                            variant="contained"
                            onClick={()=>{
                                redirect(eventList._id);
                            }
                               
                            }
                        >
                            Book your seat Now !
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
