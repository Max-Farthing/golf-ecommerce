import { Box, Typography, Link, IconButton } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'



export default function Footer() {
    return (
        <Box sx={{ bgcolor: 'darkgray', p: 4, color: 'white'}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2}}>
                    <Typography variant="h6" gutterBottom>Company</Typography>
                    <Link href="/" color="inherit">About Us</Link>
                    <Link href="/" color="inherit">Contact Us</Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2}}>
                    <Typography variant="h6" gutterBottom>Customer Service</Typography>
                    <Link href="/" color="inherit">FAQ</Link>
                    <Link href="/" color="inherit">Returns</Link>
                </Box>
                <Box>
                    <Typography variant="h6" gutterBottom>Follow Us</Typography>
                    <IconButton href="https://twitter.com"><TwitterIcon sx={{ color: 'white' }} /></IconButton>
                    <IconButton href="https://instagram.com"><InstagramIcon sx={{ color: 'white' }} /></IconButton>
                </Box>
            </Box>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                &copy; 2024 GolfGoat. All Rights Reserved.
            </Typography>
        </Box>

    )
}
