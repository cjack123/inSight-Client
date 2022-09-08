import React from "react"
// import { Link, useNavigate } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "./Navbar.css"

export const Navbar = ({ clearUser, isAuthenticated }) => {


    return (
        <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
            <ul className="nav nav-pills nav-fill">
                <li>Gift Cards</li>
                <li>Trades</li>
                <li>Blog</li>
                {/* <li style="float:right"><a class="active" href="/index.html">Home</a></li> */}
            </ul>

        </nav>
    )
}