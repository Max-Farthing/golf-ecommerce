import React from 'react'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

export default function RootLayout() {
  return (
    <Container sx={{ bgcolor: 'black', height: '100vh', pt: 7 }}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Container>
  )
}
