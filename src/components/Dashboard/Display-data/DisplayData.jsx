import React from 'react';
import style from './DisplayData.module.css';
// all-tabs
import RidersInformation from './riders-information/RidersInformation';
import DailyRiders from './daily-riders/DailyRiders';


function DisplayData() {
    return (
        <>
            <div className={style.container}>
                <div className={style.box}>
                    <div style={{ width: "58%" }}><RidersInformation /></div>
                    <div style={{ width: "38%" }}><DailyRiders /></div>
                </div>

                <div className={style.options}>
                    <div className={style.inside_option}>
                        <p>Daily</p>
                        <p>Monthly</p>
                        <p>Yearly</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayData