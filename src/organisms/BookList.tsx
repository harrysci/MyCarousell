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
    <div>
      <img
      src={require('../assets/left_off.png')}
      />
      <ListItem/>
      <img
      src={require('../assets/right_on.png')}
      />
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