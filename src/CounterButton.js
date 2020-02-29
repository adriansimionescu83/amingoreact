import React, {useState} from 'react';

const CounterButton = ()=>{
    const [state, setState] = useState(0)
    
    const increaseCount = ()=>{
            let counter=state;
            setState(counter+1);
            }
    return(
        <button 
            onClick={increaseCount}>
            Number of clicks {state}
        </button>
    )    
}

export default CounterButton;


