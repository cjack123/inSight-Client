import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { updateCard, getCardById, getAllCategories } from './GCardManager'


export const GCardEditForm = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const {cardId} = useParams();

    //Sets card to be edited on page load
    const [currentCard, setCurrentCard] = useState({
        card_number: "",
        card_type: "",
        expiration_date: "",
        security_code: "",
        start_balance: "",
        current_balance: "",
        category: ""
    })

    const [categories, setCategories] = useState([])

    const handleFieldChange = evt => {
        const stateToChange = { ...currentCard };
        stateToChange[evt.target.id] = evt.target.value;
        setCurrentCard(stateToChange);
    };

    const updateExistingCard = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedCard = {
            id: cardId,
            card_number: currentCard.card_number,
            card_type: currentCard.card_type,
            expiration_date: currentCard.expiration_date,
            security_code: currentCard.security_code,
            start_balance: currentCard.start_balance,
            current_balance: currentCard.current_balance,
            category: currentCard.category
        };

        updateCard(editedCard)
            .then(() => history.push("/cards")
        )

        console.log(editedCard)
    }
    
    useEffect(() => {
        getCardById(cardId)
            .then(card => {
            setCurrentCard(card);
            setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        getAllCategories()
            .then(categoryData => setCategories(categoryData)
        )
    }, []); 

    useEffect(() => {console.log(currentCard)
    },[currentCard])

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
                    <div>
                    <label htmlFor="categories">Categories:</label>
                        <select id="category">
                            <option className="categories" onChange={handleFieldChange}>
                            Select Categories
                            </option>
                            {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.label}
                                    </option>
                                    ))}
                                </select>
                        </div>
                        </fieldset>
                <div className="alignRight">
                    <button
                    type="button" disabled={isLoading}
                    onClick={updateExistingCard}
                    className="btn btn-primary"
                    >Submit</button>
                    </div>
            </form>
        </>
    )
}