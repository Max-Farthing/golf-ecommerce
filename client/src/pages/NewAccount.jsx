import { Paper, Button, Box, Typography, InputLabel, TextField, Checkbox, FormControlLabel } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function NewAccountPage() {
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        const fd = new FormData(event.target)
        const acqChannel = fd.getAll('acquisition')
        const data = Object.fromEntries(fd.entries())
        data.acquisition = acqChannel

        let email = data.email
        const info = {
            email,
            password: data.password
        }

        fetch('http://localhost:5000/auth/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

        navigate('/login')
    }

    return (
        <Paper elevation={20} sx={{ mb: 5, mt: { xs: 8, md: 18 }, bg: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mx: { xs: -3, sm: '15%', md: '35%' } }}>
            <Typography variant='h3' sx={{ mt: { xs: 2, md: 7 }, mb: -2 }}>Sign Up</Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: .5, mb: 7 }}>
                <Typography sx={{ pb: 1, textAlign: 'center' }}>Sign up <strong>NOW</strong> for special offers</Typography>
                <InputLabel>Email</InputLabel>
                <TextField
                    label='you@example.com'
                    id='email'
                    type='email'
                    name='email'
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
                <InputLabel>Password</InputLabel>
                <TextField
                    label='Enter 6 characters or more'
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
                <InputLabel>Confirm Password</InputLabel>
                <TextField
                    label='Match the password above'
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
                <FormControlLabel
                    control={
                        <Checkbox sx={{
                            borderColor: 'black',
                            '&.Mui-checked': {
                                color: 'darkgreen'
                            }
                        }} />
                    }
                    label={<Typography variant='p'>I agree to all terms and conditions</Typography>}
                />
                <Button variant='contained' type='submit' sx={{ backgroundColor: 'darkgreen', mt: 3, height: 50, ':hover': { backgroundColor: 'darkgreen', opacity: '75%' } }}>Submit</Button>
                <Typography variant='p' sx={{ pt: 3, textAlign: 'center', mr: 1 }}>
                    Have an account?{'  '}
                    <Link to={'/login'}
                        onMouseOver={(e) => e.target.style.color = 'darkgreen'}
                        onMouseOut={(e) => e.target.style.color = 'purple'}
                        style={{ textDecoration: 'none' }}
                    >
                        Log in
                    </Link>
                </Typography>
            </Box>
        </Paper>
    )
}
