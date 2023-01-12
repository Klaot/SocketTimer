import React from 'react'
import styles from './styles/UsersList.module.scss';
import Timer from './Timer'
import { useEffect } from 'react';
import { getJoinedUser } from '../services/timer';
import { useState } from 'react';

const users = [
  {id: 1, price: 2500, date: 15, assurance: 2, percent: 30, improvement: "-", timer: true, name: 'ООО ВЕКТОР'},
  {id: 2, price: 2500, date: 10, assurance: 2, percent: 30, improvement: "-", timer: false, name: 'ООО Звонок'},
  {id: 3, price: 2500, date: 20, assurance: 2, percent: 30, improvement: "-", timer: false, name: 'ООО МегоСталь'},
]

function UsersList() {

 const [activeUsers, setActiveUsers] = useState([])
 const [rerender, setRerender] = useState('')
 const [indexUserTimer, setIndexUserTimer] = useState(0)

  useEffect(() => {
   let user = getJoinedUser()
   addNewUser(user)
   if(rerender === 0 ) {
    indexUserTimer === activeUsers.length - 1 ? setIndexUserTimer(0) : setIndexUserTimer(indexUserTimer + 1)
  }
  }, [rerender])

  function addNewUser(user) {
    setActiveUsers([...users, user])
  }

  return (
    <section className={styles.userListAll}>
        <div className={styles.userList}>
          <div className={styles.userListAllInfo}>
              <h2>Ход:</h2>
              <div><h2 >Параметры и требования:</h2></div>
              <p>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</p>
              <p>Срок изготовления лота в днях</p>
              <p>Гарантийные обязательства в месяцах</p>
              <p>Условия оплаты</p>
              <p>Стоимость изготовления лота в руб.без НДС</p>
          </div>
          {activeUsers.map((user, index) => {
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
          })}
        </div>
    </section>
  )
}

export default UsersList