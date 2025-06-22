import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
    return (
        <TextField
            label="Search for city"
            variant="outlined"
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#FFFFFF', // Default border: pure white
                    },
                    '&:hover fieldset': {
                        borderColor: '#F8F8FF', // Hover: ghost white
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#FFFAFA', // Focused: snow white
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#F5F5F5', // Label: white smoke
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#F5F5F5', // Focused label: same for consistency
                },
            }}
        />
    );
}