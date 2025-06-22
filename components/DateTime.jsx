import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function DateTime({ date, time }) {

    const dateTimeStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: '1rem',
        color: "white"
    }
    return (
        <>
            <Box sx={dateTimeStyle}>
                <Typography variant="h5">{date}</Typography>
                <Typography variant="h6">Local time: {time} </Typography>
            </Box>
        </>
    );
}