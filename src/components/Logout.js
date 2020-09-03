import React from "react";
import {Link} from "react-router-dom";

const Logout = () => {
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
            <section className="logout">
                <h2 className="logout-header">Wylogowanie nastąpiło pomyślnie!</h2>
                <div className="logout-decoration" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Decoration.svg`}}/>
                <Link className="logout-link" to="/">Strona główna</Link>
            </section>
        </>
    )
}

export default Logout;