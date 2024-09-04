import React, { useEffect, useState } from 'react'
import ProductLayout from '../components/ProductLayout'

export default function GolfClubsPage() {
    const [golfClubs, setGolfClubs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products/clubs')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGolfClubs(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <ProductLayout items={golfClubs} brand link='/products/golfClubs/' />
    )
}
