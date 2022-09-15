import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
// import { GCard } from "./components/GiftCard/GCard"
import { GCardList } from "./components/GiftCard/GCardList"
import { GCardDetails } from "./components/GiftCard/GCardDetails"
import { GCardForm } from "./components/GiftCard/GCardForm"
import { GCardEditForm } from "./components/GiftCard/GCardEditForm"
// import { TransactCard } from "./components/transactions/TransactCard"
import { StoreList } from "./components/store/StoreList"
import { TransactList } from "./components/transactions/TransList"
import { TransactTest } from "./components/transactions/TransactTest"
import { TransactDetail } from "./components/transactions/TransactDetails"
import { TransactForm } from "./components/transactions/TransactForm"
import { TransactEdit } from "./components/transactions/TransactEdit"


export const ApplicationViews = () => {
    
    return <>
            <Route exact path="/">
                <Home />
                </Route>



            <Route exact path="/cards">
                <GCardList /> </Route>

            <Route exact path="/cards/:cardId(\d+)">
                <GCardDetails /> </Route>

            <Route exact path="/cards/new">
                <GCardForm /> </Route>

            <Route exact path="/cards/:cardId/edit">
                    <GCardEditForm /> </Route>
            
            <Route exact path="/transactions">
                <TransactList /> </Route>
            
            <Route exact path="/transactionsdetail">
                <TransactDetail /> </Route>

            <Route exact path="transactions/new">
                <TransactForm /> </Route>

            <Route exact path="transactions/:transactionId/edit">
                <TransactEdit />
            </Route>

            <Route exact path="/cards/:cardId/transactions">
                <TransactList /></Route>





            <Route exact path="/stores">
                <StoreList /> </Route>
               
        </>
    
}