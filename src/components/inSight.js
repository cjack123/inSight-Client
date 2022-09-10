import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "../ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./inSight.css"

export const Insight = () => {
    
    return (
        <>
        <Route render={() => {
            if (localStorage.getItem("lu_token")) {
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
        </>
    )
} 