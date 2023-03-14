import style from '../css/App.module.css'

export default function Buttons({
    handleClick,
    handleClear,
    handleResult,
}){

    return (
        <>
        <button className={style["calculator__key"]}onClick={handleClick}>7</button>
        <button className={style["calculator__key"]}onClick={handleClick}>8</button>
        <button className={style["calculator__key"]}onClick={handleClick}>9</button>
        <button className={style["calculator__key"]}onClick={handleClick}>4</button>
        <button className={style["calculator__key"]}onClick={handleClick}>5</button>
        <button className={style["calculator__key"]}onClick={handleClick}>6</button>
        
        <button className={style["calculator__key"]}onClick={handleClick}>1</button>
        <button className={style["calculator__key"]}onClick={handleClick}>2</button>
        <button className={style["calculator__key"]}onClick={handleClick}>3</button>
        <button className={style["calculator__key"]}onClick={handleClick}>0</button>
       
        <button className={style["calculator__key"]}onClick={handleClick}>.</button>
        <button className={style["calculator__key"]} onClick={handleClear}>AC</button>
        <button className={style["calculator__key--enter"]}onClick={handleResult}>=</button>
        </>
    )
}