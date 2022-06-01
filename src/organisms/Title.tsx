import React from 'react';
import { useStyles } from './style';
import styles from './Title.module.css';

export const Title=()=>{
  //const classes = useStyles();
  return (
    <div className={styles.title}>
      <div>
        <img
        src={require('../../src/assets/Vector.png')}
        />
      </div>
      <div className={styles.name}>
        내 서재
      </div>
    </div>
  )
  
}