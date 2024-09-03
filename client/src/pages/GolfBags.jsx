import React, { useEffect, useState } from 'react'
import ProductLayout from '../components/ProductLayout'


export default function GolfBagsPage() {
    const [golfBags, setGolfBags] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products/bags')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGolfBags(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <ProductLayout items={golfBags} brand />
    )
}
