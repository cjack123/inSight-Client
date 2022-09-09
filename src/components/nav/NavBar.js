import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">inSight</Link>
                </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/giftcards">Gift Cards</Link>
                </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/trade">Trades</Link>
                </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/blog">Blog</Link>
                </li>
        </ul>
    )
}