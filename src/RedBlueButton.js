import React, {useState} from 'react';

const RedBlueButton = () => {
    // Add a satte to RedBlueButton component
    const [state, setState] = useState(
        {
            label:"blue",
            btnClass:"btn-primary" // we change the class name
        }
    ) // returns an array 

    const changeColor = ()=>{
        if (state.label === "blue"){
            setState({label:"red", btnClass:"btn-danger"})
        }else{
            setState({label:"blue", btnClass:"btn-primary"})
        }
    }
    return(
        <button 
            onClick = {changeColor} 
            className={`btn ${state.btnClass}`}> 
                {state.label}
        </button>
    )
}

export default RedBlueButton;