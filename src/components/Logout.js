import React from "react";
import {Link} from "react-router-dom";
import Header from "./Header";
import Decoration from "./Decoration";

const Logout = () => {
    return (
        <>
            <Header />
            <section className="logout">
                <h2 className="logout-header">Wylogowanie nastąpiło pomyślnie!</h2>
                <Decoration />
                <Link className="logout-link" to="/">Strona główna</Link>
            </section>
        </>
    )
}

export default Logout;