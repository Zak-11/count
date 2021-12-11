import React, {useState} from "react";
import Counter from "./components/Counter";
import Value from "./components/value";


function App() {

    const [value,setValue] = useState('ТЕКСТ БЫЛ ИЗМЕНЕН')



  return (
    <div className={'App'}>
       <Counter/>
        <Value/>
      <h2>{value}</h2>
         <input
             type='text'
             value={value}
             onChange={event => setValue(event.target.value)}
         />

    </div>
  );
}

export default App;
