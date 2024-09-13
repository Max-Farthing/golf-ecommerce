import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ProductLayout({ items, brand, link }) {
    return (
        <Container>
            <Grid spacing={3} container sx={{ mt: 0 }}>
                {items.map(item => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}
                        component={Link}
                        to={link + `${item.id}`}
                        elevation={10}
                        sx={{ textDecoration: 'none', pl: 2, mt: 5, }}
                    >
                        <Card elevation={15} sx={{
                            border: '1px solid lightgrey', borderRadius: 2,
                            '&:hover': {
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                transform: 'scale(1.02)'
                            },
                            transition: 'transform 0.2s, box-shadow 0.2s'
                        }}>
                            <CardMedia
                                component="img"
                                src={item.imageUrl}
                                alt={item.name}
                                sx={{ height: 200, objectFit: 'contain', borderBottom: '2px solid black', }}
                            />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: 40 }}>
                                {brand && <Typography sx={{ fontWeight: 'bold' }} variant='h7'>{item.brand}</Typography>}
                                <Typography sx={{ fontWeight: 'bold' }} variant='h7'>{item.name}</Typography>
                                <Typography sx={{ fontWeight: 'bold' }} variant='h7'>${item.price}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
