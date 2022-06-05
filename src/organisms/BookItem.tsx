import { useState } from 'react';
import { BookItemProps } from '../interface/Carousell';
import styles from './style/BookItem.module.css';

export const BookItem=(props: BookItemProps)=>{
  const { book }=props;
  /*북마크 state*/
  const [markState,setMark]=useState<boolean>(book.bookMark);
  
  /*북마크 시 localStorage 저장 로직 */
  const handleMark=()=>{
    const localStore=localStorage.getItem("BookList");
    const localData:string[]=localStore&&JSON.parse(localStore);

    if(markState===false && !localData.includes(book.id)){
      localData.push(book.id);
      localStorage.setItem("BookList", JSON.stringify(localData));
    } else if(markState===true){
      const filterData=localData.filter((iter)=> iter!==book.id);
      localStorage.setItem("BookList", JSON.stringify(filterData));
    }
    setMark(!markState);
  }
  
  
  return (
    <div style={{position:'relative', marginRight:16}}>
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
        onClick={()=>handleMark()}>
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