import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CityList from '@/components/CityList';
import SearchBar from '@/components/SearchBar';
import DateTime from '@/components/DateTime';
import City from '@/components/City';
import WeatherSummary from '@/components/WeatherSummary';
import HourlyForecast from '@/components/HourlyForecast';
import Typography from '@mui/material/Typography';
import DailyForecast from '@/components/DailyForecast';

export default function Home() {
  const weatherBackgrounds = {
    sunrise: "linear-gradient(220.55deg, #FFD439 0%, #FF7A00 100%)",
    clearDay: "linear-gradient(220.55deg, #7CF7FF 0%, #4B73FF 100%)",
    rainy: "linear-gradient(220.55deg, #AFCCCB 0%, #616566 100%);",
    night: "linear-gradient(220.55deg, #5D85A6 0%, #0E2C5E 100%)"
  };

  const currentWeather = "night";

  return (
    <>
      <CssBaseline />
      <Box sx={{
        background: weatherBackgrounds[currentWeather],
        minHeight: 1
      }}>
        <Container maxWidth="md" >
          <Box sx={{
            display: "flex",
            flexDirection: "column",
          }}>
            <Box sx={{
              marginBlock: "2rem",
            }}>
              <CityList cities={["London", "Sydney", "Tokyo", "Toronto", "Paris"]} />
            </Box>

            <Box sx={{
              display: "flex",
              justifyContent: "center",
              width: {
                xs: "90%",    // Mobile: 90% width
                sm: "80%",    // Small tablets: 80% width
                md: "70%",    // Medium screens: 60% width
                lg: "60%",    // Large screens: 50% width
                xl: "60%"     // Extra large: 40% width
              },
              margin: "0 auto",
              paddingBottom: "2rem"
            }}>
              <SearchBar />
            </Box>

            <Box sx={{
              paddingBottom: "1rem"
            }}>
              <DateTime date={"Sunday, 22 June 2025"} time={"5:27 pm"} />
            </Box>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "3rem",
              width: "100%"
            }}>
              <WeatherSummary />
            </Box>
            <Box sx={{
              marginBottom: "2rem"
            }}>
              <HourlyForecast />
            </Box>
            <Box>
              <DailyForecast />
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  );
}
