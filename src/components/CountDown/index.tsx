import styles from './styles.module.css';

export function CountDown() {
   return (
      <div className={styles.timer_container}>
         <p>00:00</p>
      </div>
   );
}
