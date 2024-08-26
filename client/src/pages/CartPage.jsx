import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/cartActions";

export default function Cart() {
    const dispatch = useDispatch()
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cart', {
            credentials: 'include'
        })
        .then(result => result.json())
        .then(data => {
            console.log(data)
            setCart(data)
        })
    }, [])

    function handleRemoveItem(product) {
        dispatch(removeItem(product))
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
        </Box>
    )
}