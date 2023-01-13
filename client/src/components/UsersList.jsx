import React from 'react'
import styles from './styles/UsersList.module.scss';
import User from './User';
import { useState, useEffect } from 'react';
import { getJoinedUser } from '../services/timer';


const users = [
  {id: 1, price: 2500, date: 15, assurance: 2, percent: 30, improvement: "-", timer: true, name: 'ООО ВЕКТОР'},
  {id: 2, price: 3500, date: 10, assurance: 2, percent: 30, improvement: "-", timer: false, name: 'ООО Звонок'},
  {id: 3, price: 1500, date: 20, assurance: 2, percent: 30, improvement: "-", timer: false, name: 'ООО Мего-Сталь'},
]

function UsersList() {

 const [activeUsers, setActiveUsers] = useState([])
 const [rerender, setRerender] = useState('')
 const [indexUserTimer, setIndexUserTimer] = useState(0)

  useEffect(() => {
   let user = getJoinedUser()
   addNewUser(user)
   
   // Проверка таймера и перемещение его к следующему пользователю если он равен 0
   if(rerender === 0 ) {
    indexUserTimer === activeUsers.length - 1 ? setIndexUserTimer(0) : setIndexUserTimer(indexUserTimer + 1)
  }
  }, [rerender])

  //Добавление подключенного пользователя
  function addNewUser(user) {
    setActiveUsers([...users, user])
  }

  return (
    <section className={styles.userListAll}>
        <div className={styles.userList}>
          <div className={styles.userListAllInfo}>
              <h2>Ход:</h2>
              <h2 >Параметры и требования:</h2>
              <p>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</p>
              <p>Срок изготовления лота в днях</p>
              <p>Гарантийные обязательства в месяцах</p>
              <p>Условия оплаты</p>
              <p>Стоимость изготовления лота в руб.без НДС</p>
          </div>
          {
            activeUsers.map((user, index)=> {
              return <User 
              index={index} 
              user={user} 
              indexUserTimer={indexUserTimer} 
              setRerender={setRerender}/>
            })
          }
        </div>
    </section>
  )
}

export default UsersList