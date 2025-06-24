import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import SunnyIcon from '@mui/icons-material/Sunny';
import City from "./City";
import { Paper } from "@mui/material";
import Chip from '@mui/material/Chip';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

export default function WeatherSummary() {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                gap: "3rem",

            }}>
                <Box sx={{
                    display: 'flex',
                    gap: '3rem'
                }}>
                    <Box component={Paper} sx={{
                        background: "inherit",
                        padding: "3rem",
                        textAlign: "center"
                    }}>
                        <City city={"Berlin, DE"} />
                        <Chip label="Clear" sx={{
                            fontSize: 16,
                            fontWeight: "regular",
                            backgroundColor: "transparent",
                            color: 'white',
                            marginBottom: "1rem"
                        }} />

                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            gap: "1.5rem"
                        }}>
                            <Box color={"yellow"}>
                                <SunnyIcon sx={{ fontSize: 64 }} />
                            </Box>
                            <Box color={"white"}>
                                <Typography variant="h4">21C</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white"
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                        }}>
                            <Box component={Paper} sx={{
                                background: "inherit",
                                color: "white",
                                padding: "1rem",
                                display: "flex",
                                gap: '0.1rem'
                            }}>
                                <ThermostatIcon />
                                <Typography>Feels like:  20C</Typography>
                            </Box>
                            <Box component={Paper} sx={{
                                background: "inherit",
                                color: "white",
                                padding: "1rem",
                                display: "flex",
                                gap: '0.1rem'
                            }}>
                                <WaterDropIcon />
                                <Typography>Humidity: 36%</Typography>
                            </Box>
                            <Box component={Paper} sx={{
                                background: "inherit",
                                color: "white",
                                padding: "1rem",
                                display: "flex",
                                gap: '0.1rem'
                            }}>
                                <AirIcon />
                                <Typography>Wind: 9km\h</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>



                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    gap: '0.5rem',
                    color: 'white'
                }}>
                    <Box component={Paper} sx={{
                        paddingInline: "0.325rem",
                        paddingBlock: "0.125rem",
                        background: "inherit",
                        color: "white"
                    }}>
                        <Typography>Sunrise: 05:15 AM</Typography>
                    </Box>
                    <Box component={Paper} sx={{
                        paddingInline: "0.325rem",
                        paddingBlock: "0.125rem",
                        background: "inherit",
                        color: "white"
                    }}>
                        <Typography>Sunsets: 08:49 PM</Typography>
                    </Box>
                    <Box component={Paper} sx={{
                        paddingInline: "0.325rem",
                        paddingBlock: "0.125rem",
                        background: "inherit",
                        color: "white"
                    }}>
                        <Typography>High: 23C</Typography>
                    </Box>
                    <Box component={Paper} sx={{
                        paddingInline: "0.325rem",
                        paddingBlock: "0.125rem",
                        background: "inherit",
                        color: "white"
                    }}>
                        <Typography>Low: 19C</Typography>
                    </Box>





                </Box>
            </Box>
        </>
    );
}