import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";

export function SearchBar({ eventList, seteventList }) {
  const [searchValue, setSearchValue] = useState(null);

  const [searchList, setSearchList] = useState(null);

  // Serch text functionlity API

  const getdata = async () => {
    console.log(searchValue);
    const res = await fetch(
      `https://event-management-backend-phiv.onrender.com/${searchValue}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data);
    console.log(searchValue);

    if (res.status === 422 || !data) {
      console.log("error in event list ");
    } else {
      seteventList(data.result);
      console.log("event list recived", eventList);
    }
  };

  // Validate event API

  const getEvents = async () => {
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
      setSearchList(data.events);
      console.log("event list recived", searchList);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const mystyle = {
    justifyContent: "center",
    alignItem: "center",
    width: "50%",
    height: "150px",
    margin: "auto",
  };

  return (
    <>
      <Box style={{ height: "150px" }}>
        <Box style={{ width: "100%" }}>
          <Stack style={mystyle} spacing={2} sx={{ width: 500 }}>
            {searchList ? (
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={searchList.map((option) => option.eventName)}
                value={searchValue}
                onChange={(event, value) => setSearchValue(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Events"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            ) : (
              ""
            )}
            <Button
              style={{
                padding: "7px",
                background: "#101820FF",
                opacity: "0.9",
              }}
              variant="contained"
              startIcon={<SearchIcon size="large" />}
              onClick={getdata}
            >
              Search
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
