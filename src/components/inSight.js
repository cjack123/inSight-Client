import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"
import "./inSight.css"

export const Insight = () => {
    
    return (
        <>
            <nav>
                <NavBar />
                <ApplicationViews />
            </nav>
        </>
    )
} 