import style from '../css/App.module.css'

export default function Buttons(){

    return (
        <>
        <button className={style["calculator__key"]}>7</button>
        <button className={style["calculator__key"]}>8</button>
        <button className={style["calculator__key"]}>9</button>
        <button className={style["calculator__key"]}>4</button>
        <button className={style["calculator__key"]}>5</button>
        <button className={style["calculator__key"]}>6</button>
        <button className={style["calculator__key"]}>1</button>
        <button className={style["calculator__key"]}>2</button>
        <button className={style["calculator__key"]}>3</button>
        <button className={style["calculator__key"]}>0</button>
        <button className={style["calculator__key"]}>.</button>
        <button className={style["calculator__key"]}>AC</button>
        </>
    )
}