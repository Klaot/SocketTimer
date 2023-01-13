import React from 'react';
import Chat from '../assets/chat.png';
import Update from '../assets/refresh.png';
import Paste from '../assets/paste.png';
import Hammer from '../assets/hammer.png';
import Close from '../assets/close.png';
import styles from './styles/TradeButtons.module.scss';

function TradeButtons() {
  return (
    <div className={styles.tradeButtonsAll}>
            <button className={styles.chatButton}>Чат<img src={Chat} alt='Chat icon'/></button>
            <button className={styles.refreshButton}>Обновить<img src={Update} alt='Update icon'/></button>
            <button className={styles.stopTradeButton}>Завершить торги<img src={Hammer} alt='Hammer icon'/></button>
            <button className={styles.tradeReportButton}>Отчет<img src={Paste} alt='Paste icon'/></button>
            <button className={styles.tradeCloseWindowButton}>Закрыть<img src={Close} alt='Close icon'/></button>
    </div>
  )
}

export default TradeButtons