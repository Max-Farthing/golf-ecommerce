import { AppBar, Box, Button, IconButton, Toolbar, Badge } from '@mui/material'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedIn } from '../store/cartSlice'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const navStyle = { pb: 1, mx: 2, color: 'black', ':hover': { textDecoration: 'underline', textDecorationColor: 'red', textUnderlineOffset: '5px' } }

export default function MainNavigation() {
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.cart.loggedIn)
  const cart = useSelector((state) => state.cart.items)

  useEffect(() => {
    fetch('http://localhost:5000/auth/check', {
      method: "GET",
      credentials: 'include'
    })
      .then(response => response.json())
      .then(isAuthenticated => {
        if (isAuthenticated) {
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
          <Box sx={{ mr: 5 }}>
            <IconButton
              aria-label="cart"
              component={NavLink}
              to={'/cart'}
            >
              <Badge
                badgeContent={cart.length} color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    right: -3,
                    top: 13,
                    border: `2px solid black`,
                    padding: '0 4px',
                  },
                }}>
                <ShoppingCartIcon sx={{ color: 'black' }} />
              </Badge>
            </IconButton>
            {
              !loggedIn ?
                <Button
                  component={NavLink}
                  sx={navStyle}
                  to={'/login'}
                >
                  Log in
                </Button> :
                <Button sx={navStyle} onClick={handleLogOut}>
                  Log out
                </Button>
            }
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
