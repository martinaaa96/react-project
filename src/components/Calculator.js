import Buttons from "./Buttons";
import Operator from "./Operator";
import Output from "./Output";

import style from '../css/App.module.css'

import { useState } from "react";




export default function Calculator(){

  const [result , setResult ] = useState("");


  const handleClick = (e)=>{
    setResult(result.concat(e.target.name))
  }

  const handleClear = ()=>{
    setResult("");
  }

  const handleDelete = ()=>{

    setResult(result.slice(0,-1));

  }

  const handleResult = (e)=>{

    try {
      setResult(eval(result).toString());

    }catch(err){
      setResult("Error");

    }
  }
    return (
        <div className={style["calculator"]}>
        <Output />
        <div className={style["calculator__keys"]}>
          <Operator/>
         <Buttons/>
          
        </div>
      </div>

    )
}