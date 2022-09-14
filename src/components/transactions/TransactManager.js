const remoteURL = "http://localhost:8000"

export const getTransactById = (transactionId) => {
  //be sure your transactions have good data and related to a card, store and transaction type
  return fetch(`${remoteURL}/transactions/${transactionId}?_expand=card&_expand=store&_expand=type`)
  .then(res => res.json())
}

export const getCardTransById = (cardId) => {
  //be sure your transactions have good data and related to a card and transaction
  return fetch(`${remoteURL}/transactions?cardId=${cardId}`)
  .then(res => res.json())
}

export const getTransacts = () => {
  return fetch(`${remoteURL}/transactions`, {
    headers:{
      "Authorization": `Token ${localStorage.getItem("insight_token")}`
    }
  })
  .then(res => res.json())
}






export const deleteTransact = (id) => {
  return fetch(`${remoteURL}/transactions/${id}`, { 
      method: "DELETE",
      headers:{
          "Authorization": `Token ${localStorage.getItem("insight_token")}`
      },
      body: JSON.stringify(id)
  })
}