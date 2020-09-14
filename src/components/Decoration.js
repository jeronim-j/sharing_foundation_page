import React from "react";

const Decoration = () => {
    return <div
        className="decoration"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Decoration.svg`}}
    />
}

export default Decoration;