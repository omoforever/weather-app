import SunnyIcon from '@mui/icons-material/Sunny';
import CloudIcon from '@mui/icons-material/Cloud';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


export default function HourlyForecast() {

    const forecastData = [
        { time: "12:00pm", weatherIcon: <SunnyIcon />, temperature: "21C", weatherType: "sunny" },
        { time: "13:00pm", weatherIcon: <SunnyIcon />, temperature: "21C", weatherType: "sunny" },
        { time: "14:00pm", weatherIcon: <CloudIcon />, temperature: "17C", weatherType: "cloudy" },
        { time: "15:00pm", weatherIcon: <CloudIcon />, temperature: "19C", weatherType: "cloudy" },
        { time: "16:00pm", weatherIcon: <CloudIcon />, temperature: "18C", weatherType: "cloudy" }
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
                    <Typography color='white' sx={{ textAlign: 'center' }}>{forecast.time}</Typography>
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
                <Typography variant='h4' color='white'>Hourly Forecast</Typography>
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