import { Box, Button, Container, Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cartActions";
import { useNavigate } from "react-router-dom"
import { fetchCartData } from "../store/cartActions";
import CheckoutStepper from "../components/CheckoutStepper";

export default function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.items)
    // const [total, setTotal] = useState(0)

    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch, cart.length])

    function handleRemoveItem(product) {
        console.log(cart)
        dispatch(removeItem(product))
    }

    function handleCheckOut() {
        navigate('/cart/order')
    }

    return (
        <Container sx={{ mt: 8, bgcolor: 'white', display: 'flex', flexDirection: 'column', }}>
            {cart.length !== 0 && <CheckoutStepper activeStep={0} />}
            {cart.length !== 0 ? cart.map((item, index) => (
                <Grid key={item._id} container spacing={2}>
                    <Grid item xs={12} key={index} sx={{ borderBottom: '1px solid gray', mt: 2}}>
                        <Card elevation={0} sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                            <Box sx={{ display: 'flex'}}>
                                <CardMedia
                                    component="img"
                                    src={item.product.imageUrl}
                                    alt={item.product.name}
                                    sx={{ height: 200, maxWidth: 200, objectFit: 'contain', }}
                                />
                                <CardContent sx={{ display: 'flex', flexDirection: 'column', }}>
                                    <Typography variant="h6">{item.product.name}</Typography>
                                    <Typography variant="body1">Quantity: {item.quantity}</Typography>
                                    <Typography variant="body2">Total: ${item.quantity * item.product.price}</Typography>
                                </CardContent>
                            </Box>
                            <Button
                                variant="text"
                                onClick={() => handleRemoveItem(item)}
                                sx={{ color: 'darkgreen', alignSelf: 'center', height: 50, ':hover': { opacity: '75%' } }}
                            >
                                Remove Item
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            )) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="body" sx={{ mt: 3 }}>
                        Your shopping cart is empty
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/')}
                        sx={{ my: 5, bgcolor: 'darkgreen', height: 50, ':hover': { bgcolor: 'darkgreen', opacity: '75%' } }}
                    >
                        Continue Shopping
                    </Button>
                </Box>
            )}
            {cart.length !== 0 && (
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        onClick={handleCheckOut}
                        sx={{ mb: 5, alignSelf: 'center', bgcolor: 'darkgreen', height: 50, ':hover': { bgcolor: 'darkgreen', opacity: '75%' } }}
                    >
                        Checkout
                    </Button>
                </Box>
            )}
        </Container>
    )
}