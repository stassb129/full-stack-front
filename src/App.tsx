import React, {useState} from 'react';
import './App.css';

function App() {
    // БЕЗ USE STATE
    let count = 0;
    const incCount = () => {
        count = count + 1
        console.log("Без useState: " + count)
    }

    // С USE STATE
    const [countWithUseState, setCountWithUseState] = useState(0);

    const incCountWithUseState = () => {
        setCountWithUseState(countWithUseState+1)
        console.log(countWithUseState)
    }

    return (
        <div className="App">
            <div>
                БЕЗ USESTATE
                <div>{count}</div>
                <button onClick={incCount}>add count</button>
            </div>
            <div>
                С USESTATE
                <div>{countWithUseState}</div>
                <button onClick={incCountWithUseState}>add with useState count</button>
            </div>

        </div>
    );
}

export default App;
