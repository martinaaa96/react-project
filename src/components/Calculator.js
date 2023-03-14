import Buttons from "./Buttons";
import Operator from "./Operator";
import Output from "./Output";

import style from '../css/App.module.css'


export default function Calculator(){

    return (
        <div className={style["calculator"]}>
        <Output/>
        <div className={style["calculator__keys"]}>
          <Operator/>
         <Buttons/>
          
        </div>
      </div>

    )
}