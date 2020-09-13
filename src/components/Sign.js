import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Header from "./Header";
import Decoration from "./Decoration";

const Sign = () => {
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [passwordRepeatErr, setPasswordRepeatErr] = useState("");

    const validate = () => {
        if (!email.includes('@') || !email.includes('.')) {
            setEmailErr(prevState => "Podany email jest nieprawidłowy");
            return false;
        } else if (password.length < 6) {
            setPasswordErr(prevState => "Podane hasło jest nieprawidłowe");
            return false;
        } else if (password !== passwordRepeat) {
            setPasswordRepeatErr(prevState => "Hasła muszą być takie same");
        } else {
            return true;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        setEmailErr(prevState => "");
        setPasswordErr(prevState => "");
        setPasswordRepeatErr(prevState => "");
        const isValid = validate();
        if (isValid) {
            console.log(email, password);
            setEmail(prevState => "");
            setPassword(prevState => "");
            setPasswordRepeat(prevState => "");
        }
    }

    return (
        <>
            <Header />
            <section className="login">
                <h2 className="login-header">Załóż konto</h2>
                <Decoration />
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
                    <label htmlFor="passwordRepeat">Powtórz hasło</label>
                    <input
                        className={passwordRepeatErr !== "" ? "error-input" : ""}
                        type="password"
                        name="passwordRepeat"
                        value={passwordRepeat}
                        onChange={e => setPasswordRepeat(e.target.value)}
                    />
                    <div className="error-msg">{passwordRepeatErr}</div>
                    <div className="login-buttons">
                        <Link to="/logowanie">Zaloguj się</Link>
                        <input type="submit" value="Załóż konto"/>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Sign;