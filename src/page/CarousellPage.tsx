import React from 'react';
import { Title } from '../organisms/Title';
import { SearchBar } from '../organisms/SearchBar';
import { BookList } from '../organisms/BookList';

export const CarousellPage=()=>{
  return (
    <div style={{flexDirection:'row', backgroundColor:'green', display:'flex'}}>
      <SearchBar/>
      <div>
        <Title/>
        <BookList/>
      </div>
    </div>    
      
  )

}