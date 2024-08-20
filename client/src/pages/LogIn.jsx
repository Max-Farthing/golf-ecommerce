import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'

export default function LogInPage() {
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

        fetch('http://localhost:5000/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(result => result.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

        navigate('/')
    }

    return (
        <Box sx={{ mt: 20 }}>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input id='email' type='email' name='email' required />
                <label>Password</label>
                <input id='password' type='password' name='password' required />
                <Button type='submit'>Log in</Button>
            </form>
            <Link to={'/login/create'}>Create an Account</Link>
        </Box>
    )
}
