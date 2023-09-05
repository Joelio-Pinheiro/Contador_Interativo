import React from 'react';
import styles from "./MostrarValor.module.css";
function MostrarValor({ count }) {

  // Gera os cards com base no valor do contador
  const cards = [];
  //Cria divs pela contagem e coloca em um array
  for (let i = 1; i <= count; i++) {
    cards.push(
      <div className={styles.cards} key={i}>{i}</div>
      );
  }

  return (
    <>
      <h2 className={styles.mostrarTabela}>Tabela de Cards</h2>
      {cards.length > 0 ? (
        <div className= {styles.card_table}>{cards}</div>
      ) : (
        <div className={styles.vazio}>Nenhum card foi adicionado</div>
      )}
    </>
  );
}

export default MostrarValor;
