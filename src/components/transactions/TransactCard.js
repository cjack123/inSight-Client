import React from "react"
import { Link } from "react-router-dom"
import "./transact.css"

export const TransactCard = ({ transact, removeTransact }) => {

    return (
        <>

        <article className="transact">

                <section key={`transact--${transact.id}`} className="transact">
                    <br></br>
                    <br></br>
                    <div className="transact__number">Card: {transact.card.card_number}</div>
                        <div className="transact__number">Transaction Date: {transact.transaction_date}</div>
                        <div className="transact__type">Transaction Type: {transact.transaction_type.type}</div>
                        <div className="transact__store">Store: {transact.store.name}</div>
                        <div className="transact__amount">Amount: {transact.amount}</div>
                        <div className="buttons">
                        <Link to={`/transactions/${transact.id}`}>
                            <button>Transaction Details</button>
                            </Link>

                        <Link to={`/transactions/${transact.id}/edit`}>
                            <button>Edit Transaction</button>
                            </Link>

                        <button type="button" onClick={() => removeTransact(transact.id)}>Delete Transact</button>
                        </div>
                    <br></br>
                    </section>
        </article>
        </>
    )
}