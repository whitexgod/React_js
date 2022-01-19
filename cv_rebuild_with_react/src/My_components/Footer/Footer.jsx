import "./Footer.css"
import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
            <footer className="Foot">
                <h4 className="Foot-h4">Tuhin Mukherjee © Copyright {year} </h4>
            </footer>
    )
}
