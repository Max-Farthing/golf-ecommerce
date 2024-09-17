import React, { useEffect, useState } from 'react'
import ProductLayout from '../components/ProductLayout'

export default function GolfClubsPage() {
    const [golfClubs, setGolfClubs] = useState([])
    const apiUrl = import.meta.env.VITE_API_URL

    useEffect(() => {
        fetch(`${apiUrl}/products/clubs`)
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
