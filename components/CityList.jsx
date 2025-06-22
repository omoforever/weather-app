'use client'

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"

export default function CityList({ cities }) {

    const cityList = cities;
    const cityListStyle = {
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "0.3rem",

    }

    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: {
                    xs: "0.5rem",  // Mobile: 0.5rem gap
                    sm: "2rem",    // Small tablets: 1rem gap
                    md: "5rem",  // Medium screens: 1.5rem gap
                    lg: "5rem",    // Large screens: 2rem gap
                    xl: "5rem"   // Extra large: 2.5rem gap
                }
            }}>
                {cityList.map((cityName) => (
                    <Button key={cityName} sx={cityListStyle}>
                        <Typography>{cityName}</Typography>
                    </Button>
                ))}
            </Box>
        </>
    );
}