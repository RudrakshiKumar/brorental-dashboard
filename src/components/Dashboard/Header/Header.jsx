import React from 'react';
import style from './Header.module.css';
import Booking from './booking/Booking';
import Repairing from './repairing/Repairing';


function Header() {
    return (
        <>
            <div className={style.container}>
                <div className={style.booking}>
                    <Booking />
                </div>

                <div className={style.repairing}>
                    <Repairing />
                </div>
            </div>
        </>
    )
}

export default Header