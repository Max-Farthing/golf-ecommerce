import { AppBar, Box, Button, IconButton, Toolbar, Badge, useMediaQuery, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedIn } from '../store/cartSlice'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const navStyle = { pb: 1, color: 'black', ':hover': { textDecoration: 'underline', textDecorationColor: 'darkgreen', textUnderlineOffset: '5px' } }

export default function MainNavigation() {
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.cart.loggedIn)
  const cart = useSelector((state) => state.cart.items)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [animateKey, setAnimateKey] = useState(0)
  const isMobile = useMediaQuery('(max-width:600px)')

  const promoMessages = [
    "Free Shipping On All Orders",
    "New Arrivals Available Now",
    "Limited Time Offers!"
  ]

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(prevMessage => (prevMessage + 1) % promoMessages.length)
      setAnimateKey(prevKey => prevKey + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [promoMessages.length])

  function handleDrawerToggle() {
    setDrawerOpen(oldState => !oldState)
  }

  function handleLogOut() {
    fetch('http://localhost:5000/auth/logout', {
      method: "POST",
      credentials: 'include'
    })
      .then(() => dispatch(setLoggedIn(false)))
      .catch(err => console.log(err))
  }

  return (
    <AppBar sx={
      { display: 'flex', justifyContent: 'end', bgcolor: 'darkgreen', color: 'black', height: { md: '120px' }, }
    }>
      {!isMobile ? (
        <>
          <Typography variant='body' sx={{ color: 'white', alignSelf: 'center', fontSize: 15 }}>Your Game Deserves the Best</Typography>
          <Typography
            variant='body'
            key={animateKey}
            sx={{
              color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, my: .5,
              animation: 'fade-in-out 3s ease-in-out',  // Apply the animation
              '@keyframes fade-in-out': {
                '0%': { opacity: 0 },   // Start fully transparent
                '10%': { opacity: 1 },  // Fade in
                '90%': { opacity: 1 },  // Stay fully visible
                '100%': { opacity: 0 }, // Fade out
              },
            }}>
            {promoMessages[currentMessage]}
          </Typography>
        </>) : (undefined)}
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', bgcolor: 'white', alignItems: 'end', }}>
        <Box> { /* Container 1 */}
          <Button component={NavLink} to='/'>
            <Typography variant={isMobile ? 'h6' : 'h5'} sx={{ color: 'darkgreen', fontWeight: 'bold', fontVariantCaps: 'all-petite-caps' }}>
              GolfGoat
            </Typography>
          </Button>
        </Box>

        {!isMobile ? (
          <Box sx={{}}> { /* Container 2 */}
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
          </Box>) : (
          <Box>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
              <List sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                <ListItem sx={navStyle} component={NavLink} to='/products/golfBalls' onClick={handleDrawerToggle}>
                  <ListItemText primary='Balls' />
                </ListItem>
                <ListItem sx={navStyle} component={NavLink} to='/products/golfClubs' onClick={handleDrawerToggle}>
                  <ListItemText primary='Clubs' />
                </ListItem>
                <ListItem sx={navStyle} component={NavLink} to='/products/golfBags' onClick={handleDrawerToggle}>
                  <ListItemText primary='Bags' />
                </ListItem>
                <ListItem sx={navStyle} component={NavLink} to='/products/golfTech' onClick={handleDrawerToggle}>
                  <ListItemText primary='Tech' />
                </ListItem>
              </List>
            </Drawer>
          </Box>
        )}
        <Box sx={{ display: 'flex', gap: 1 }}> { /* Container 3 */}
          <IconButton
            aria-label="cart"
            component={NavLink}
            to={'/cart'}
          >
            <Badge
              badgeContent={cart.length}
              sx={{
                '& .MuiBadge-badge': {
                  right: -3,
                  top: 13,
                  color: 'white',
                  border: `2px solid white`,
                  backgroundColor: 'darkgreen',
                  padding: '0 4px',
                },
              }}>
              <ShoppingCartIcon sx={{ color: 'darkgreen' }} />
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
      </Toolbar>
    </AppBar>
  )
}
