import React, {useState} from 'react';
import './App.css';

function App() {

    // let a = 0;

    let[a, setA]=useState(0);
    const onClickIncrement= () => {
        setA(++a);
    }
    const onClickDecrement= () => {
        setA(--a);
    }
    const onClickReset= () => {
        setA(0);
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickIncrement}>increment</button>
            <button onClick={onClickDecrement}>decrement</button>
            <button onClick={onClickReset}>reset</button>
        </div>
    );
}

export default App;
