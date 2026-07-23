import {
   TimerIcon,
   HouseIcon,
   HistoryIcon,
   SettingsIcon,
   SunIcon,
} from 'lucide-react';
import styles from './Title.module.css';

export function Title() {
   return (
      <>
         <div className={styles.title}>
            <TimerIcon size={60} />
            <h1>Chronos</h1>
            <div className='nav'>
               <button>
                  <HouseIcon size={40} />
               </button>
               <button>
                  <HistoryIcon size={40} />
               </button>
               <button>
                  <SettingsIcon size={40} />
               </button>
               <button>
                  <SunIcon size={40} />
               </button>
            </div>
         </div>
      </>
   );
}
