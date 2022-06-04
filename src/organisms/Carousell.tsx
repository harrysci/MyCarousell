import useAxios from 'axios-hooks';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BookListProps, NewBook } from '../interface/Carousell';
import { BookItem } from './BookItem';
import styles from './Carousell.module.css';


export const Carousell=()=>{
  /*api 요청 : useAxios-hook 이용 */
  const [{ data: getData, loading: getLoading, error: getError },] =
		useAxios<NewBook[]>(
			{
				method: 'GET',
				url: 'https://api.jsonbin.io/b/616cd47a9548541c29c49b36',
			}
    );

  /*새로고침 테스트용*/
  // useEffect(()=>{
  //   const arr:NewBook[]=[];
  //   localStorage.setItem("BookList",JSON.stringify(arr));
  // },[]);

  
  getData&& getData?.forEach((iter)=>
    iter.bookMark=false
  )
  return (
    <div className={styles.Contain}>
        <div className={styles.ListTitle}>
        회전목마
        </div>
      {!getError && !getLoading && getData &&(
        <BookList bookList={getData}/>
      )}
    </div>
  )
}


const BookList = (props:BookListProps) : JSX.Element => {
  /*서재 반응형 로직*/
  const { bookList }=props;
  
  const Tab = useMediaQuery({maxWidth:1024})
  const isDesktop= useMediaQuery({minWidth:1024, maxWidth:1270});
  const isDesktop2=useMediaQuery({minWidth: 1270,maxWidth:1516});
  const isDesktop3=useMediaQuery({minWidth: 1752});
  //console.log(book);
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

  /*화면 당 보여줄 책 로직*/
  const [limit,setLimit]=useState<number>(6);
  const [start,setStart]=useState<number>(0);
  const showBookList=bookList.filter((num,index)=>
    index<limit+start && index>=start
  );

  /*localStorage 저장정보 불러오기*/
  const localStore=localStorage.getItem("BookList");
  const localData:string[]=localStore&&JSON.parse(localStore);
  console.log("localData:",localData);
  showBookList.map((iter)=>{
      if(localData.includes(iter.id)){
        iter.bookMark=true;
      }
    }
  );
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <div className={styles.ListArrow}>
        {start<=0 ? 
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
          {showBookList.map((iter, index) =>
            <BookItem key={iter.id} book={iter}/>
          )}
        </>
      <div className={styles.ListArrow}>
        {start+limit>99 ? (<button className={styles.Button}>
          <img
          alt="next"
          src={require('../assets/next_off.png')}
          />
        </button>):(<button className={styles.Button} onClick={()=>setStart(limit+start)}>
          <img
          alt="next"
          src={require('../assets/next_on.png')}
          />
        </button>)}
        
      </div>
    </div>
  )
}
