import React from 'react';
import style from './BookingCard.module.css';


function BookingCard() {
    return (
        <>
            <div className={style.container}>
                <div className={style.info}>
                    <img src="" alt="" className={style.image} />
                    <div className={style.data}>
                        <p>Bike Name</p>
                        <p>Booking Person Name</p>
                        <p>Time</p>
                    </div>
                </div>

                <div className={style.buttons}>
                    <button className={style.submitBtn}>Submit</button>
                    <button className={style.cancelBtn}>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default BookingCard;