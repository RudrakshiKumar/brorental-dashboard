import React from 'react';
import style from './Information.module.css';
// all-tabs
import Rating from './rating/Rating';
import Income from './income/Income';
import Rides from './rides/Rides';
import AvailableBikes from './availableBikes/AvailableBikes';


function Information() {
    return (
        <>
            <div className={style.container}>

                <div style={{width: "22%"}}><Rating /></div>

                <div style={{width: "22%"}}><Income /></div>

                <div style={{width: "22%"}}><Rides /></div>

                <div style={{width: "22%"}}><AvailableBikes /></div>

            </div>
        </>
    )
}

export default Information;