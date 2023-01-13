import React from 'react';
import styles from './styles/TradeWindow.module.scss';
import UsersList from './UsersList';
import TradeButtons from './TradeButtons';
import Close from '../assets/close.png';


function TradeWindow() {

  return (
    <div className={styles.window}>
        <header className={styles.windowHeader}>
            <div className={styles.windowHeaderAndButton}>
              <h1>Ход торгов Тестовые торги на аппарат ЛОТОС 2033564 (13.01.2023)</h1>
              <button className={styles.windowClose}><img src={Close} alt='Close icon'/></button>
            </div>
            <hr/>
            <h3>Уважаемые участники, во время вашего ходы вы можете изменить параметры торгов,
               указанных в таблице:</h3>
        </header>
        <UsersList />
        <TradeButtons />
    </div>
  )
}

export default TradeWindow