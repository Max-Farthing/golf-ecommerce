import { replaceCart, addItemToCart, removeItemFromCart } from "./cartSlice"

const apiUrl = import.meta.env.VITE_API_URL

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `${apiUrl}/cart`, {
                    credentials: 'include'
                })

            if(!response.ok) {
                throw new Error('Could not fetch cart data')
            }

            const data = await response.json()
            return data
        }

        try {
            const cartData = await fetchData()
            console.log(cartData)
            dispatch(replaceCart({
                items: cartData || [],
            }))
        } catch (err) {
            console.log(err)
        }
    }
}

export const addItem = (product) => {
    return async (dispatch) => {
        const addItemRequest = async () => {
            const response = await fetch(`${apiUrl}/cart/item`,
                {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({product})
                }
            )
    
            if(!response.ok) {
                throw new Error("Error adding item to cart")
            }
    
            const data = await response.json()
            return data
        }
        try {
            const addedItem = await addItemRequest()
            dispatch(addItemToCart(addedItem))
        } catch(err) {
            console.log(err)
        }
    }
}

export const removeItem = (product) => {
    return async (dispatch) => {
        const removeItemRequest = async () => {
            const response = await fetch(`${apiUrl}/cart/delete/item`, {
                method: "DELETE",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })

            if(!response.ok) {
                throw new Error("Error deleting item from cart")
            }

            const data = await response.json()
            return data
        }

        try {
            const result = await removeItemRequest()
            console.log(result)
            dispatch(removeItemFromCart(product))
        } catch (err) {
            console.log(err)
        }
    }
}