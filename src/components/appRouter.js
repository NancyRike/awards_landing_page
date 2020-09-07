import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link 
}from 'react-router-dom';
import Homepage from '../pages/homepage';
import Policy from '../pages/policy';
import Authpage from '../pages/authpage';

const AppRouter = () =>{
    return(
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Homepage/>
                </Route>
                <Route path='/authpage'>
                    <Authpage/>
                </Route>
                <Route path='/policy'>
                    <Policy/>
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter 