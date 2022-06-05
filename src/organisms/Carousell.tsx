import useAxios from 'axios-hooks';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BookListProps, NewBook } from '../interface/Carousell';
import { BookItem } from './BookItem';
import styles from './style/Carousell.module.css';


export const Carousell=()=>{
  /*api 요청 : useAxios-hook 이용 */
  const [{ data: getData, loading: getLoading, error: getError },] =
		useAxios<NewBook[]>(
			{
				method: 'GET',
				url: 'https://api.jsonbin.io/b/616cd47a9548541c29c49b36',
			}
    );
  getData&& getData?.forEach((iter)=>
    iter.bookMark=false
  )
  /*테스트용 새로고침*/
  useEffect(()=>{
    const arr:NewBook[]=[];
    localStorage.setItem("BookList",JSON.stringify(arr));
  },[]);

  
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
  const { bookList }=props;

  /*서재 반응형 로직*/
  const Tab = useMediaQuery({maxWidth:1150})
  const isDesktop= useMediaQuery({minWidth:1150, maxWidth:1396});
  const isDesktop2=useMediaQuery({minWidth: 1396,maxWidth:1642});
  const isDesktop3=useMediaQuery({minWidth: 1642});
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

  /*화면 당 보여줄 책의 갯수*/
  const [limit,setLimit]=useState<number>(6);
  const [start,setStart]=useState<number>(0);
  const showBookList=bookList.filter((num,index)=>
    index<limit+start && index>=start
  );

  /*localStorage 북마크 저장정보 불러오기*/
  const localStore=localStorage.getItem("BookList");
  const localData:string[]=localStore&&JSON.parse(localStore);
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
