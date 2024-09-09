import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import { Box } from '@mui/material'

export default function RootLayout() {
  return (
    <Box sx={{ bgcolor: 'white', height: '100vh', width: '100vw', pt: 9 }}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Box>
  )
}
