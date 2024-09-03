import { Box, Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function GolfTechPage() {
    const [golfTech, setGolfTech] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products/tech')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGolfTech(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Grid spacing={3} container sx={{ mt: 0 }}>
                {golfTech.map(item => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}
                        component={Link}
                        to={`/products/golfTech/${item.id}`}
                        elevation={10}
                        sx={{ textDecoration: 'none', pl: 2, mt: 5, }}
                    >
                        <Card>
                            <CardMedia
                                component="img"
                            />
                            <CardContent sx={{display: 'flex', flexDirection: 'column', height: 40}}>
                                {/* <Typography variant='h6'>{item.brand}</Typography> */}
                                <Typography sx={{fontWeight: 'bold'}} variant='h7'>{item.name}</Typography>
                                <Typography sx={{fontWeight: 'bold'}} variant='h7'>${item.price}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
