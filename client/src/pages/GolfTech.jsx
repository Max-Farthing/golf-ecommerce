import { Box, Paper, Typography } from '@mui/material'
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
        <Box sx={{ display: 'grid', justifyContent: 'center' }}>
            {golfTech.map(item => (
                <Link
                    key={item.id}
                    to={`/products/golfTech/${item.id}`}
                >
                    <Paper elevation={5} sx={{
                        mt: 5
                    }}>
                        <p>{item.id}</p>
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
