import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'

import Home from "./components/Home";
import Login from "./components/Login";
import Sign from "./components/Sign";
import Logout from "./components/Logout";

const App = () => {

    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/logowanie">Login</Link>
                <Link to="/rejestracja">Sign Up</Link>
            </div>
            <Switch>
                <Route component={Home} path="/"/>
                <Route component={Login} path="logowanie"/>
                <Route component={Sign} exact="/rejestracja"/>
                <Route component={Logout} path="/wylogowano"/>
            </Switch>
        </>
    )
}

export default App;