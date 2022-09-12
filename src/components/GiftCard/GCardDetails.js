import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import { getCardById, deleteCard } from './GCardManager';

export const GCardDetails = () => {
    const {cardId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    const [ card, setCardDetail ] = useState({
        card_number: "",
        card_type: "",
        expiration_date: "",
        security_code: "",
        start_balance: "",
        current_balance: "",
        QRcode: ""
    })


    useEffect(() => {
        //getCardById(id) from CardManager and hang on to the data; put it into state
        console.log("useEffect", cardId)
        getCardById(cardId)
          .then(card => {
            setCardDetail(card);
            setIsLoading(false);
          });
    }, [cardId]);


    const handleDelete = () => {
        //invoke the delete function in CardManger and re-direct to the card list.
        setIsLoading(true);
        deleteCard(cardId).then(() =>
          history("/cards")
        );
    };

    
    return ( <>
        <section>
            <div className="card__number">Card Number: {card.card_number}</div>
            <div className="card__type">Card Type: {card.card_type}</div>
            <div className="card__expType">Expiration Date: {card.expiration_date}</div>
            <div className="card__sCode">Security Code: {card.security_code}</div>
            <div className="card__secBalance">Initial Balance: {card.start_balance}</div>
            <div className="card__currBalance">Current Balance: {card.current_balance}</div>
            <div>
                <Link to={`/cards/${card.id}/edit`}>
                    <button>Edit</button>
                    </Link></div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Delete Card
                </button>
        <br></br>
        </section>

    </> )
        

}
