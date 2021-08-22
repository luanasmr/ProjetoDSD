import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Config from './pages/Config';

export default () => {
    return(
        <Switch>
            <Route exact path="/">
               <Home></Home>
            </Route>

            <Route exact path="/config">
                <Config></Config>
            </Route>

            <Route exact path="/sobre">
                Sobre
            </Route>
        </Switch>
    );
}