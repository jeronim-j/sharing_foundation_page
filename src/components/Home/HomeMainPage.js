import React from "react";
import {Link} from "react-router-dom";
import Decoration from "../Common/Decoration";

const HomeMainPage = () => {
    return (
        <section className="main-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Home-Hero-Image.jpg` }}>
            <div className="main-section">
                <h1 className='main-section-header'>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce.</h1>
                <Decoration />
                <div className="main-section-buttons">
                    <Link to="/logowanie" >ODDAJ<br/> RZECZY</Link>
                    <Link to="/logowanie" >ZORGANIZUJ<br/> ZBIÓRKĘ</Link>
                </div>
            </div>
        </section>
    )
}

export default HomeMainPage;