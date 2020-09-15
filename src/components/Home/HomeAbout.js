import React from 'react';
import Decoration from "../Common/Decoration";

const HomeAbout = () => {
    return (
        <section className="about" id="about">
            <div className="about-info">
                <h2 className="about-info-header">O nas</h2>
                <Decoration />
                <p className="about-info-text">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <div className="about-info-sign" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Signature.svg`}}/>
            </div>
            <div className="about-photo" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/People.jpg`}}/>
        </section>
    )
}

export default HomeAbout;