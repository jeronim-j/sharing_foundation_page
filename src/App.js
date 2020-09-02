import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Sign from "./components/Sign";
import Logout from "./components/Logout";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} exact path="/"/>
                <Route component={Login} path="/logowanie"/>
                <Route component={Sign} path="/rejestracja"/>
                <Route component={Logout} path="/wylogowano"/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;