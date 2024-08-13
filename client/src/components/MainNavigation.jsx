import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const navStyle = { pb: 1, mx: 3, color: 'black', ':hover': { textDecoration: 'underline', textDecorationColor: 'red', textUnderlineOffset: '5px' } }

export default function MainNavigation() {
  return (
    <AppBar position='fixed' sx={{ bgcolor: 'white', color: 'black', height: '100px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', mt: '36px' }}>
        <Button sx={{ pb: 1, color: 'black', ml: 20 }}>GolfGoat</Button>
        <Box>
          <Button
            color='inherit'
            component={NavLink}
            to='/'
            sx={navStyle}
          >
            Balls
          </Button>
          <Button
            color='inherit'
            component={NavLink}
            to='/'
            sx={navStyle}
          >
            Clubs
          </Button>
          <Button
            color='inherit'
            component={NavLink}
            to='/'
            sx={navStyle}
          >
            Bags
          </Button>
          <Button
            color='inherit'
            component={NavLink}
            to='/'
            sx={navStyle}
          >
            Tech
          </Button>
        </Box>
        <Box>
          <Button sx={navStyle}>Search</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
