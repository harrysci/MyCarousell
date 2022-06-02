import { useState } from 'react';
import { BookItemProps } from '../interface/Carousell';
import styles from './BookItem.module.css';

export const BookItem=(props: BookItemProps)=>{
  const { book }=props;
  const [markState,setMark]=useState<boolean>(book.bookMark);

  return (
    <div style={{position:'relative', marginRight:16,}}>
    <img
      alt="book"
      className={styles.Book}
      src={require('../assets/Book.png')}
    >
    </img>
    <div className={styles.BookCon}>
      <div className={styles.BookTitle}>
        {book.title}
      </div>
      <div className={styles.BookDes}>
        {book.description}
      </div>
    </div>
    <button 
    className={styles.MarkButton}
    onClick={()=>setMark(!markState)}>
    {markState ?(<img 
    alt="mark"
    className={styles.BookMark}
    src={require('../assets/Bookmark_on.png')}></img>):(<img 
      alt="mark"
      className={styles.BookMark}
      src={require('../assets/Bookmark_off.png')}></img>)}
    </button>
    
    
    
    </div>
    
  )
}