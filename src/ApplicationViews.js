import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { GCard } from "./components/GiftCard/GCard"
import { GCardForm } from "./components/GiftCard/GCardForm"


export const ApplicationViews = () => {
    
    return <>
            <Route exact path="/">
                <Home />
                </Route>
            <Route exact path="/cards">
                <GCard />
                </Route>
            <Route exact path="/cards/new">
                <GCardForm />
                </Route>
               
        </>
    
}