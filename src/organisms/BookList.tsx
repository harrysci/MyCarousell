import useAxios from 'axios-hooks';
import React from 'react';
import { Book, ListItemProps, ListProps } from '../interface/Carousell';
import styles from './BookList.module.css';


export const BookList=()=>{
  const [{ data: getData, loading: getLoading, error: getError },] =
		useAxios<Book[]>(
			{
				method: 'GET',
				url: 'https://api.jsonbin.io/b/616cd47a9548541c29c49b36',
			}
		);
  return (
    <div className={styles.Contain}>
        <div className={styles.ListTitle}>
        회전목마
        </div>
      {!getError && !getLoading && getData &&(
        <ListCarousell bookList={getData}/>
      )}
    </div>
  )
}


const ListCarousell=(props:ListProps):JSX.Element=>{
  const {bookList}=props;
  let limit=6;
  let start=0;
  const book=bookList.filter((num,index)=>
    index<limit && index>=start
  );
  //console.log(book);
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <div className={styles.ListArrow}>
        <button className={styles.Button}>
          <img
          src={require('../assets/left_off.png')}
          />
        </button>
      </div>
        <>
          {book.map((iter) =>
            <ListIt title={iter.title} des={iter.description}/>
          )}
        </>
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
const ListIt=(props: ListItemProps)=>{
  const { title, des }=props;
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
        {title}
      </div>
      <div className={styles.BookDes}>
        {des}
      </div>
    </div>
    <img 
    alt="mark"
    className={styles.BookMark}
    src={require('../assets/Bookmark_off.png')}></img>
    </div>
    
  )
}