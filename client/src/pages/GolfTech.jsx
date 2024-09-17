import React, { useEffect, useState } from 'react'
import ProductLayout from '../components/ProductLayout'

export default function GolfTechPage() {
    const [golfTech, setGolfTech] = useState([])
    const apiUrl = import.meta.env.VITE_API_URL

    useEffect(() => {
        fetch(`${apiUrl}/products/tech`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGolfTech(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <ProductLayout items={golfTech} link='/products/golfTech/'/>
    )
}
