import React from "react";

const HomeContact = () => {
    return (
        <>
            <section className="contact" id="contact" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Background-Contact-Form.jpg` }}>
                <div className="contact-photo-filter"/>
                <div className="contact-section">
                    <h2 className="contact-header">Skontaktuj się z nami</h2>
                    <div className="contact-decoration"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Decoration.svg` }} />
                    <form className="contact-form">
                        <div className="contact-form-upper">
                            <label className="contact-form-upper-input">Wpisz swoje imię
                                <input type="text" placeholder="Krzysztof"/>
                            </label>
                            <label className="contact-form-upper-input">Wpisz swój email
                                <input type="email" placeholder="abc@xyz.pl"/>
                            </label>
                        </div>
                        <label className="contact-form-text">Wpisz swoją wiadomość
                            <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        </label>
                        <input type="submit" value="Wyślij"></input>
                    </form>
                </div>
            </section>
        </>
    )
}

export default HomeContact;