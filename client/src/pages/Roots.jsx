import React from 'react'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

export default function RootLayout() {
  return (
    <Container sx={{ bgcolor: 'Tomato', height: '100vh', pt: 7, ':hover': { bgcolor: 'turquoise'}, }}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Container>
  )
}
