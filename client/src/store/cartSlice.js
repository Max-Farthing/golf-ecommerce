import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        loggedIn: false
    },
    reducers: {
        replaceCart(state, action) {
            console.log(action.payload.items)
            state.items = action.payload.items
        },
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.name === newItem.name)
            if(existingItem) {
                existingItem.quantity++
            } else {
                state.items.push({
                    product: {
                        id: newItem.id,
                        name: newItem.name,
                        price: newItem.price,
                    },
                    quantity: 1,
                })
            }
        },
        removeItemFromCart(state, action) {
            const product = action.payload
            const existingItem = state.items.find(item => item.name === product.name)

            if(existingItem) {
                if(existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.name !== product.name)
                } else {
                    existingItem.quantity--
                    existingItem.totalPrice -= existingItem.price
                }
            }
        },
        setLoggedIn(state, action) {
            state.loggedIn = action.payload
        }
    }
})

export const { replaceCart, addItemToCart, removeItemFromCart, setLoggedIn } = cartSlice.actions

export default cartSlice