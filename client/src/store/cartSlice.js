import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        },
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.name === newItem.name)
            state.totalQuantity++
            if(existingItem) {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            } else {
                state.items.push({
                    product: {
                        id: newItem.id,
                        name: newItem.name,
                        price: newItem.price,
                    },
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
        }
    }
})

export const { replaceCart, addItemToCart, removeItemFromCart } = cartSlice.actions

export default cartSlice