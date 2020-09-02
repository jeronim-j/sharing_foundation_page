import React from 'react';
import {Link} from "react-router-dom";

const Home4Steps = () => {
    return (
        <section className="steps-container">
            <div className="steps-header">
                <span className="steps-header-text">Wystarczą 4 proste kroki</span>
                <div className="steps-header-decoration"
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Decoration.svg`}}/>
            </div>
            <div className="steps-articles">
                <div className="steps-article">
                    <div className="steps-article-icon" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Icon-1.svg`}} />
                    <span className="steps-article-description">Wybierz rzeczy</span>
                    <hr className="steps-article-break"/>
                    <span className="steps-article-text">ubrania, zabawki, sprzęt i inne</span>
                </div>
                <div className="steps-article">
                    <div className="steps-article-icon" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Icon-2.svg`}} />
                    <span className="steps-article-description">Spakuj je</span>
                    <hr className="steps-article-break"/>
                    <span className="steps-article-text">skorzystaj z worków na śmieci</span>
                </div>
                <div className="steps-article">
                    <div className="steps-article-icon" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Icon-3.svg`}} />
                    <span className="steps-article-description">Zdecyduj komu chcesz pomóc</span>
                    <hr className="steps-article-break"/>
                    <span className="steps-article-text">wybierz zaufane miejsce</span>
                </div>
                <div className="steps-article">
                    <div className="steps-article-icon" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Icon-4.svg`}} />
                    <span className="steps-article-description">Zamów kuriera</span>
                    <hr className="steps-article-break"/>
                    <span className="steps-article-text">kurier przyjedzie w dogodnym terminie</span>
                </div>

            </div>
            <div className="steps-call-to-action">
                <Link to="/logowanie">ODDAJ RZECZY</Link>
            </div>
        </section>
    )
}

export default Home4Steps;