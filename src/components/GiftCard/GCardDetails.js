import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { getCardById, deleteCard } from './GCardManager';

export const GCardDetail = () => {
    const {cardId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const history =useHistory

    const [ card, setCardDetail ] = useState({
        card_number: "",
        card_type: "",
        expiration_date: "",
        security_code: "",
        start_balance: "",
        current_balance: "",
        QRcode: ""
    })

    // const loadCard = () => {
    //     return getCardById(cardId)
    //         .then(data => {
    //             setCardDetail(data)
    //         })
    // }

    // useEffect(() => {
    //     loadCard()
    //     console.log(card)
    // }, [])

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
        {/* <section  key={`card--${card.id}`} className="card"> */}
        <section>
            <div className="card__number">Card Number: {card.card_number}</div>
            <div className="card__type">Card Type: {card.card_type}</div>
            <div className="card__expType">Expiration Date: {card.expiration_date}</div>
            <div className="card__sCode">Security Code: {card.security_code}</div>
            <div className="card__secBalance">Initial Balance: {card.start_balance}</div>
            <div className="card__currBalance">Current Balance: {card.current_balance}</div>
            <button type="button" enabled={isLoading} onClick={handleDelete}>
                Delete Card
                </button>
        <br></br>
        </section>

    </> )
        

}