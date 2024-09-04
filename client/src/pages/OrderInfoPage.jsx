import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { replaceCart } from '../store/cartSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckoutStepper from '../components/CheckoutStepper'

export default function OrderInfo() {
    const navigate = useNavigate()
    const [ordered, setOrdered] = useState(false)
    const [order, setOrder] = useState([])
    const dispatch = useDispatch()

    function handleOrder() {
        fetch('http://localhost:5000/cart/order', {
            method: "POST",
            credentials: 'include'
        })
            .then(result => result.json())
            .then(data => {
                setOrder(data.items)
                console.log(data)
            })
            .catch(err => console.log(err))
        dispatch(replaceCart({ items: [] }))
        setOrdered(true)
    }

    function handleModal() {
        navigate('/')
    }

    return (
        <Container sx={{ mt: 10, bgcolor: 'white' }}>
            <CheckoutStepper activeStep={ordered ? 3 : 1} />
            {ordered &&
                <Dialog open={ordered}>
                    <DialogTitle>Order Received</DialogTitle>
                    <DialogContent>
                        {order.map(item => (
                            <li key={Math.random()}>{item.product.name} = {item.quantity} x {item.product.price}</li>
                        ))}
                    </DialogContent>
                    <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            onClick={handleModal}
                            sx={{ color: 'white', alignSelf: 'center', bgcolor: 'darkgreen', height: 50, ':hover': { bgcolor: 'darkgreen', opacity: '75%' } }}
                        >
                            Go Home
                        </Button>
                    </DialogActions>
                </Dialog>
            }
            <Box>
                <Box component="form" sx={{ background: "white", my: 10, }}>
                    <TextField id="address" label="Address" variant="outlined" />
                    <TextField id="State" label="State" variant="outlined" />
                    <TextField id="Zipcode" label="Zipcode" variant="outlined" />
                    <TextField id="Country" label="Country" variant="outlined" />
                </Box>
                <Box component="form" sx={{ background: "white" }}>
                    <TextField id="Credit" label="Credit Card #" variant="outlined" />
                    <TextField id="Security" label="Security Code" variant="outlined" />
                    <TextField id="Expiration" label="Expiration Date" variant="outlined" />
                </Box>
                <Button onClick={handleOrder}>Confirm Order</Button>
            </Box>
        </Container>
    )
}