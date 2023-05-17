import React from 'react';
import style from './Booking.module.css';
import BookingCard from './BookingCard';


function Booking() {
    return (
        <>
            <div className={style.container}>
                <BookingCard />
                <BookingCard />
                <BookingCard />
            </div>
        </>
    )
}

export default Booking