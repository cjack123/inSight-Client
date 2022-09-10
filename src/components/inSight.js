import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "../ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./inSight.css"

export const Insight = () => {
    
    return (
        <>
        <Route render={() => {
            if (localStorage.getItem("insight_token")) {
                return <>
                    <Route>
                        <NavBar />
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
            </Route>

        <Route path="/register">
            <Register />
            </Route>
        </>
    )
} 