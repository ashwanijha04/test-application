import React, { useState } from "react";



function BookingDetails(props) {

    return (
        <div id="bookingDetails">
        <h2>Booking Details</h2>
        <h2>{props.pickupLocation}</h2>
        <h2>{props.dropoffLocation}</h2>
    </div>
    )
}
function CabBookingComponent() {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [showBookingDetails, setShowBookingDetails] =  useState(false);


    const handleBookingSubmit = (e) => {
        // Handle booking submission here
        e.preventDefault();
        console.log('Booking submitted:', { pickupLocation, dropoffLocation });
        setShowBookingDetails(!showBookingDetails);
        // You can add further logic here, such as sending the booking details to a backend server

    }

    return (

        <div>
            <h2>Book a Cab</h2>
            <form onSubmit={(e) => {handleBookingSubmit(e)}}>
                <label htmlFor="pickup">Pickup Location:</label>
                <input 
                    type="text" 
                    id="pickup" 
                    value={pickupLocation} 
                    onChange={(e) => setPickupLocation(e.target.value)} 
                    required 
                />
                <br />
                <label htmlFor="dropoff">Drop-off Location:</label>
                <input 
                    type="text" 
                    id="dropoff" 
                    value={dropoffLocation} 
                    onChange={(e) => setDropoffLocation(e.target.value)} 
                    required 
                />
                <br />
                <button type="submit">Book Now</button>
            </form>


            {showBookingDetails ? (<BookingDetails pickupLocation={pickupLocation} dropoffLocation={dropoffLocation} />) : <></>}




        </div>
    );
}

export default CabBookingComponent;
