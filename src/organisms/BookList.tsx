import React from 'react';
import styles from './BookList.module.css';
export const BookList=()=>{
  return (
    <div className={styles.Contain}>
        <div className={styles.ListTitle}>
        회전목마
        </div>
      <ListCarousell/>
    </div>
  )
}
const ListCarousell=()=>{
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <div className={styles.ListArrow}>
        <button className={styles.Button}>
          <img
          src={require('../assets/left_off.png')}
          />
        </button>
      </div>
      
      <ListItem/>
      <div className={styles.ListArrow}>
        <button className={styles.Button}>
          <img
          src={require('../assets/right_on.png')}
          />
        </button>
      </div>
      
      
    </div>
    
  )
}
const ListItem=()=>{
  return (
    <img
    src={require('../assets/Book.png')}
  />
  )
}