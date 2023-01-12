import React from 'react'
import styles from './styles/TradeButtons.module.scss'

function TradeButtons() {
  return (
    <div className={styles.tradeButtonsAll}>
        <div>
            <button>Чат</button>
            <button>Обновить</button>
            <button>Завершить торги</button>
            <button>Отчет</button>
            <button>Закрыть</button>
        </div>
    </div>
  )
}

export default TradeButtons