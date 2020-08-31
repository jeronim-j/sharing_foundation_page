import React from "react";
import {Link} from 'react-router-dom'

const HomeHeader = () => {
    return (
        <header className="header-main">
            <section className="navbar-upper">
                <Link to="/logowanie">Zaloguj</Link>
                <Link to="/rejestracja">Załóż Konto</Link>
            </section>
            <section className="navbar-lower">
                <a href="#">Start</a>
                <a href="#">O co chodzi?</a>
                <a href="#">O nas</a>
                <a href="#">Fundacja i oragnizacje</a>
                <a href="#">Kontakt</a>
            </section>
        </header>

    )
}

export default HomeHeader;