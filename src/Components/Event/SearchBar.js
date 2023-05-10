import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export function SearchBar() {

    const productList = ["asdFS", "sdfagfas", "sadfasf", "sdafasfsa", "dsfaFmjdsf",];

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
                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={productList.map((option) => option)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search Events"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: "search",
                                    }} />
                            )} />
                        <Button
                            style={{ padding: "7px", background: "#101820FF", opacity: "0.9" }}
                            variant="contained"
                            startIcon={<SearchIcon size="large" />}
                        >
                            Search
                        </Button>
                    </Stack>
                </Box>

            </Box>
        </>
    );
}
