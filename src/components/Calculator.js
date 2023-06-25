
import { useState } from "react";

export default function Calculator(){
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  
 
    return (
        <div className="calculator">
        <input className="calculator__output" type="text" value={value}/>
        <div className="calculator__keys">
        <button className="calculator__key"  value="+">+</button>
          <button className="calculator__key" value="-">-</button>
          <button className="calculator__key"  value="*">&times;</button>
          <button className="calculator__key"  value="/">÷</button>
          

         <button className="calculator__key"  value="7">7</button>
        <button className="calculator__key"  value="8">8</button>
        <button className="calculator__key"  value="9">9</button>
        <button className="calculator__key"  value="4">4</button>
        <button className="calculator__key"  value="5">5</button>
        <button className="calculator__key"  value="6">6</button>
        
        <button className="calculator__key"  value="1">1</button>
        <button className="calculator__key" value="2">2</button>
        <button className="calculator__key" value="3">3</button>
        <button className="calculator__key"  value="0">0</button>
       
        <button className="calculator__key"  value=".">.</button>
        <button className="calculator__key"  value="AC">AC</button>
        <button className="calculator__key--enter" value="=">=</button>
          
        </div>
      </div>

    )
}