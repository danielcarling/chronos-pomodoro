import styles from './Timer.module.css';

export function Timer() {
   return (
      <div className={styles.timer_container}>
         <p>00:00</p>
      </div>
   );
}
