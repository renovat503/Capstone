import React from "react";
import '../styles/confirmBooking.css'
import '../styles/successPage.css'
import { useLocation,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
    Button
  } from '@chakra-ui/react'


export default function SuccessPage(){

    const navigate = new useNavigate();
    function handleBackHome(){
        navigate('/');
    }
    return(
        <section className="confirm-booking-section">
            <div className="confirm-container">
                <div className="content-container">
                    <div className="success-title">
                        <FontAwesomeIcon className="ml10" color='Green' size='lg' icon={faCircleCheck} />
                        <h1 className="bookingd">Congatulations!</h1>
                        <p className="success-paragraph">Your booking has been confirmed, check your email for a confirmation
                        . We'll see you soon!
                        </p>
                        <Button onClick={handleBackHome} mb={3} colorScheme='green' size='md'>
                            Home Page
                        </Button>
                    </div>

                    <div className="details-container">
                    </div>
                </div>
        </div>
        </section>
    )
}