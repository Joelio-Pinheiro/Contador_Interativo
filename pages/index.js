import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from './button/Button';
import { useState } from "react";
import MostrarValor from './mostrarvalor/MostrarValor';

export default function Home() {
  //Adiciono um useState para captar alteração do contador
  const [count, setCount] = useState(0);
  //Funções para somar e subtrair do valor
  const aumentar = () => {
      setCount(count + 1)
  };
  const diminuir = () => {
      if (count >= 1) {
        setCount(count - 1)
      }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contador}>
        <div className={styles.valor}>
          <strong>{count}</strong>
        </div>
        <div className={styles.botoes}>
          <>
            <Button nome="-" func={diminuir} />
          </>
          <Button nome="+" func={aumentar} />
        </div>
      </div>
      <MostrarValor count={count} />
    </div>
  )
}
