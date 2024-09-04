import React, { useEffect, useState } from 'react'
import ProductLayout from '../components/ProductLayout'

export default function GolfBallsPage() {
    const [golfBalls, setGolfBalls] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products/balls')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGolfBalls(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <ProductLayout items={golfBalls} brand link='/products/golfBalls/' />
    )
}
