import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function City({ city }) {

    const cityStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: '1rem',
        color: "white"
    }
    return (
        <>
            <Box sx={cityStyle}>
                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: 40
                }}>{city}</Typography>
            </Box>
        </>
    );
}