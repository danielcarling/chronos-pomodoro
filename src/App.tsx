import { Timer } from './components/Timer';
import { Title } from './components/Title';

import './styles/global.css';
import './styles/theme.css';

export function App() {
   return (
      <>
         <Title />
         <Timer />
         {/* <Heading>
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
         </p> */}
      </>
   );
}
