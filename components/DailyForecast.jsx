import SunnyIcon from '@mui/icons-material/Sunny';
import CloudIcon from '@mui/icons-material/Cloud';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function DailyForecast() {
    const forecastData = [
        { day: "Sat", weatherIcon: <SunnyIcon />, temperature: "21C", weatherType: "sunny" },
        { day: "Sun", weatherIcon: <SunnyIcon />, temperature: "21C", weatherType: "sunny" },
        { day: "Mon", weatherIcon: <CloudIcon />, temperature: "17C", weatherType: "cloudy" },
        { day: "Tue", weatherIcon: <CloudIcon />, temperature: "19C", weatherType: "cloudy" },
        { day: "Wed", weatherIcon: <CloudIcon />, temperature: "18C", weatherType: "cloudy" }
    ]

    const foreCastElements = forecastData.map((forecast, index) => {
        return (
            <Box key={index} sx={{
                width: "70px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem"
            }}>
                <Box>
                    <Typography color='white' sx={{ textAlign: 'center' }}>{forecast.day}
                    </Typography>
                </Box>
                <Box color={forecast.weatherType === "sunny" ? "yellow" : "white"}>
                    {forecast.weatherIcon}
                </Box>
                <Box>
                    <Typography color='white'>{forecast.temperature}</Typography>
                </Box>
            </Box>
        );
    })

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}>
                <Typography variant='h4' color='white'>Daily Forecast</Typography>
                <Divider sx={{
                    borderColor: "white"
                }} />
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    {foreCastElements}
                </Box>
            </Box>
        </>
    );
}