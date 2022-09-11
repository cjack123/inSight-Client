import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { getCards, deleteCard, getCardById, getCardUserById } from './GCardManager';
import { GCard } from './GCard';
import "./GCard.css"

export const GCardList = (props) => {
    const [ cards, setCards ] = useState([])
    const history = useHistory();
    const {cardId} = useParams();
    // const userId = JSON.parse(sessionStorage.getItem("insight_users")).id;
    
    useEffect(() => {
        getCards().then(data => setCards(data))
    }, [])

    // const removeCard = (cardId) => {
    //     deleteCard(cardId)
    //         .then(() => getCardUserById(userId).then(setCards));
    // }

    const removeCard = (cardId) => {
        deleteCard(cardId)
            .then(() => getCards().then(setCards));
    }
    

    return (
        <article className="cards">
            <h2>List of gift cards</h2>
            <button className="btn" id="createBtn"
                onClick={() => {
                    history.push({ pathname: "/cards/new" })
                }}
            >Register New Card
            </button>
            {cards.map(card => 
                <GCard
                key={card.id}
                card={card}
                removeCard={removeCard} />
            )}

            
        </article>
    );
};
