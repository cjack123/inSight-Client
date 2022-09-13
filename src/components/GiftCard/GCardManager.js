const remoteURL = "http://localhost:8000"


export const getCards = () => {
    return fetch("http://localhost:8000/cards", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("insight_token")}`
        }
    })
    .then(response => response.json())
}

export const getCardUserById = (userId) => {
    //be sure your goals have good data and related to a card
    return fetch(`${remoteURL}/cards?userId=${userId}`)
    .then(res => res.json())
}

export const createCard = (card) => {
    return fetch(`http://localhost:8000/cards`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("insight_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(card)
    })
        .then(res => res.json())
}

export const updateCard = (editedCard) => {
    return fetch(`http://localhost:8000/cards/${editedCard.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("insight_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedCard)
        }).then(data => data.json());
}

export const deleteCard = (id) => {
    return fetch(`${remoteURL}/cards/${id}`, { 
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("insight_token")}`
        },
        body: JSON.stringify(id)
    })
}

export const getCardById = (cardId) => {
    return fetch(`${remoteURL}/cards/${cardId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("insight_token")}`,
        } 
    })
        .then(response => response.json())
}