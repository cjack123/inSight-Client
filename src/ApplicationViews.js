import React from "react"
import { Route, Switch } from "react-router-dom"
import { Home } from "./Home"
import { GCard } from "./components/GiftCard/GCard"


export const ApplicationViews = () => {
    return (
        <>
            <Switch>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/giftcards */}
                <Route path="/giftcards" element={<GCard />} />
            </Switch>
        </>
    )
}