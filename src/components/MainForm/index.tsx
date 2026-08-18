import { useState } from 'react';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import { DefaultButton } from '../DefaultButton';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
   const { setState } = useTaskContext();

   const [cycleActive, setCycleActive] = useState(false);

   function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      event.preventDefault();
      setCycleActive(prev => !prev);
   }
   return (
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
   );
}
