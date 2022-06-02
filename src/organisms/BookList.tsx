import useAxios from 'axios-hooks';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
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
  
  const Tab = useMediaQuery({maxWidth:1024})
  const isDesktop= useMediaQuery({minWidth:1024, maxWidth:1270});
  const isDesktop2=useMediaQuery({minWidth: 1270,maxWidth:1516});
  const isDesktop3=useMediaQuery({minWidth: 1752});
  //console.log(book);

  const [limit,setLimit]=useState<number>(6);
  const [start,setStart]=useState<number>(0);
  const handleMedia=()=>{
    if(Tab) {
      setLimit(3);
    } else if(isDesktop){
      setLimit(4);
    } else if(isDesktop2){
      setLimit(5);
    } else if(isDesktop3){
      setLimit(6);
    }
  }
  useEffect(()=>{
    handleMedia()
  },);
  
  const book=bookList.filter((num,index)=>
    index<limit+start && index>=start
  );
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <div className={styles.ListArrow}>
        {start===0 ? 
        (<button className={styles.Button}>
          <img
          alt="prev"
          src={require('../assets/prev_off.png')}
          />
        </button>):(
        <button className={styles.Button} onClick={()=>setStart(start-limit)}>
          <img
          alt="prev"
          src={require('../assets/prev_on.png')}
          />
        </button>)}
      </div>
        <>
          {book.map((iter) =>
            <ListIt title={iter.title} des={iter.description}/>
          )}
        </>
      <div className={styles.ListArrow}>
        {start+limit>=99 ? (<button className={styles.Button}>
          <img
          alt="next"
          src={require('../assets/next_off.png')}
          />
        </button>):(<button className={styles.Button} onClick={()=>setStart(start+limit)}>
          <img
          alt="next"
          src={require('../assets/next_on.png')}
          />
        </button>)}
        
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