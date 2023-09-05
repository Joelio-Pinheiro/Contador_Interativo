import styles from "./Button.module.css";
import { useState } from "react";
function Button({ nome, func }) {
    //nome = valor amostra no botão
    //func = função que o botão irá ter
    
    //Adicona um estado e variaveis para setar o tempo de parada do botão
    //Serve para clicar e segurar os botões, controle do tempo para não ficar adcionando muito rapido
    const [isPressing, setIsPressing] = useState(false);
    let pressTi;
    let pressTimer;
    
    const handlePressStart = () => {
        clearTimeout(pressTi);
        pressTimer = setTimeout(() => {
            setIsPressing(true);
        }, 500);
    };
    
    const handlePressEnd = () => {
        clearTimeout(pressTimer);
        setIsPressing(false);
    };

    if (isPressing) {
        pressTi = setTimeout(() => {
            func();
        }, 275);
    }
    
    //Setar do botão dependendo do valor passado
    let cor;
    if (nome == "+") {
        cor = "#38a152";
    } else if (nome == "-") {
        cor = "#a13854";
    } else {
        cor = "black";
    }

    //      className={styles.botao} onClick={() => { func() }}></button>
    return (
        <>
            <button
                className={styles.botao}
                onMouseDown={handlePressStart}
                onMouseUp={handlePressEnd}
                onMouseLeave={handlePressEnd}
                onClick={() => { func() }}
            >
                {nome}
            </button>
            <style jsx>{`
            button{
                background-color: ${cor};
            }
            `
            }</style>
        </>
    )

}
export default Button