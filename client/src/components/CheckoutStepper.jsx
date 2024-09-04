import React from 'react'
import { Stepper, Step, StepLabel, Container } from '@mui/material'

const steps = ['Your Cart', 'Checkout Details', 'Order Complete']

export default function CheckoutStepper({ activeStep }) {
    return (
        <Container sx={{ mt: 5 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel
                            sx={{
                                '& .MuiStepLabel-label': {
                                  color: activeStep === index ? 'darkgreen' : 'gray',
                                },
                                '& .MuiStepIcon-root': {
                                  color: activeStep >= index ? 'darkgreen' : 'gray',
                                },
                                '& .Mui-completed': {
                                  color: 'darkgreen !important',
                                },
                                '& .Mui-active': {
                                  color: 'darkgreen !important',
                                },
                              }}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Container>
    );
}