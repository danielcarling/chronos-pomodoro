import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/global.css';
import './styles/theme.css';

export function App() {
   return (
      <>
         <Container>
            <Logo />
         </Container>
         {/* <div className='container'>
            <div className='content'>
               <Title />
               <Timer />
            </div>
         </div> */}
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
