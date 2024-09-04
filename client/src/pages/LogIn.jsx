import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, InputAdornment, InputLabel, Paper, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setLoggedIn } from '../store/cartSlice'
import EmailIcon from '@mui/icons-material/Email';

export default function LogInPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        const fd = new FormData(event.target)
        const acqChannel = fd.getAll('acquisition')
        const data = Object.fromEntries(fd.entries())
        data.acquisition = acqChannel

        const info = {
            email: data.email,
            password: data.password
        }

        fetch('http://localhost:5000/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(info)
        })
            .then(result => result.json())
            .then(data => {
                dispatch(setLoggedIn(true))
                console.log(data)
            })
            .catch(err => console.log(err))

        navigate('/')
    }

    return (
        <Paper elevation={20} sx={{ mt: 20, bg: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mx: { xs: '20%', sm: '35%'} }}>
            <Typography variant='h2' sx={{ mt: 7, mb: -2 }}>Login</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ mr: 1 }} variant='p'>Dont have an account yet?</Typography>
                <Link
                    to={'/login/create'}
                    onMouseOver={(e) => e.target.style.color = 'darkgreen'}
                    onMouseOut={(e) => e.target.style.color = 'purple'}
                    style={{ textDecoration: 'none'}}
                >
                    Create an Account
                </Link>
            </Box>
            <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', mb: 7, gap: .5, }}>
                <InputLabel>Email</InputLabel>
                <TextField
                    variant='outlined'
                    label="you@example.com"
                    id='email'
                    type='email'
                    name='email'
                    required
                    sx={{
                        width: {
                            xs: '100%',
                            sm: 300
                        },
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
                <InputLabel>Password</InputLabel>
                <TextField
                    label="Enter 6 characters or more"
                    id='password'
                    type='password'
                    name='password'
                    required
                    sx={{
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
                <Button type='submit' variant='contained' sx={{ backgroundColor: 'darkgreen', mt: 3, height: 50, ':hover': { backgroundColor: 'darkgreen', opacity: '75%' } }}>Login</Button>
            </Box>
        </Paper>
    )
}
