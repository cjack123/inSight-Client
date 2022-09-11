const remoteURL = "http://localhost:8000"


export const getCards = () => {
    return fetch("http://localhost:8000/cards", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("insight_token")}`
        }
    })
        .then(response => response.json())
}

export const createCard = (card) => {
    return fetch(`${remoteURL}/cards`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("insight_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(card)
    })
        .then(res => res.json())
}