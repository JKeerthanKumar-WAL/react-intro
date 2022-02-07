import { useState } from "react";
function CounterByTwo(){
    let [count, setCount] = useState(0);
    function increase(){
        setCount(count+2);
    }
    function decrease(){
        setCount(count-2);
    }
    function reset(){
        setCount(0);
    }
    return(
        <div className="App-counter">
            <h1>Counter</h1>
            <h2><b>count = {count}</b></h2>
            <button onClick={increase} className="buttonone">Increase</button>
            <button onClick={decrease} className="buttonone">Decrease</button>
            <button onClick={reset} className="buttonone">Reset</button>
        </div>
    )
}
export default CounterByTwo;