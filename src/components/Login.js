import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <>
            <header className="header-main" id="header">
                <section className="navbar-upper">
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/rejestracja">Załóż Konto</Link>
                </section>
                <section className="navbar-lower">
                    <Link to="/">Start</Link>
                    <Link to="/">O co chodzi?</Link>
                    <Link to="/">O nas</Link>
                    <Link to="/">Fundacja i oragnizacje</Link>
                    <Link to="/">Kontakt</Link>
                </section>
            </header>
            <section className="login">
                <h2 className="login-header">Zaloguj się</h2>
                <div className="login-decoration" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Decoration.svg`}}/>
                <form className="login-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password"/>
                </form>
                <div className="login-buttons">
                    <Link to="/rejestracja">Załóż Konto</Link>
                    <Link to="/">Zaloguj się</Link>
                </div>
            </section>
        </>
    )
}

export default Login;