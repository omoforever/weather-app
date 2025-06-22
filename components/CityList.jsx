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
                gap: "1rem",
                paddingTop: "2rem"
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