import { Box, Button } from '@mui/material'

export default function OrderInfo() {
    return (
        <Box sx={{ mt: 25 }}>
            <form>
                <label>Address</label>
                <input type='text' />
                <label htmlFor="">State</label>
                <input type="text" />
                <label htmlFor="">Zipcode</label>
                <input type="text" />
                <label htmlFor="">Country</label>
                <input type="text" />
            </form>
            <form>
                <label>Credit Card Number</label>
                <input type="text" />
                <label>Security Code</label>
                <input type="password" />
                <label>Expiration Date</label>
                <input type="text" />
            </form>
            <Button>Order</Button>
        </Box>
    )
}