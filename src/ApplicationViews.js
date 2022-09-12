import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
// import { GCard } from "./components/GiftCard/GCard"
import { GCardList } from "./components/GiftCard/GCardList"
import { GCardDetails } from "./components/GiftCard/GCardDetails"
import { GCardForm } from "./components/GiftCard/GCardForm"
import { GCardEditForm } from "./components/GiftCard/GCardEditForm"


export const ApplicationViews = () => {
    
    return <>
            <Route exact path="/">
                <Home />
                </Route>
            <Route exact path="/cards">
                <GCardList />
                </Route>
            <Route exact path="/cards/:cardId(\d+)">
                <GCardDetails />
                </Route>
            <Route exact path="/cards/new">
                <GCardForm />
                </Route>
            <Route exact path="/cards/:cardId/edit">
                    <GCardEditForm />
                </Route>
            
               
        </>
    
}