import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import styles from './styles.module.css';

type DefaultButtonProps = {
   cycleActive: boolean;
} & React.ComponentProps<'button'>;

export function DefaultButton({ cycleActive, ...props }: DefaultButtonProps) {
   return (
      <div className={styles.buttonContainer}>
         {cycleActive ? (
            <button
               className={`${styles.button} ${styles.cycleActive}`}
               {...props}
            >
               <StopCircleIcon />
            </button>
         ) : (
            <button
               className={`${styles.button} ${styles.cycleInactive}`}
               {...props}
            >
               <PlayCircleIcon />
            </button>
         )}
         {/* <button>
            {cycleActive ? <StopCircleIcon /> : <PlayCircleIcon />}
         </button> */}
      </div>
   );
}
