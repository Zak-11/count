import React, {useState} from 'react';
import './Counter.css'


const Counter = function () {
    const [counter, setCounter] = useState(5)

    function increment () {
       setCounter(counter +1)
    }

    function decrement () {
        setCounter(counter -1)
    }

    return (
        <div className={'wrapper'}>
            <div className={'counter_bloc'}>

                <h1 className={ ( counter === 5) ? 'stopCounterStyle' : 'namber'}>{counter}</h1>
                <div className={'button_bloc'}>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                </div>
            </div>


        </div>
    );
};

export default Counter;