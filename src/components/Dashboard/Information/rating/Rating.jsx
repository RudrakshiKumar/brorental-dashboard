import React from 'react';
import style from './Rating.module.css';


function Rating() {
    return (
        <>
            <div className={style.rating}>
                <h3>Rating</h3>
                <p>⭐⭐⭐⭐</p>
            </div>
        </>
    )
}

export default Rating;