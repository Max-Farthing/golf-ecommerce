import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import { Box } from '@mui/material'
import Footer from './Footer'

export default function RootLayout() {
  return (
    <Box sx={{ bgcolor: 'white', height: '100vh', width: '100vw', pt: 9 }}>
      <MainNavigation />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh'}}>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </Box>
  )
}
