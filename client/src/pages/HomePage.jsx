import { Box, Button, Card, CardContent, CardMedia, Grid, Input, InputLabel, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
    {
        id: 1,
        name: "2023 Pro Stand Bag",
        brand: "TaylorMade",
        price: 199.99,
        description: "Stand Bag used by PGA Professionals",
        imageUrl: '../../taylorMade_bag.png'
    },
    {
        id: 2,
        name: "2024 Pro V1x Left Dash Enhanced Golf Balls",
        brand: "Titleist",
        price: 54.99,
        description: "High-performance golf balls",
        imageUrl: '../../prov1.png'
    },
    {
        id: 3,
        name: "Qi Irons",
        brand: "TaylorMade",
        price: 999.99,
        description: "Full set of hand crafted irons",
        imageUrl: '../../qiirons.png'
    }
]

export default function HomePage() {
    const isMobile = useMediaQuery('(max-width:600px)')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 3000)
        return () => clearInterval(interval);
    }, [])

    function handleNavigate() {
        switch (currentIndex) {
            case 0:
                navigate('/products/golfBags/1')
                break;
            case 1:
                navigate('/products/golfBalls/2')
                break;
            case 2:
                navigate('/products/golfClubs/3')
                break;
            default:
                navigate('/')
        }

    }

    return (
        <Box sx={{ mt: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    objectFit: 'cover',
                    height: { xs: 300, sm: 600 },
                    width: '100vw',
                    backgroundImage: `url('../../bg4.png')`,
                    backgroundSize: { xs: 'contain', sm: 'cover' },
                    backgroundPosition: 'center',
                    color: 'white',
                    textAlign: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, }}>
                    <Typography sx={{ fontWeight: 'bold', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)' }} variant={!isMobile ? 'h3' : 'h5'}>GolfGoat</Typography>
                    <Typography sx={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)' }} variant={!isMobile ? 'h4' : 'h6'}>Your Ultimate Destination For The Best Golf Gear</Typography>
                    <Button
                        variant='contained'
                        sx={{ bgcolor: 'white', color: 'black', height: { xs: 35, sm: 50 }, borderRadius: 0, ':hover': { bgcolor: 'white', opacity: '75%' } }}
                        onClick={() => navigate('/products/golfClubs')}
                    >
                        <Typography variant='body2' sx={{ fontSize: 12 }}>
                            Shop Now
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    mt: 3,
                    backgroundImage: `url('../../background.png')`,
                    width: '100vw',
                    height: 'auto',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
            >
                <Typography textAlign="center" sx={{ color: 'white', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)' }} variant='h4'>Check out our Top Sellers</Typography>
                <Card
                    onClick={handleNavigate}
                    sx={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', width: { xs: 200, md: 600}, height: { xs: 200, md: 450}, border: '1px solid black',
                        ':hover': { cursor: 'pointer' }
                    }}
                >
                    <CardMedia
                        component='img'
                        height='200'
                        src={products[currentIndex].imageUrl}
                        alt={products[currentIndex].name}
                        sx={{ objectFit: 'contain', borderBottom: '1px solid black', height: { xs: 100, md: 300} }}
                    />
                    <CardContent>
                        <Typography sx={{ fontWeight: 'bold' }} variant={!isMobile ? 'h5' : 'h6'}>{products[currentIndex].brand}</Typography>
                        <Typography variant={!isMobile ? 'h6' : 'body'}>{products[currentIndex].name}</Typography>
                        <Typography sx={{ fontWeight: 'bold' }} variant={!isMobile ? 'h5' : 'h6'}>${products[currentIndex].price}</Typography>
                    </CardContent>
                </Card>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
                    {products.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                backgroundColor: currentIndex === index ? 'white' : 'gray',
                                mx: 1,
                                cursor: 'pointer'
                            }}
                        />
                    ))}
                </Box>
            </Box>
            <Grid container spacing={4} sx={{ my: 3, }}> {/* grid section */}
                <Grid item xs={12} sm={4} md={3}>
                    <Card elevation={20} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid green' }}>
                        <CardMedia
                            component='img'
                            src='../../qi10.png'
                            alt='Qi10 Driver'
                            sx={{ height: 200, objectFit: 'contain', }}
                        />
                        <CardContent>
                            <Button
                                variant='contained'
                                sx={{ bgcolor: 'darkgreen', height: 50, ':hover': { bgcolor: 'darkgreen', opacity: '75%' } }}
                                onClick={() => navigate('/products/golfClubs')}
                            >
                                <Typography variant='body'>
                                    Clubs
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Card elevation={20} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid green' }}>
                        <CardMedia
                            component='img'
                            src='../../callaway_balls.jpg'
                            alt='ChromeSoft Balls'
                            sx={{ height: 200, objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Button
                                variant='contained'
                                sx={{ bgcolor: 'darkgreen', height: 50, ':hover': { bgcolor: 'darkgreen', opacity: '75%' } }}
                                onClick={() => navigate('/products/golfBalls')}
                            >
                                <Typography variant='body'>
                                    Balls
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Card elevation={20} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid green' }}>
                        <CardMedia
                            component='img'
                            src='../../callway_bag.png'
                            alt='Qi10 Driver'
                            sx={{ height: 200, objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Button
                                variant='contained'
                                sx={{ bgcolor: 'darkgreen', height: 50, ':hover': { bgcolor: 'darkgreen', opacity: '75%' } }}
                                onClick={() => navigate('/products/golfBags')}
                            >
                                <Typography variant='body'>
                                    Bags
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Card elevation={20} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid green' }}>
                        <CardMedia
                            component='img'
                            src='../../rapsodo.png'
                            alt='Qi10 Driver'
                            sx={{ height: 200, objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Button
                                variant='contained'
                                sx={{ bgcolor: 'darkgreen', height: 50, ':hover': { bgcolor: 'darkgreen', opacity: '75%' } }}
                                onClick={() => navigate('/products/golfTech')}
                            >
                                <Typography variant='body'>
                                    Tech
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5, p: 2, backgroundColor: 'lightgray', textAlign: 'center', width: '75vw', pb: 5, mb: 5 }}>
                <InputLabel>
                    <Typography variant='h5'>
                        Stay in touch for GolfGoat News and Deals
                    </Typography>
                </InputLabel>
                <TextField variant='outlined' label='you@example.com' value={email} onChange={(e) => setEmail(e.target.value)}
                sx={{
                    width: { md: 500 },
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused': {
                            '& fieldset': {
                                borderColor: 'black',
                            },
                            color: 'black',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        '&.Mui-focused': {
                            color: 'black',
                        },
                    },
                }}
                />
                <Button
                    type='submit'
                    variant='contained'
                    sx={{ backgroundColor: 'darkgreen', mt: 3, height: 50, ':hover': { backgroundColor: 'darkgreen', opacity: '75%' } }}
                    onClick={() => setEmail('')}
                >
                    Sign up
                </Button>
            </Box>
        </Box>
    )
}
