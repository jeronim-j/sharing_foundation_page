import React from "react";
import {Link} from "react-router-dom";

const HomeMainPage = () => {
    return (
        <section className="main-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Home-Hero-Image.jpg` }}>
            <div className="main-section">
                <h1 className='main-section-header'>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div className="main-section-decoration"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Decoration.svg` }} />
                <div className="main-section-buttons">
                    <Link to="/logowanie" >ODDAJ RZECZY</Link>
                    <Link to="/logowanie" >ZORGANIZUJ ZBIÓRKĘ</Link>
                </div>
            </div>
        </section>
    )
}

export default HomeMainPage;