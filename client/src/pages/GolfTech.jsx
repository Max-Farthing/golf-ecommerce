import { Box, Card, Paper, Typography } from '@mui/material'
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
        <Box sx={{ display: 'grid', justifyContent: 'center', gap: 2 }}>
            {golfTech.map(item => (
                // <Paper elevation={10} sx={{
                //     mt: 5,
                //     pl: 2 
                // }}>
                    <Card
                        component={Link}
                        key={item.id}
                        to={`/products/golfTech/${item.id}`}
                        elevation={10}
                        sx={{ textDecoration: 'none', pl: 2, mt: 5, }}
                    >
                        <Typography>{item.brand}</Typography>
                        <Typography>{item.name}</Typography>
                        <Typography>{item.description}</Typography>
                        <Typography>${item.price}</Typography>
                    </Card>
                // </Paper>
            ))}
        </Box>
    )
}
