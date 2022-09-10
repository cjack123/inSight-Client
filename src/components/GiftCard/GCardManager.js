export const getCards = () => {
    return fetch("http://localhost:8000/cards", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("insight_token")}`
        }
    })
        .then(response => response.json())
}

export const createCard = (card) => {
    return fetch("http://localhost:8000/cards", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("insight_token")}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(card)
    })
        .then(res => res.json())
}


// export const getGameTypes = () => {
//     return fetch("http://localhost:8000/gametypes", {
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("lu_token")}`
//         }
//     })
//         .then(response => response.json())
// }
