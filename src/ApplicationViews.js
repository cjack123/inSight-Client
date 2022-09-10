import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { GCard } from "./components/GiftCard/GCard"


export const ApplicationViews = () => {
    return <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/giftcards">
                <GCard />
            </Route>
               
        </>
    
}