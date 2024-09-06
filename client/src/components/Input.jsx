import React from 'react'
import { TextField } from '@mui/material'

export default function Input({ label }) {
    return (
        <TextField
            variant='outlined'
            label={label}
            sx={{
                width: {
                    xs: '100%',
                    sm: 300
                },
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused': {
                        '& fieldset': {
                            borderColor: 'black',
                        },
                        color: 'black',
                    },
                },
                '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                        color: 'black',
                    },
                },
            }}
        />
    )
}
