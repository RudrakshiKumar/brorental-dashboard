import React from 'react';
import style from './DailyRiders.module.css';

function DailyRiders() {
    return (
        <>
            <div className={style.container}>
                <h3>Daily</h3>
                <p>Number of riders: <span>23</span></p>
                <p>Total cost of riders: <span>$ 324</span></p>
            </div>
        </>
    )
}

export default DailyRiders;