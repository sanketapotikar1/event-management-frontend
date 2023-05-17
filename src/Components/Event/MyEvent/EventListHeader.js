import React from "react";

export function EventListHeader() {
    return (
        <>
            <div
                style={{
                    height: "60px",
                    display: "flex",
                    fontSize: "16px",
                    boxShadow: "2px 3px 3px 2px grey",
                    fontFamily: "Roboto, sans-serif",
                    gap: "5px",
                }}
            >
                <div style={{ width: "25%", margin: "auto", fontWeight: "600" }}>Event Image</div>

                <div style={{ width: "25%", margin: "auto", fontWeight: "600" }}>
                    Event Name
                </div>

                <div style={{ width: "15%", margin: "auto", fontWeight: "600" }}>
                    Location
                </div>

                <div style={{ width: "15%", margin: "auto", fontWeight: "600" }}>
                    Date and Time
                </div>

                <div style={{ width: "20%", margin: "auto", fontWeight: "600" }}>
                    Speaker
                </div>
            </div>
        </>
    );
}
