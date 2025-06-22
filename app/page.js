import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CityList from '@/components/CityList';

export default function Home() {
  const weatherBackgrounds = {
    sunrise: "linear-gradient(220.55deg, #FFD439 0%, #FF7A00 100%)",
    clearDay: "linear-gradient(220.55deg, #7CF7FF 0%, #4B73FF 100%)",
    rainy: "linear-gradient(220.55deg, #EAEAEA 0%, #8B8B8B 100%)",
    night: "linear-gradient(220.55deg, #5D85A6 0%, #0E2C5E 100%)"
  };

  const currentWeather = "sunrise";

  return (
    <>
      <CssBaseline />
      <Box sx={{
        background: weatherBackgrounds[currentWeather],
      }}>
        <Container maxWidth="lg" >
          <Box sx={{
            height: '100vh',
            border: "dashed",
            borderBlockColor: "black",
            display: "flex",
            flexDirection: "column",
          }}>
            <CityList cities={["London", "Sydney", "Tokyo", "Toronto", "Paris"]} />
          </Box>
        </Container>
      </Box>
    </>
  );
}
