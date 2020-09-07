import React, {useState} from "react";

const HomeContact = () => {
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [msg, setMsg] = useState("");
    const[msgErr, setMsgErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const validate = () => {
        if (name.includes(' ')) {
            setNameErr(prevState => "Imię musi być jednym wyrazem");
            return false;
        } else if (!email.includes('@') || !email.includes('.')) {
            setEmailErr(prevState => "Podany email jest nieprawidłowy");
            return false;
        } else if (msg.length < 120) {
            setSuccessMsg(prevState => "Wiadomość została wysłana! Wkrótce się skontaktujemy.")
            setMsgErr(prevState => "Wiadomość musi być dłuższa niż 120 znaków")
        } else {
            setSuccessMsg(prevState => "Wiadomość została wysłana! Wkrótce się skontaktujemy.")
            return true;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        setNameErr(prevState => "");
        setEmailErr(prevState => "");
        setMsgErr(prevState => "");
        const isValid = validate();
        if (isValid) {
            console.log(name, email, msg);
            setName(prevState => "");
            setEmail(prevState => "");
            setMsg(prevState => "");
        }
    }


    return (
        <>
            <section className="contact" id="contact" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Background-Contact-Form.jpg` }}>
                <div className="contact-photo-filter"/>
                <div className="contact-section">
                    <h2 className="contact-header">Skontaktuj się z nami</h2>
                    <div className="contact-decoration"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Decoration.svg` }} />
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <div className="success">{successMsg}</div>
                        <div className="contact-form-upper">
                            <label className="contact-form-upper-input">Wpisz swoje imię
                                <input
                                    className={nameErr !== "" ? "error-input" : ""}
                                    type="text"
                                    value={name}
                                    placeholder="Krzysztof"
                                    onChange={e => setName(e.target.value)}
                                />
                                <div className="error-msg">{nameErr}</div>
                            </label>
                            <label className="contact-form-upper-input">Wpisz swój email
                                <input
                                    className={emailErr !== "" ? "error-input" : ""}
                                    type="email"
                                    value={email}
                                    placeholder="abc@xyz.pl"
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <div className="error-msg">{emailErr}</div>
                            </label>
                        </div>
                        <label className="contact-form-text">Wpisz swoją wiadomość
                            <textarea
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                className={msgErr !== "" ? "error-input" : ""}
                                value={msg}
                                onChange={e => setMsg(e.target.value)}
                            />
                            <div className="error-msg">{msgErr}</div>
                        </label>
                        <input type="submit" value="Wyślij"/>
                    </form>
                </div>
                <footer className="footer">
                    <span className="footer-text">Copyright by Coders Lab</span>
                    <div className="footer-icons">
                        <a href="https://facebook.com/" className="footer-icon" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Facebook.svg`}}> </a>
                            <a href="https://www.instagram.com/" className="footer-icon" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Instagram.svg`}}> </a>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default HomeContact;