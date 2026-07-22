import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

import { TimerIcon } from 'lucide-react';

export function App() {
   return (
      <>
         <Heading>
            Olá Mundo!
            <button>
               <TimerIcon />
            </button>
         </Heading>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            rerum excepturi error amet et vero, eaque tempore similique, quae
            distinctio qui voluptates tempora voluptas ratione repudiandae
            magni, fugiat ipsam nostrum!
         </p>
      </>
   );
}
