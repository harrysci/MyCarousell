import styles from './style/Title.module.css';

export const Title=()=>{
  return (
    <div className={styles.title}>
      <div>
        <img
        alt="vector"
        src={require('../../src/assets/Vector.png')}
        />
      </div>
      <div className={styles.name}>
        내 서재
      </div>
    </div>
  )
  
}