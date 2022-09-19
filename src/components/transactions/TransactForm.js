import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { createTransact, getTypes, getStores, getCards } from "./TransactManager"
import "./TransactForms.css"


export const TransactForm = () => {
    const history = useHistory()
    const [cards, setCards] = useState([])
    const [stores, setStores] = useState([])
    const [types, setTypes] = useState([])

    /*
        Since the input fields are bound to the values of 
        the properties of this state variable, you need to
        provide some default values.
    */
   const [currentTransact, setCurrentTransact] = useState({
        cardId: 0,
        storeId: 0,
        transaction_typeId: 0,
        transaction_date: "",
        amount: "",
    })

    const loadCards = () => {
        getCards().then(data => {setCards(data)
        console.log(cards)})
    }

    const loadStores = () => {
        getStores().then(data => {setStores(data)
        console.log(stores)})
    }

    const loadTypes = () => {
        getTypes().then(data => {setTypes(data)
        console.log(types)})
    }

    useEffect(() => {
        //TODO: Get the cards, then set the state
        loadCards()
    }, [])

    useEffect(() => {
        //TODO: Get the stores, then set the state
        loadStores()
    }, [])

    useEffect(() => {
        //TODO: Get the transaction types, then set the state
        loadTypes()
    }, [])

    const changeTransactState = (domEvent) => {
        //TODO: Complete the onChange function
        const newTransact = { ...currentTransact }
        let selectedVal = domEvent.target.value
        newTransact.dateTime = new Date().toLocaleString()

        if (domEvent.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
 
        newTransact[domEvent.target.id] = selectedVal
        // update state
        setCurrentTransact(newTransact)
    }

    return (
        <>
        <form className="TransactForm">
        <section className="move">
            <h2 className="transactForm__title">Report New Transaction</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="card">Card: </label>
                        <select value={currentTransact.cardId} 
                                name="card" id="cardId" 
                                onChange={changeTransactState} 
                                className="form-control" >
                                    <option value="0">Select Card</option>
                                    {cards.map(c => (
                                        <option key={c.id} value={c.id}>
                                            {c.card_number}
                                        </option>
                                    ))}
                            </select>
                            </div>
                            </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="store">Store: </label>
                        <select value={currentTransact.storeId} 
                                name="store" id="storeId" 
                                onChange={changeTransactState} 
                                className="form-control" >
                                    <option value="0">Select Store</option>
                                    {stores.map(s => (
                                        <option key={s.id} value={s.id}>
                                            {s.name}
                                        </option>
                                    ))}
                            </select>
                            </div>
                            </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="type">Transaction Type: </label>
                        <select value={currentTransact.typeId} 
                                name="type" id="typeId" 
                                onChange={changeTransactState} 
                                className="form-control" >
                                    <option value="0">Select Transaction Type</option>
                                    {types.map(t => (
                                        <option key={t.id} value={t.id}>
                                            {t.type}
                                        </option>
                                    ))}
                            </select>
                            </div>
                            </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="transaction_date">Transaction Date:</label>
                        <input type="date" id="transaction_date" 
                            onChange={changeTransactState}
                            required autoFocus className="form-control"
                            value={currentTransact.transaction_date}
                            placeholder="01/01/2022"
                            />
                        </div>
                        </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="amount">Amount:</label>
                        <input type="number" id="amount" 
                            onChange={changeTransactState}
                            required autoFocus className="form-control"
                            value={currentTransact.amount}
                            placeholder="1.99"
                            />
                        </div>
                        </fieldset>

                <button type="submit"
                    onClick={c => {
                        // Prevent form from being submitted
                        c.preventDefault()

                        const transact = {
                            card: parseInt(currentTransact.cardId),
                            store: currentTransact.storeId,
                            transaction_type: currentTransact.transaction_typeId,
                            transaction_date: parseInt(currentTransact.transaction_date),
                            amount: parseInt(currentTransact.amount)
                        }

                        //Send POST request to your API
                        createTransact(transact)
                            .then(() => history.push("/cards"))
                    }}
                    className="btn btn-primary">Create Gift Card</button>
        </section>
        </form>

    </>

    )


}