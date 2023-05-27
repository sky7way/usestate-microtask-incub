import React, {useState} from 'react';
import './App.css';

function App() {

    // let a = 0;

    let[a, setA]=useState(0);
    const onClickHandler = () => {
        setA(++a);
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>incriment</button>
        </div>
    );
}

export default App;
