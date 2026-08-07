import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';

import './styles/global.css';
import './styles/theme.css';
import { useState } from 'react';
import { Footer } from './components/Footer';

export function App() {
   const [cycleActive, setCycleActive] = useState(false);

   function handleClick() {
      event?.preventDefault();
      return cycleActive ? setCycleActive(false) : setCycleActive(true);
   }

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
                  <DefaultButton
                     cycleActive={cycleActive}
                     onClick={handleClick}
                     formAction={'.'}
                  />
               </div>
            </form>
         </Container>
         <Container>
            <Footer />
         </Container>
      </>
   );
}
