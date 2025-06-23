import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function DateTime({ date, time }) {

    const dateTimeStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: '0.325rem',
        color: "white"
    }
    return (
        <>
            <Box sx={dateTimeStyle}>
                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: 24

                }}>
                    {date}
                </Typography>
                <Typography sx={{
                    fontWeight: "light",
                    fontSize: 16
                }}>
                    Local time: {time}
                </Typography>
            </Box>
        </>
    );
}