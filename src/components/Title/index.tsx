import {
   TimerIcon,
   HouseIcon,
   HistoryIcon,
   SettingsIcon,
   SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';

export function Title() {
   return (
      <>
         <div className={styles.title}>
            <TimerIcon size={60} />
            <h1>Chronos</h1>
            <div className={styles.nav}>
               <button className={styles.button}>
                  <HouseIcon size={30} />
               </button>
               <button className={styles.button}>
                  <HistoryIcon size={30} />
               </button>
               <button className={styles.button}>
                  <SettingsIcon size={30} />
               </button>
               <button className={styles.button}>
                  <SunIcon size={30} />
               </button>
            </div>
         </div>
      </>
   );
}
