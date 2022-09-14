import React, { useState, useEffect } from 'react';
import { TransactCard } from './TransactCard.js';
import { getCardTransById, getTransactById, deleteTransact, getCardTransactById } from './TransactManager.js';

import { useHistory, useParams } from 'react-router-dom'

export const TransactList = () => {
    //The initial state is an empty array
    const [transacts, setTransacts] = useState([]);
    let history = useHistory();
    const {cardId} = useParams();

    useEffect(() => {
        getCardTransById().then(data => setTransacts(data))
    }, [])

    const handleDeleteTransact = id => {
        deleteTransact(id)
        .then(() => getCardTransById().then(setTransacts));
    };

    return (
        <>
        {/* <h1>Transactions</h1> */}

        <article className="transactions">
            <h2>List of gift transactions</h2>
            <button className="btn" id="createBtn"
                onClick={() => {
                    history.push({ pathname: "/transactions/new" })
            }}>Register New transaction</button>


            <div className="container-cards">
                {transacts.map(transact =>
                    <TransactCard 
                    key={transact.id}
                    transact={transact}
                    handleDeleteTransact={handleDeleteTransact} />)}
            </div>
        </article>

        </>
    )


}