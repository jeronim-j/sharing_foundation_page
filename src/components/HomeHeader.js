import React from "react";
import { Link } from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';

const HomeHeader = () => {
    return (
        <header className="header-main" id="header">
            <section className="navbar-upper">
                <Link to="/logowanie">Zaloguj</Link>
                <Link to="/rejestracja">Załóż Konto</Link>
            </section>
            <section className="navbar-lower">
                <Scroll to="header" smooth={true} duration={500}>Start</Scroll>
                <Scroll to="columns" smooth={true} duration={500}>O co chodzi?</Scroll>
                <a href="/">O nas</a>
                <a href="/">Fundacja i oragnizacje</a>
                <a href="/">Kontakt</a>
            </section>
        </header>
    )
}

export default HomeHeader;