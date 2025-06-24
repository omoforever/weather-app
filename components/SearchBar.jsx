import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';


export default function SearchBar({ currentCity, setCurrentCity }) {
    const [inputValue, setInputValue] = useState(currentCity || '');

    useEffect(() => {
        const timer = setTimeout(() => {

            if (inputValue.trim() && inputValue !== currentCity) {
                setCurrentCity(inputValue);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [inputValue, setCurrentCity]);


    return (
        <TextField
            label="Search for city"
            variant="outlined"
            fullWidth
            onChange={(e) => { setInputValue(e.target.value) }}
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
                '& .MuiOutlinedInput-input': {
                    color: '#FFFFFF', // Input text color: white
                },
            }}
        />
    );
}