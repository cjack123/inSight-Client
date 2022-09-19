import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getCards, deleteCard } from './GCardManager';
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


    const removeCard = (id) => {
        deleteCard(id)
            .then(() => getCards().then(setCards));
    }
    

    return (
        <article className="cards">
            <h1>All Gift Cards</h1>
            <button className="btn" id="createBtn"
                onClick={() => {
                    history.push({ pathname: "/cards/new" })
            }}>Register New Card</button>

            {cards.map(card => 
                <GCard
                key={card.id}
                card={card}
                removeCard={removeCard} />
            )}

            
        </article>
    );
};
