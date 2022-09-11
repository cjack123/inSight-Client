import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { updateCard, getCardTypes, 
    getCardById 
} from './GCardManager'
import "./GCard.css"

export const UpdateCardForm = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const {cardId} = useParams();

    //Sets card to be edited on page load
    const [currentCard, setCurrentCard] = useState({
        card_number: "",
        card_type: "",
        expiration_date: "",
        security_code: "",
        start_balance: "",
        current_balance: "",
        QRcode: ""
    })

    const loadCard = () => {
        if (cardId) {
            getCardById(cardId)
                .then(data => {
                    setCurrentCard({
                        id: cardId,
                        card_number: data.card_number,
                        card_type: data.card_type,
                        expiration_date: data.expiration_date,
                        security_code: data.security_code,
                        start_balance: data.start_balance,
                        current_balance: data.current_balance,
                        QRcode: data.QRcode,
                    })
                })
        }
    }

    useEffect(() => {
        loadCard()
    }, [])

    useEffect(() => {
        console.log('currentCard', currentCard)
    }, [currentCard])

    const handleFieldChange = (domEvent) => {
        const updatedCard = {...currentCard}
        let selectedVal = domEvent.target.value
        updatedCard[domEvent.target.id] = selectedVal
        setCurrentCard(updatedCard)
    }


    return (
        <>
            <form className="cardForm">
            <h2 className="cardForm__title">Card Edit</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="card_number">Card Number:</label>
                    <input type="number" id="card_number" 
                        onChange={handleFieldChange}
                        required autoFocus className="form-control"
                        value={currentCard.card_number}
                        placeholder="Enter Card Number"
                        />
                    </div>
                    </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="card_type">Card Type:</label>
                    <input type="text" id="card_type" 
                        onChange={handleFieldChange}
                        required autoFocus className="form-control"
                        value={currentCard.card_type}
                        placeholder="Enter Card Type"
                        />
                    </div>
                    </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="expiration_date">Expiration Date:</label>
                    <input type="date" id="expiration_date" 
                        onChange={handleFieldChange}
                        required autoFocus className="form-control"
                        value={currentCard.expiration_date}
                        placeholder="01/01/2022"
                        />
                    </div>
                    </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="security_code">Security Code:</label>
                    <input type="number" id="security_code" max_length="16"
                        onChange={handleFieldChange}
                        required autoFocus className="form-control"
                        value={currentCard.security_code}
                        placeholder="678"
                        />
                    </div>
                    </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="start_balance">Initial Balance:</label>
                    <input type="number" id="start_balance" max_length="3"
                        max="500"
                        onChange={handleFieldChange}
                        required autoFocus className="form-control"
                        value={currentCard.start_balance}
                        placeholder="50.00"
                        />
                    </div>
                    </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="current_balance">Current Balance:</label>
                        <input type="number" id="current_balance" min="0.01" step="0.01" 
                            max="500"
                            onChange={handleFieldChange}
                            required autoFocus className="form-control"
                            value={currentCard.current_balance}
                            placeholder="50.00"
                            />
                        </div>
                        </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="QRcode">QRcode:</label>
                        <input type="text" id="QRcode" 
                            onChange={handleFieldChange}
                            required autoFocus className="form-control"
                            value={currentCard.QRcode}
                            placeholder="test"
                            />
                        </div>
                        </fieldset>
                <button type="submit"
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        // Changing to snake case to match back end
                        const editedCard = {
                            card_number: parseInt(currentCard.card_number),
                            card_type: currentCard.card_type,
                            expiration_date: currentCard.expiration_date,
                            security_code: parseInt(currentCard.security_code),
                            start_balance: parseInt(currentCard.start_balance),
                            current_balance: parseInt(currentCard.current_balance),
                            QRcode: parseInt(currentCard.QRcode)
                        }
                        
                        // Send POST request to your API
                        updateCard(editedCard, cardId)
                            .then(() => history.push('/card'))
                    }}
                    className="btn btn-primary" 
                    id="createBtn">Update Card</button>
            </form>
        </>
    )
}