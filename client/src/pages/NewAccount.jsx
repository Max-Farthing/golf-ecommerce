import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

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
        <Box sx={{ mt: 20 }}>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input id='email' type='email' name='email' required />
                <label>Password</label>
                <input id='password' type='password' name='password' required />
                <label>Confirm Password</label>
                <input />
                <Button type='submit'>Submit</Button>
            </form>
        </Box>
    )
}
