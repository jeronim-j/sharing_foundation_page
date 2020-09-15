import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
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
    )
}

export default Header;