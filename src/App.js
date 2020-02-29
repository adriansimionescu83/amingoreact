import React, {useState, useContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContext from './AppContext.js';
import LandingPage from './LandingPage.js';
import AboutPage from './AboutPage.js';
import ContactPage from './Contact.js';
import Product from './Product.js';
import MyNavigation from './Navigation.js';
import LoadFeedButton from './LoadFeedButton.js';

const App = () => {
    const [globalState, setGlobalState] = useState(
        {
          loggedIn: false,
        }
    )
    const LayoutRoute = (prop) =>{
        return(
            <div>
            <MyNavigation location={prop.location.pathname}/>
                    <Route 
                        path={prop.path}
                        exact={prop.exact}
                        component={prop.component}/>
            <MyNavigation location={prop.location.pathname}/>
            </div>
        )
    }
    return(
        <AppContext.Provider value={[globalState, setGlobalState]}>
            <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact component={LandingPage}/>
                <LayoutRoute path="/about" component={AboutPage}/>
                <LayoutRoute path="/contact" component={ContactPage}/>
                <LayoutRoute path="/product:productname" component={Product}/>
            </Switch>
            </BrowserRouter>
            <LoadFeedButton/>
        </AppContext.Provider>
    )
}

export default App;