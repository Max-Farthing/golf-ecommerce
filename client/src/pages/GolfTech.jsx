import React, { useEffect, useState } from 'react'
import ProductLayout from '../components/ProductLayout'

export default function GolfTechPage() {
    const [golfTech, setGolfTech] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products/tech')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGolfTech(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <ProductLayout items={golfTech} />
    )
}
