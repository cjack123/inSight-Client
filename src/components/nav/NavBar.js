import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/"> Home </Link>
                </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/giftcards">Gift Cards</Link>
                </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/trades">Trade</Link>
                </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/blogs">Blog</Link>
                </li>
            {/* <li className="navbar__item">
                Navigation link
                </li> */}
                {
                    (localStorage.getItem("insight_token") !== null) ?
                        <li className="navbar__item">
                            <Link className="nav-link"
                                onClick={() => {
                                    localStorage.removeItem("insight_token")
                                    history.push({ pathname: "/" })
                                }}
                            >Logout</Link>
                        </li> :
                        <>
                            <li className="navbar__item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="navbar__item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                }        
        </ul>
    )
}