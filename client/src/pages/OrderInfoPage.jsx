import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useDispatch } from 'react-redux'
import { replaceCart } from '../store/cartSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderInfo() {
    const navigate = useNavigate()
    const [ordered, setOrdered] = useState(false)
    const dispatch = useDispatch()

    function handleOrder() {
        fetch('http://localhost:5000/cart/order', {
            method: "POST",
            credentials: 'include'
        })
            .then(result => result.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        dispatch(replaceCart({ items: [] }))
        setOrdered(true)
    }

    function handleModal() {
        navigate('/')
    }

    return (
        <>
            {ordered &&
                <Dialog open={ordered}>
                    <DialogTitle>Order Received</DialogTitle>
                    <DialogContent>
                        test
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleModal}>Go Home</Button>
                    </DialogActions>
                </Dialog>
            }
            <Box sx={{ mt: 25 }}>
                <form>
                    <label>Address</label>
                    <input type='text' />
                    <label htmlFor="">State</label>
                    <input type="text" />
                    <label htmlFor="">Zipcode</label>
                    <input type="text" />
                    <label htmlFor="">Country</label>
                    <input type="text" />
                </form>
                <form>
                    <label>Credit Card Number</label>
                    <input type="text" />
                    <label>Security Code</label>
                    <input type="password" />
                    <label>Expiration Date</label>
                    <input type="text" />
                </form>
                <Button onClick={handleOrder}>Order</Button>
            </Box>
        </>
    )
}