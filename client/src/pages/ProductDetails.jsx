import { Typography, Button, Box, Container, Grid, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartActions'

export default function ProductDetailsPage() {
    const dispatch = useDispatch()
    const { category, productId } = useParams()
    const [product, setProduct] = useState(null)

    function handleAddToCart() {
        dispatch(addItem(product))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/products/${category}/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
            .catch(err => console.log(err))
    }, [])

    if (!product) {
        return <p>Loading</p>
    }

    return (
        <Container sx={{ mt: 10, bgcolor: 'white' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <CardMedia
                        component='img'
                        height='400'
                        image={product.imageUrl}
                        alt={product.name}
                        sx={{ objectFit: 'contain', }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1}}>
                        <Typography variant='h6' sx={{fontWeight: 'bold'}}>{product.brand}</Typography>
                        <Typography variant='h4' sx={{fontWeight: 'bold'}}>{product.name}</Typography>
                        <Typography variant='body'>{product.description}</Typography>
                        <Typography variant='h6' sx={{fontWeight: 'bold'}}>${product.price}</Typography>
                        <Button variant='contained' sx={{ bgcolor: 'darkgreen', height: 50, ':hover': { bgcolor: 'darkgreen', opacity: '75%' } }} onClick={handleAddToCart}>Add to Cart</Button>
                        <Box>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
