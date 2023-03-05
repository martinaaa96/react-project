import Buttons from "./Buttons";
import Operator from "./Operator";
import Output from "./Output";
import React from "react";
import style from '../css/App.module.css'


export default function Calculator(){

    return (
        <div className={style["calculator"]}>
        <Output/>
        <div className={style["calculator__keys"]}>
          <Operator/>
         <Buttons/>
          <button className={style["calculator__key calculator__key--enter"]}>=</button>
        </div>
      </div>

    )
}