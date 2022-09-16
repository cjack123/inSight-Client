import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { createCard, getCards } from "./GCardManager"

export const GCardForm = () => {
    const history = useHistory()
    // const [card, setCard] = useState([])

    /*
        Since the input fields are bound to the values of 
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentCard, setCurrentCard] = useState({
        card_number: "",
        card_type: "",
        expiration_date: "",
        security_code: "",
        start_balance: "",
        current_balance: "",
        QRcode: ""

    })

    const [isLoading, setIsLoading] = useState(false);


    const changeCardState = (domCard) => {
        domCard.preventDefault() //Prevents the browser from submitting the form
        const user = JSON.parse(sessionStorage.getItem("insight_users"))
        const newCard = {...currentCard}
        // newCard.userId = user.id
        newCard.dateTime = new Date().toLocaleString()
        let newValue = domCard.target.value
        newCard[domCard.target.id] = newValue
        setCurrentCard(newCard)
    }

    return (
        <>
        <form className="cardForm">
            <h2 className="cardForm__title">Add a New Card!</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="card_number">Card Number:</label>
                    <input type="number" id="card_number" 
                        onChange={changeCardState}
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
                        onChange={changeCardState}
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
                        onChange={changeCardState}
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
                        onChange={changeCardState}
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
                        onChange={changeCardState}
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
                            onChange={changeCardState}
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
                            onChange={changeCardState}
                            required autoFocus className="form-control"
                            value={currentCard.QRcode}
                            placeholder="test"
                            />
                        </div>
                        </fieldset>

                <button type="submit"
                        onClick={c => {
                            // Prevent form from being submitted
                            c.preventDefault()

                            const card = {
                                card_number: parseInt(currentCard.card_number),
                                card_type: currentCard.card_type,
                                expiration_date: currentCard.expiration_date,
                                security_code: parseInt(currentCard.security_code),
                                start_balance: parseInt(currentCard.start_balance),
                                current_balance: parseInt(currentCard.current_balance),
                                QRcode: parseInt(currentCard.QRcode)
                            }

                            //Send POST request to your API
                            createCard(card)
                                .then(() => history.push("/cards"))
                        }}
                        className="btn btn-primary">Create Gift Card</button>


        </form>
        </>
    )

}
