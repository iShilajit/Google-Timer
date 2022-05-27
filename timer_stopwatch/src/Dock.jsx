import React from 'react'
import { Landing } from './Components/Landing';
import styles from './Dock.module.css';

 const Dock = () => {
  return (
    <div className={styles.App}>
    <Landing/>
    </div>
  )
}
export default Dock;