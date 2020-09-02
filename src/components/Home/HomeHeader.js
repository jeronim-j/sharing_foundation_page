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
                <Scroll to="about" smooth={true} duration={500}>O nas</Scroll>
                <Scroll to="organizations" smooth={true} duration={500}>Fundacja i oragnizacje</Scroll>
                <Scroll to="contact" smooth={true} duration={500}>Kontakt</Scroll>
            </section>
        </header>
    )
}

export default HomeHeader;