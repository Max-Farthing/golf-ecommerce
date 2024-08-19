import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

export default function LogInPage() {
  return (
    <Box sx={{ mt: 20 }}>
        <form>
            <label>Email</label>
            <input />
            <label>Password</label>
            <input />
        </form>
        <Link to={'/login/create'}>Create an Account</Link>
    </Box>
  )
}
