import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function GolfBagsPage() {
    const [golfBags,
        setGolfBags] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products/bags')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGolfBags(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Box sx={{ display: 'grid', justifyContent: 'center' }}>
            {golfBags.map(item => (
                <Link
                    key={item.id}
                    to={`/products/golfBags/${item.id}`}
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
