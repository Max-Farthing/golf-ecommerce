import { Box, Button } from '@mui/material'
import React from 'react'

export default function NewAccountPage() {
  return (
    <Box sx={{ mt: 20 }}>
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
        <label>Confirm Password</label>
        <input />
        <Button>Submit</Button>
    </Box>
  )
}
