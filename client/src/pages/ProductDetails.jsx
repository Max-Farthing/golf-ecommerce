import { Typography, Button, Box, Container, Grid, CardMedia, Icon, Accordion, AccordionSummary, AccordionDetails, ListItem, List } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartActions'
import GolfCourseIcon from '@mui/icons-material/GolfCourse'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SupportIcon from '@mui/icons-material/Support'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{product.brand}</Typography>
                        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{product.name}</Typography>
                        <Typography variant='body'>{product.description}</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>${product.price}</Typography>
                        <Button variant='contained' sx={{ bgcolor: 'darkgreen', height: 50, ':hover': { bgcolor: 'darkgreen', opacity: '75%' } }} onClick={handleAddToCart}>Add to Cart</Button>
                    </Box>
                    <Grid container spacing={1} sx={{ mt: 1 }}> {/* start of icons section */}
                        <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Icon sx={{ bgcolor: 'lightgray', borderRadius: 5, p: 1, mb: 1 }}>
                                <GolfCourseIcon />
                            </Icon>
                            <Typography textAlign='center' variant='caption'>Premium Quality Products</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Icon sx={{ bgcolor: 'lightgray', borderRadius: 5, p: 1, mb: 1 }}>
                                <LocalShippingIcon />
                            </Icon>
                            <Typography textAlign='center' variant='caption'>Free Shipping Included</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Icon sx={{ bgcolor: 'lightgray', borderRadius: 5, p: 1, mb: 1 }}>
                                <SupportIcon />
                            </Icon>
                            <Typography textAlign='center' variant='caption'>180 Day Warranty Included</Typography>
                        </Grid>
                    </Grid>
                    <Box>
                        <Accordion variant='outlined' sx={{ mt: 1 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }} variant='h6'>Why Golf Goat?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <Typography variant='body'>
                                            1. Premium-Quality Golf Gear from the most trusted brands in the industry
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body'>
                                            2. Our curated selection of products ensures that you get the best performance on the course
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body'>
                                            3. All our products are thoroughly tested for quality, durability, and performance
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body'>
                                            4. Unbeatable customer service, free shipping on all orders, and a 180-day warranty on every item
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body'>
                                            5. When you shop with Golf Goat, you're not just buying equipment — you're investing in your game
                                        </Typography>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion variant='outlined' sx={{ mb: 1}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }} variant='h6'>Shipping Information</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant='body'>
                                    Shipping on all products is 100% FREE. Estimated shipping times may vary depending on your location and the availability of the product.
                                    Standard shipping typically takes 3-5 business days within the continental US. Orders placed on weekends or holidays will be processed
                                    the next business day. You will receive a tracking number once your order has been shipped, allowing you to follow your package's progress.
                                    Please note that shipping to remote areas may take longer. For international orders, customs duties and import taxes may apply.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
