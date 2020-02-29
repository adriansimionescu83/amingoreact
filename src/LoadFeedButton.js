import React, { useState, useContext } from 'react';
import CardLayout from './CardLayout';
import AppContext from './AppContext.js';
import Card from './Card.js';

const LoadFeedButton = () => {
    const [state, setState] = useState(
        { feed: [] }
    )
    const [globalState, setGlobalState] = useContext(
        AppContext
    )

    const loadFeed = () => {
        // Fetch request goes
        fetch(`${process.env.REACT_APP_BACKEND_URL}/feed/all`)
        .then(response => response.json())
        .then(json=> {
            setState(   
                {
                    ...state,
                    feed: json.results
                }
            )
        })
        
    }
    if(state.feed.length === 0) {
        return (
            <button onClick={loadFeed}>Load Feed</button>
        )
    } else {
        return (
            <CardLayout>
            {
                state.feed.map(
                    (item)=>
                    <Card 
                        title={``}
                        image={item.image}
                        description={item.description}
                        buttonLabel="View Post"
                    />
                )
            }
            </CardLayout>

        )
    }
}

export default LoadFeedButton;