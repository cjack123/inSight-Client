import React from "react"
import "./transact.css"

export const TransactCard = ({ transact }) => {

    return (
        <>

        <article className="transact">

                    <section key={`transact--${transact.id}`} className="transact">
                    <br></br>
                    <br></br>
                    <div className="transact__number">Card: {transact.card}</div>
                        <div className="transact__number">Transaction Date: {transact.transaction_date}</div>
                        <div className="transact__type">Transaction Type: {transact.transaction_type}</div>
                        <div className="transact__store">Store: {transact.store}</div>
                        <div className="transact__amount">Amount: {transact.amount}</div>
                        {/* <div className="buttons">
                        <Link to={`/transacts/${transact.id}`}>
                            <button>transact Details</button>
                            </Link>
                        <button type="button" onClick={() => removeTransact(transact.id)}>Delete Transact</button>
                        </div> */}
                    <br></br>
                    </section>
        </article>
        </>
    )
}