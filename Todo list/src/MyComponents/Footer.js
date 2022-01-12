import React from 'react'
//import './Footer.css'

export const Footer = () => {
    let footerstyle = {
        position: "absolute",
        top: "95vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerstyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
