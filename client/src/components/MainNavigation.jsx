import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const navStyle = { pb: 1, mx: 2, color: 'black', ':hover': { textDecoration: 'underline', textDecorationColor: 'red', textUnderlineOffset: '5px' } }

export default function MainNavigation() {
  return (
    <AppBar position='fixed' sx={{ bgcolor: 'white', color: 'black', height: '100px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', mt: '36px' }}>
        <Button
          sx={{ pb: 1, color: 'black', ml: 20 }}
          component={NavLink}
          to='/'
        >
          GolfGoat
        </Button>
        <Box>
          <Button
            color='inherit'
            component={NavLink}
            to='/products/golfBalls'
            sx={navStyle}
          >
            Balls
          </Button>
          <Button
            color='inherit'
            component={NavLink}
            to='/products/golfClubs'
            sx={navStyle}
          >
            Clubs
          </Button>
          <Button
            color='inherit'
            component={NavLink}
            to='/products/golfBags'
            sx={navStyle}
          >
            Bags
          </Button>
          <Button
            color='inherit'
            component={NavLink}
            to='/products/golfTech'
            sx={navStyle}
          >
            Tech
          </Button>
        </Box>
        <Box>
          <Box>
            <Button sx={navStyle}>Cart</Button>
            <Button sx={navStyle}>Search</Button>
            <Button sx={navStyle}>Log in</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
