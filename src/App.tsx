import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

import { CirclePlayIcon } from 'lucide-react';

import './styles/global.css';
import './styles/theme.css';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';

export function App() {
   return (
      <>
         <Container>
            <Logo />
         </Container>

         <Container>
            <Menu />
         </Container>

         <Container>
            <CountDown />
         </Container>

         <Container>
            <form className='form' action=''>
               <div className='formRow'>
                  <Input
                     id='taskId'
                     type='text'
                     labelText='task'
                     placeholder='Digite algo'
                  />
               </div>

               <div className='formRow'>
                  <p>Lorem ipsum dolor sit amet.</p>
               </div>

               <div className='formRow'>
                  <Cycles />
               </div>

               <div className='formRow'>
                  <button>
                     <CirclePlayIcon />
                  </button>
               </div>
            </form>
         </Container>
      </>
   );
}
