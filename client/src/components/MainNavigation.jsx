import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedIn } from '../store/cartSlice'

const navStyle = { pb: 1, mx: 2, color: 'black', ':hover': { textDecoration: 'underline', textDecorationColor: 'red', textUnderlineOffset: '5px' } }

export default function MainNavigation() {
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.cart.loggedIn)

  useEffect(() => {
    fetch('http://localhost:5000/auth/check', {
      method: "GET",
      credentials: 'include'
    })
      .then(response => response.json())
      .then(isAuthenticated => {
        if(isAuthenticated) {
          dispatch(setLoggedIn(true))
        } else {
          dispatch(setLoggedIn(false))
        }
      })
      .catch(err => console.log(err))
  }, [])

  function handleLogOut() {
    fetch('http://localhost:5000/auth/logout', {
      method: "POST",
      credentials: 'include'
    })
      .then(() => dispatch(setLoggedIn(false)))
      .catch(err => console.log(err))
  }

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
            <Link sx={navStyle}
              to={'/cart'}
            >Cart</Link>
            {
              !loggedIn ? <Link
                sx={navStyle}
                to={'/login'}
              >
                Log in
              </Link> :
                <Button onClick={handleLogOut}>
                  Log out
                </Button>
            }
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
