import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, FormControlLabel, Checkbox, Typography, TextField, Card, List, ListItem, CardMedia, CardContent } from '@mui/material'
import { useDispatch } from 'react-redux'
import { replaceCart } from '../store/cartSlice'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckoutStepper from '../components/CheckoutStepper'
import Input from '../components/Input'

export default function OrderInfo() {
    const navigate = useNavigate()
    const [ordered, setOrdered] = useState(false)
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://localhost:5000/cart/', {
            credentials: 'include'
        })
            .then(result => result.json())
            .then(data => {
                let calculatedTotal = 0
                console.log(data)
                setOrder(data)
                for (let i = 0; i < data.length; i++) {
                    calculatedTotal += data[i].quantity * data[i].product.price
                }
                setTotal(calculatedTotal)
            })
            .catch(err => console.log(err))
    }, [])

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
        <Container sx={{ mt: 10, bgcolor: 'white', display: 'flex', flexDirection: 'column' }}>
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
            <Grid container sx={{ mt: 2}}>
                <Grid item xs={12} md={7} sx={{ borderRight: '1px solid gray', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant='h5'>Contact</Typography>
                        <TextField
                            variant='outlined'
                            label='Email'
                            sx={{
                                width: {
                                    xs: '91%',
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
                            label={<Typography variant='p'>Email me special deals and offers</Typography>}
                        />
                    </Box>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1, my: 2 }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant='h5'>Shipping Address</Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Input label="Country" />
                            <Input label="Address" />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Input label="State" />
                            <Input label="Zipcode" />
                        </Box>
                    </Box>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1, mt: 1 }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant='h5'>Payment Information</Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Input label="Holders Name" />
                            <Input label="Credit Card #" />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Input label="Security Code" />
                            <Input label="Expiration Date" />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: 'darkgreen', height: 55, ':hover': { bgcolor: 'darkgreen', opacity: '75%' } }}
                            onClick={handleOrder}
                        >
                            Confirm Order
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                            <Box>
                                {order.map(item => (
                                    <Card key={Math.random()} elevation={0} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                        <CardMedia
                                            component='img'
                                            src={item.product.imageUrl}
                                            alt={item.product.name}
                                            sx={{ height: 100, objectFit: 'contain', maxWidth: 100 }}
                                        />
                                        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                            <Typography variant='h7' sx={{}}>{item.product.name}</Typography>
                                            <Typography variant='h7'>{item.quantity} x ${item.product.price}</Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Input label="Discount code or gift card" />
                                <Button
                                    variant="contained"
                                    sx={{ bgcolor: 'darkgreen', height: 55, ':hover': { bgcolor: 'darkgreen', opacity: '75%' } }}
                                >
                                    Apply
                                </Button>
                            </Box>
                            <Box sx={{ mt: 1, display: 'flex', width: '80%', justifyContent: 'space-between' }}>
                                <Typography variant='body2'>Subtotal</Typography>
                                <Typography variant='body2'>${total}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>
                                <Typography variant='body2'>Shipping</Typography>
                                <Typography variant='body2' sx={{ fontStyle: 'italic'}}>Free</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Total</Typography>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>${total}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}