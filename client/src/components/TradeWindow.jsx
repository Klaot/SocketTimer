import React from 'react';
import styles from './styles/TradeWindow.module.scss';
import UsersList from './UsersList';
import TradeButtons from './TradeButtons';


function TradeWindow() {

  return (
    <div className={styles.window}>
        <header className={styles.windowHeader}>
            <div className={styles.windowHeaderAndButton}>
              <h1>Ход торгов <span>Тестовые торги на аппарат ЛОТОС 2033564 (28.12.2022)</span></h1>
              <button>x</button>
            </div>
            <hr/>
            <h3>Уважаемые участники, во время вашего ходы вы можете изменить параметры торгов, указанных в таблице:</h3>
        </header>
        <UsersList />
        <TradeButtons />
    </div>
  )
}

export default TradeWindow