import styles from './styles.module.css';

type InputProps = {
   id: string;
   labelText: string;
} & React.ComponentProps<'input'>;

export function Input({ id, type, labelText, ...rest }: InputProps) {
   return (
      <>
         {/* Primeiro exemplo é um operador ternário, o segundo apenas mostra o valor caso a condição seja verdadeira */}
         {/* {labelText ? <label htmlFor={id}>{labelText}</label> : ''} */}
         {/* {labelText && <label htmlFor={id}>{labelText}</label>} */}

         <label htmlFor={id}>{labelText}</label>
         <input className={styles.input} id={id} type={type} {...rest} />
      </>
   );
}
