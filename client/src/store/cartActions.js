import { replaceCart, addItemToCart, removeItemFromCart } from "./cartSlice"

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'http://localhost:5000/cart'
            )

            if(!response.ok) {
                throw new Error('Could not fetch cart data')
            }

            const data = await response.json()

            return data
        }

        try {
            const cartData = await fetchData()
            dispatch(replaceCart({
                items: cartData.items || [],
            }))
        } catch (err) {
            console.log(err)
        }
    }
}

export const addItem = (product) => {
    return async (dispatch) => {
        const addItemRequest = async () => {
            const response = await fetch('http://localhost:5000/cart/item',
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

export const removeItem = (id) => {
    return async (dispatch) => {
        const removeItemRequest = async () => {
            const response = await fetch(`http:localhost:5000/cart/delete/${id}`,{
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
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
            dispatch(removeItemFromCart(id))
        } catch (err) {
            console.log(err)
        }
    }
}