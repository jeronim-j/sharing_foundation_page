import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");


    const validate = () => {
        if (!email.includes('@') || !email.includes('.')) {
            setEmailErr(prevState => "Podany email jest nieprawidłowy");
            return false;
        } else if (password.length < 6) {
            setPasswordErr(prevState => "Podane hasło jest nieprawidłowe");
            return false;
        } else {
            return true;
        }
    };


    const handleSubmit = event => {
        event.preventDefault();
        setEmailErr(prevState => "");
        setPasswordErr(prevState => "");
        const isValid = validate();
        if (isValid) {
            console.log(email, password);
            setEmail(prevState => "");
            setPassword(prevState => "");
        }
    }

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
                <div className="login-decoration"
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Decoration.svg`}}/>
                <form className="login-form" onSubmit={handleSubmit} noValidate>
                    <label htmlFor="email">Email</label>
                    <input
                        className={emailErr !== "" ? "error-input" : ""}
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div className="error-msg">{emailErr}</div>
                    <label htmlFor="password">Hasło</label>
                    <input
                        className={passwordErr !== "" ? "error-input" : ""}
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="error-msg">{passwordErr}</div>
                    <div className="login-buttons">
                        <Link to="/rejestracja">Załóż Konto</Link>
                        <input type="submit" value="Zaloguj się"/>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login;