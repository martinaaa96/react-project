import style from '../css/App.module.css'

export default function Operator(){
    return (
        <>
        <button className={style["calculator__key calculator__key--operator"]}>+</button>
          <button className={style["calculator__key calculator__key--operator"]}>-</button>
          <button className={style["calculator__key calculator__key--operator"]}>&times;</button>
          <button className={style["calculator__key calculator__key--operator"]}>÷</button>
          </>
    )
}