import Buttons from "./Buttons";
import Operator from "./Operator";
import Output from "./Output";

export default function Calculator(){

    return (
        <div className="calculator">
        <Output/>
        <div className="calculator__keys">
          <Operator/>
         <Buttons/>
          <button className="calculator__key calculator__key--enter">=</button>
        </div>
      </div>

    )
}