import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getCards } from "./GCardManager"

export const GCard = (props) => {
    const [ cards, setCards ] = useState([])

    useEffect(() => {
        getCards().then(data => setCards(data))
    }, [])

    const history = useHistory()

    return (
        <>
        <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
                history.push("/cards/new")
            }}>Register New Gift Card
        </button>

        <article className="cards">
            {
                cards.map(card => {
                    return <section key={`card--${card.id}`} className="card">
                        <div className="card__number">Card Number: {card.card_number}</div>
                        <div className="card__type">Card TYpe: {card.card_type}</div>
                        <div className="card__expType">Expiration Date: {card.expiration_date}</div>
                        <div className="card__sCode">Security Code: {card.security_code}</div>
                        <div className="card__secBalance">Initial Balance: {card.start_balance}</div>
                        <div className="card__currBalance">Current Balance: {card.current_balance}</div>
                        <br></br>
                    </section>
                })
            }
        </article>
        </>
    )
}