import React, {useState} from 'react';
import MyCard from './Card.js';

const LoadButton = ()=>{
    const [state, setState] = useState({
        loaded: false,
        preloader: false,
        feed: []
    })
    const loadFeed = () =>{
        // 1. Activate the preloader
        setState({...state, preloader: true})
        // 2. Make external request
        fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?date=${Date.now}`)
        // 3. Wait for json to finish
        .then(response => response.json()) //wait for json to finish
        // 4. Update the component state
        .then(json=>{
            setState({
                ...state, 
                loaded: true, 
                preloader: false, 
                feed: json})
        })
    }
    if (state.loaded===false && state.preloader === false){
        return(
            <button onClick={loadFeed}>Load</button>
            )
    }else if(state.preloader === true){
        return(
            <p>Loading...</p>
        )
    }
    
    else{
        return(
            <MyCard title="Visit Romania" 
            description="Enjoy nature in one of Romania's wild sanctuar" 
            button="Check offers Romania" 
            image="https://images.unsplash.com/photo-1578762291008-623d4fc84e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
            />
            )
    }
}

export default LoadButton;