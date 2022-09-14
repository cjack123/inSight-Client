import React, { useState, useEffect } from 'react';
import { TransactCard } from './TransactCard.js';
import { getTransacts, getCardTransById, getTransactById, deleteTransact, getCardTransactById } from './TransactManager.js';

import { useHistory, useParams } from 'react-router-dom'

export const TransactTest = () => {
    //The initial state is an empty array
    const [transacts, setTransacts] = useState([]);
    let history = useHistory();
    const {cardId} = useParams();

    useEffect(() => {
        getTransacts().then(data => setTransacts(data))
    }, [])

    const handleDeleteTransact = id => {
        deleteTransact(id)
        .then(() => getTransacts().then(setTransacts));
    };

    return (
        <>
        <article className="transactions">
            <h1>Transactions</h1>
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