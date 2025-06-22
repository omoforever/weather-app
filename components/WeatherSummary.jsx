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
                gap: "1rem"
            }}>
                <Box sx={{
                    textAlign: 'center'
                }}>
                    <Typography variant="h6" color="teal">Clear</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    color: "white"
                }}>
                    <Box color={"yellow"}><SunnyIcon /></Box>
                    <Box>
                        <Typography variant="h5">21C</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                        <Box>Feels like 20C</Box>
                        <Box>Humidity: 36%</Box>
                        <Box>Wind: 9km\h</Box>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-around",
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