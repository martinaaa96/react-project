import style from '../css/App.module.css'

export default function Operator(){
    return (
        <>
        <button className={style["calculator__key"]}>+</button>
          <button className={style["calculator__key"]}>-</button>
          <button className={style["calculator__key"]}>&times;</button>
          <button className={style["calculator__key"]}>÷</button>
          </>
    )
}