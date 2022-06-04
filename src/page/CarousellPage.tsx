import React from 'react';
import { Title } from '../organisms/Title';
import { SearchBar } from '../organisms/SearchBar';
import { Carousell } from '../organisms/Carousell';

export const CarousellPage=()=>{
  return (
    <div style={{flexDirection:'row', display:'flex'}}>
      <SearchBar/>
      <div>
        <Title/>
        <Carousell/>
        
      </div>
    </div>    
      
  )

}