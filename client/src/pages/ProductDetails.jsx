import { Typography, Button, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../store/cartSlice'

export default function ProductDetailsPage() {
    const dispatch = useDispatch()
    const { category, productId } = useParams()
    const [product, setProduct] = useState(null)

    function handleAddToCart() {
        dispatch(addItemToCart(product))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/products/${category}/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
            .catch(err => console.log(err))
    }, [])

    if(!product) {
        return <p>Loading</p>
    }

    return (
        <Box sx={{ mt: 20 }}>
            <Typography variant='h3'>{product.name}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>{product.price}</Typography>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
        </Box>
    )
}
