import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import SunnyIcon from '@mui/icons-material/Sunny';

export default function WeatherSummary() {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "3rem"
            }}>
                <Box sx={{
                    textAlign: 'center'
                }}>
                    <Typography variant="h6" color="teal">Clear</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "white"
                }}>

                    <Box color={"yellow"}>
                        <SunnyIcon fontSize="large" />
                    </Box>
                    <Box>
                        <Typography variant="h4">21C</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                        <Box>
                            <Typography>Feels like 20C</Typography>
                        </Box>
                        <Box>
                            <Typography>Humidity: 36%</Typography>
                        </Box>
                        <Box>
                            <Typography>Wind: 9km\h</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    color: 'white'

                }}>
                    <Typography>Sunrise: 05:15 AM</Typography>
                    <Typography>Sunsets: 08:49 PM</Typography>
                    <Typography>High: 23C</Typography>
                    <Typography>Low: 19C</Typography>

                </Box>
            </Box>
        </>
    );
}