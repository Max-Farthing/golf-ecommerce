import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function GolfBallsPage() {
    const [golfBalls, setGolfBalls] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products/balls')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGolfBalls(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Box sx={{ display: 'grid', justifyContent: 'center' }}>
            {golfBalls.map(item => (
                <Link
                    key={item.id}
                    to={`/products/golfBalls/${item.id}`}
                >
                    <Paper elevation={5} sx={{
                        mt: 5
                    }}>
                        <Typography>{item.brand}</Typography>
                        <Typography>{item.name}</Typography>
                        <Typography>{item.description}</Typography>
                        <Typography>${item.price}</Typography>
                    </Paper>
                </Link>
            ))}
        </Box>
    )
}
