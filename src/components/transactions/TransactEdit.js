import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { updateTransact, getTransactById, getTypes, getStores, getCards } from './TransactManager'



export const TransactEdit = () => {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const {transactionId} = useParams();
    const [cards, setCards] = useState([])
    const [stores, setStores] = useState([])
    const [types, setTypes] = useState([])

    //Sets transaction to be edited on page load
    const [currentTransact, setCurrentTransact] = useState({
        cardId: 0,
        storeId: 0,
        transaction_typeId: 1,
        transaction_date: "",
        amount: "",
    })

    const handleFieldChange = evt => {
        const stateToChange = { ...currentTransact };
        stateToChange[evt.target.id] = evt.target.value;
        setCurrentTransact(stateToChange);
    };


    const updateExistingTransact= evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedTransaction = {
            id: transactionId,
            card: parseInt(currentTransact.card.id),
            store: parseInt(currentTransact.storeId),
            transaction_type: parseInt(currentTransact.transaction_typeId),
            transaction_date: currentTransact.transaction_date,
            amount: parseFloat(currentTransact.amount)
        };

        updateTransact(editedTransaction)
            .then(() => history.push("/transactions")
        )
    };

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

    useEffect(() => {
        getTransactById(transactionId)
            .then(transaction => {
               const loadedTransaction = { ...transaction}
                loadedTransaction.transaction_typeId = transaction.transaction_type.id
                loadedTransaction.storeId = transaction.store.id
                setCurrentTransact(loadedTransaction);
            setIsLoading(false);
            });
    }, []);


    return (
        <>
        <form className="TransactForm">
        <section className="move">
        <h2 className="transactForm__title">Edit Transaction</h2>
{/* 
            <fieldset>
                <div className="form-group">
                    <label htmlFor="card">Card: </label>
                    <select value={currentTransact.cardId} 
                            name="card" id="cardId" 
                            onChange={handleFieldChange} 
                            className="form-control" >
                                <option value="0">Select Card</option>
                                {cards.map(c => (
                                    <option key={c.id} value={c.id}>
                                        {c.card_number}
                                    </option>
                                ))}
                        </select>
                        </div>
                        </fieldset> */}

            <fieldset>
                <div className="form-group">
                    <label htmlFor="store">Store: </label>
                    <select value={currentTransact.storeId} 
                            name="store" id="storeId" 
                            onChange={handleFieldChange} 
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
                        <select value={currentTransact.transaction_typeId} 
                                name="type" id="transaction_typeId" 
                                onChange={handleFieldChange} 
                                className="form-control" >
                                    <option>Select Transaction Type</option>
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
                        onChange={handleFieldChange}
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
                        onChange={handleFieldChange}
                        required autoFocus className="form-control"
                        value={currentTransact.amount}
                        placeholder="1.99"
                        />
                    </div>
                    </fieldset>

            <div className="alignRight">
                <button
                type="button" disabled={isLoading}
                onClick={updateExistingTransact}
                className="btn btn-primary"
                >Submit</button>
                </div>
        </section>
        </form>
    </>
    )
}