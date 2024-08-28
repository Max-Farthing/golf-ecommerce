import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cartActions";
import { useNavigate } from "react-router-dom"
import { fetchCartData } from "../store/cartActions";

export default function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [cart, setCart] = useState([])
    const cart = useSelector((state) => state.cart.items)

    // useEffect(() => {
    //     fetch('http://localhost:5000/cart', {
    //         credentials: 'include'
    //     })
    //     .then(result => result.json())
    //     .then(data => {
    //         console.log(data)
    //         setCart(data)
    //     })
    // }, [])

    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch, cart.length])

    function handleRemoveItem(product) {
        dispatch(removeItem(product))
    }

    function handleCheckOut() {
        navigate('/cart/order')
    }

    return (
        <Box
            sx={{ mt: 25 }}
        >
            {cart.length !== 0 ? cart.map(item => (
                <li key={Math.random()}> 
                    <p>{item.product.name}</p>
                    <p>{item.quantity}</p>
                    <p>total {item.quantity * item.product.price}</p>
                    <Button onClick={() => handleRemoveItem(item)}>Remove Item</Button>
                </li>
            )) : <p>Cart is empty</p>}
            {cart.length !== 0 && <Button onClick={handleCheckOut}>Checkout</Button>}
        </Box>
    )
}