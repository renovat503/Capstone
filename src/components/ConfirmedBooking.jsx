import React from "react";
import '../styles/confirmBooking.css'
import { useLocation,useNavigate } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button
  } from '@chakra-ui/react'
export default function ConfirmedBooking({dispatch}){

    const location = useLocation();
    const navigate = new useNavigate();
    const time = location.state.time;

    function handleSubmit (e){
        e.preventDefault();
        dispatch({value : time})
        navigate('/SuccessPage');
        }

    return(
        <section className="confirm-booking-section">
            <div className="confirm-container">
                <div className="content-container">
            <h1 className="bookingd">Booking Details</h1>
                    <div className="details-container">
                        <h1 className="tdpo">Time</h1>
                        <h1 className="tdpov">{location.state.time}</h1>
                    </div>
                    <div className="details-container">
                        <h1 className="tdpo">Date</h1>
                        <h1 className="tdpov">{location.state.date}</h1>
                    </div>
                    <div className="details-container">
                        <h1 className="tdpo">Party size</h1>
                        <h1 className="tdpov">{location.state.numbr}</h1>
                    </div>
                    <div className="details-container">
                        <h1 className="tdpo">Occasion</h1>
                        <h1 className="tdpov">{location.state.occasion}</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <FormControl mt={6} >
                            <FormLabel>Enter your name</FormLabel>
                            <Input name="date" isRequired mt={2}  type="text" placeholder='Please enter your name' />
                            <FormLabel>Phone #</FormLabel>
                            <Input name="date" isRequired mt={2}  type="tel" placeholder='Please Enter Phone #' />
                            <FormLabel>Additional requests</FormLabel>
                            <Textarea placeholder='Here is a sample placeholder' />
                            </FormControl>
                            <FormControl mt={4}>
                            <Button type='submit' colorScheme='teal' size='md'>
                                Confirm Booking
                            </Button>
                        </FormControl>
                        </form>
                </div>
        </div>
        </section>
    )
}