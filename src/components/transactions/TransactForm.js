import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { createTransact, getTypes, getStores, getCards } from "./TransactManager"


export const TransactForm = () => {
    const history = useHistory()
    const [card, setCard] = useState([])
    const [store, setStore] = useState([])
    const [type, setType] = useState([])

    /*
        Since the input fields are bound to the values of 
        the properties of this state variable, you need to
        provide some default values.
    */
   const [currentTransact, setCurrentTransact] = useState({
        cardId: 0,
        storeId: 0,
        typeId: 0,
        transact_date: "",
        amount: "",
    })

    const loadCards = () => {
        getCards().then(data => {setCard(data)
        console.log(card)})
    }

    const loadStores = () => {
        getStores().then(data => {setStore(data)
        console.log(card)})
    }

    const loadTypes = () => {
        getTypes().then(data => {setType(data)
        console.log(card)})
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
 
        if (domEvent.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
 
        newTransact[domEvent.target.id] = selectedVal
        // update state
        setCurrentTransact(newTransact)
    }

    return (
        <form className="TransactForm">

            <h2 className="transactForm__title">Report New Transaction</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="card">Card: </label>
                        <select value={currentTransact.cardId} 
                                name="card" id="cardId" 
                                onChange={changeTransactState} 
                                className="form-control" >
                                    <option value="0">Select Card</option>
                                    {card.map(c => (
                                        <option key={c.id} value={c.id}>
                                            {c.number}
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
                                    {store.map(s => (
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
                                    {type.map(t => (
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
                            value={currentTransact.transact_date}
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
                            type: currentTransact.typeId,
                            transact_date: parseInt(currentTransact.transact_date),
                            amount: parseInt(currentTransact.amount)
                        }

                        //Send POST request to your API
                        createTransact(transact)
                            .then(() => history.push("/cards"))
                    }}
                    className="btn btn-primary">Create Gift Card</button>

        </form>



    )


}