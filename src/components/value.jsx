import React, {useState} from 'react';

const Value = function ()  {


    const [value, setValue] = useState(0)

    function increment () {
       setValue(value +1)
        if (value >= 5) {
            alert('достаточо')
        } else {
            alert('добавь еще')
        }
    }
    function decrement () {
        setValue(value -1)

    }
    return (
        <div>
            {value}
            <button onClick={increment}> VALUE+</button>
            <button onClick={ decrement}>VALUE-</button>
        </div>
    );
};

export default Value;