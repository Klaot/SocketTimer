import React from 'react'
import styles from './styles/Timer.module.scss'
import { subscribeToTimer } from '../services/timer';
import { useState, useEffect } from 'react';

function Timer({setRerender}) {

    const [timeNumber, setTimeNumber] = useState(0)

    useEffect(() => {
    subscribeToTimer((err, timestamp) => setTimeNumber(timestamp));
    setRerender(timeNumber)
    }, [timeNumber]);
    
    let minutes = Math.floor(timeNumber / 60)
    let seconds = timeNumber % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds

    return (
        <div className={styles.timerBlock}>
            <div className={styles.timer}>
                <h1>Время: {minutes}:{seconds}</h1>
            </div>
        </div>
    )
}

export default Timer