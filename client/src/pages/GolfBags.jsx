import React, { useEffect, useState } from 'react'
import ProductLayout from '../components/ProductLayout'


export default function GolfBagsPage() {
    const [golfBags, setGolfBags] = useState([])
    const apiUrl = import.meta.env.VITE_API_URL

    useEffect(() => {
        fetch(`${apiUrl}/products/bags`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGolfBags(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <ProductLayout items={golfBags} brand link='/products/golfBags/'/>
    )
}
