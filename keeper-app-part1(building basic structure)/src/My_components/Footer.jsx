import React from "react";
import "./Footer.css"

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className="Foot">
            <p className="Foot_p">Copyright Ⓒ {currentYear}</p>
        </div>
    )
}

export default Footer;