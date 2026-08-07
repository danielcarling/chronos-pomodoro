import {
   HouseIcon,
   HistoryIcon,
   SettingsIcon,
   SunIcon,
   MoonIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
   const [theme, setTheme] = useState<AvaliableThemes>('dark');

   function handleThemeChange(
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
   ) {
      event.preventDefault(); // Não segue o link

      setTheme(prevTheme => {
         const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
         return nextTheme;
      });
   }

   useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
   }, [theme]);

   return (
      <>
         <nav className={styles.menu}>
            <a
               href='#'
               className={styles.menuLink}
               aria-label='Ir para a Home'
               title='Ir para a Home'
            >
               <HouseIcon />
            </a>
            <a
               href='#'
               className={styles.menuLink}
               aria-label='Ver Histórico'
               title='Ver Histórico'
            >
               <HistoryIcon />
            </a>
            <a
               href='#'
               className={styles.menuLink}
               aria-label='Configurações'
               title='Configurações'
            >
               <SettingsIcon />
            </a>
            <a
               href=''
               className={styles.menuLink}
               aria-label='Mudar Tema'
               title='Mudar Tema'
               onClick={handleThemeChange}
            >
               {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </a>
         </nav>
      </>
   );
}
