

import { useState } from "react";

export default function Calculator(){
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case "AC":
        setInput("");
        setResult("");
        break;
      case ".":
        setInput(input.slice(0, -1));
        break;
      case "=":
        try {
          setResult(eval(input).toString());
        } catch (error) {
          setResult("Invalid Calculation");
        }
        break;
      default:
        setInput(input + value);
        break;
    }
  }
 
    return (
        <div className="calculator">
        <input className="calculator__output" type="text" defaultValue={input}/>
        <div className="calculator__keys">
        <button className="calculator__key" onClick={handleClick} value="+">+</button>
          <button className="calculator__key" onClick={handleClick} value="-">-</button>
          <button className="calculator__key" onClick={handleClick} value="*">&times;</button>
          <button className="calculator__key" onClick={handleClick} value="/">÷</button>
          

         <button className="calculator__key" onClick={handleClick} value="7">7</button>
        <button className="calculator__key"  onClick={handleClick} value="8">8</button>
        <button className="calculator__key" onClick={handleClick} value="9">9</button>
        <button className="calculator__key" onClick={handleClick} value="4">4</button>
        <button className="calculator__key" onClick={handleClick} value="5">5</button>
        <button className="calculator__key" onClick={handleClick} value="6">6</button>
        
        <button className="calculator__key" onClick={handleClick} value="1">1</button>
        <button className="calculator__key"onClick={handleClick} value="2">2</button>
        <button className="calculator__key" onClick={handleClick}value="3">3</button>
        <button className="calculator__key" onClick={handleClick} value="0">0</button>
       
        <button className="calculator__key" onClick={handleClick} value=".">.</button>
        <button className="calculator__key" onClick={handleClick} value="AC">AC</button>
        <button className="calculator__key--enter" onClick={handleClick} value="=">=</button>
          
        </div>
      </div>

    )
}