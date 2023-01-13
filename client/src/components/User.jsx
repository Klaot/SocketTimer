import React from 'react';
import Timer from './Timer';
import styles from './styles/UsersList.module.scss'

function User({user, index, indexUserTimer, setRerender}) {
  
  return (
    <div key={index} className={styles.userInfo}>
        {indexUserTimer === index ? <Timer setRerender={setRerender}/> : <div className={styles.userListNullTimer}></div>}
        <h3>Участник №{index + 1}</h3>
        <h4>{user.name}</h4>
        <p>{user.improvement}</p>
        <p>{user.date}</p>
        <p>{user.assurance}</p>
        <p>{user.percent}%</p>
        <p>{user.price}</p>
    </div>
  )
}

export default User