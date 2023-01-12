import React from 'react'

function User() {
    
  return (
    <div key={index} className={styles.userListAllInfo}>
        {indexUserTimer === index ? <Timer setRerender={setRerender}/> : <div className={styles.userListNullTimer}></div>}
        <h3>Участник №{index + 1}</h3>
        <p>{user.name}</p>
        <p>{user.improvement}</p>
        <p>{user.date}</p>
        <p>{user.assurance}</p>
        <p>{user.percent}%</p>
        <p>{user.price}</p>
    </div>
  )
}

export default User