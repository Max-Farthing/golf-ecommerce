import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function GolfBagsPage() {
    const [golfBags, setGolfBags] = useState([])

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
                <Paper elevation={5} key={item.id} sx={{
                    mt: 5
                }}>
                    <Typography>{item.brand}</Typography>
                    <Typography>{item.name}</Typography>
                    <Typography>{item.description}</Typography>
                    <Typography>${item.price}</Typography>
                </Paper>
            ))}
        </Box>
    )
}
