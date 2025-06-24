'use client'

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"

export default function CityList({ cities, currentCity, setCurrentCity }) {

    const cityList = cities;
    const cityListStyle = {
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
    }

    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
            }}>
                {cityList.map((cityName) => (
                    <Button key={cityName} sx={cityListStyle} onClick={() => {
                        if (cityName !== currentCity) {
                            setCurrentCity(cityName);
                        }
                        else {
                            //do nothing
                        }
                    }}>
                        <Typography>{cityName}</Typography>
                    </Button>
                ))}
            </Box>
        </>
    );
}