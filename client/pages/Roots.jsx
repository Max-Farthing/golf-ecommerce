import React from 'react'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

export default function RootLayout() {
  return (
    <Container>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </Container>
  )
}
