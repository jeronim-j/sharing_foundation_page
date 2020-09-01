import React from 'react';

const Home3Columns = () => {
    return (
        <section id="columns" className="columns" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/3-Columns-Background.png` }}>
            <div className="columns-article">
                <h1 className="columns-article-header">10</h1>
                <span className="columns-article-span">ODDANYCH WORKÓW</span>
                <p className="columns-article-text">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.
                </p>
            </div>
            <div className="columns-article">
                <h1 className="columns-article-header">5</h1>
                <span className="columns-article-span">WSPARTYCH ORGANIZACJI</span>
                <p className="columns-article-text">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.
                </p>
            </div>
            <div className="columns-article">
                <h1 className="columns-article-header">7</h1>
                <span className="columns-article-span">ZORGANIZOWANYCH ZBIÓREK</span>
                <p className="columns-article-text">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.
                </p>
            </div>
        </section>
    )
}

export default Home3Columns;