const remoteURL = "http://localhost:8000"

////Read all Fields

export const getTransacts = () => {
  return fetch(`${remoteURL}/transactions`, {
    headers:{
      "Authorization": `Token ${localStorage.getItem("insight_token")}`
    }
  })
  .then(res => res.json())
}

export const getStores = () => {
  return fetch("http://localhost:8000/stores", {
      headers: {
          "Authorization": `Token ${localStorage.getItem("insight_token")}`
      }
  })
      .then(response => response.json())
}

export const getTypes = () => {
  return fetch(`${remoteURL}/transactiontypes`, {
      headers:{
          "Authorization": `Token ${localStorage.getItem("insight_token")}`  
      }
  })
  .then(res => res.json())
}

export const getCards = () => {
  return fetch("http://localhost:8000/cards", {
      headers:{
          "Authorization": `Token ${localStorage.getItem("insight_token")}`
      }
  })
  .then(response => response.json())
}


////Read all Field by ID

export const getTransactById = (transactionId) => {
  //be sure your transactions have good data and related to a card, store and transaction type
  return fetch(`${remoteURL}/transactions/${transactionId}`, {
    headers:{
      "Authorization": `Token ${localStorage.getItem("insight_token")}`
    }
  })
  .then(respond => respond.json())
}

export const getCardById = (cardId) => {
  return fetch(`${remoteURL}/cards/${cardId}`, {
      headers:{
          "Authorization": `Token ${localStorage.getItem("insight_token")}`,
      } 
  })
      .then(response => response.json())
}

export const getCardTransById = (cardId) => {
  //be sure your transactions have good data and related to a card and transaction
  return fetch(`${remoteURL}/transactions?cardId=${cardId}`,{
    headers:{
      "Authorization": `Token ${localStorage.getItem("insight_token")}`,
    }
  })
  .then(res => res.json())
}


///Create Transaction
export const createTransact = (transact) => {
  return fetch(`http://localhost:8000/transactions`, {
      method: "POST",
      headers:{
          "Authorization": `Token ${localStorage.getItem("insight_token")}`,
          "Content-Type": "application/json"
      },
      body: JSON.stringify(transact)
  })
      .then(res => res.json())
}

///Update Existing Transaction
export const updateTransact = (editedTransaction) => {
  return fetch(`${remoteURL}/transactions/${editedTransaction.id}`, {
      method: "PUT",
      headers: {
          "Authorization": `Token ${localStorage.getItem("insight_token")}`,
          "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTransaction)
  })
}



///Delete Transaction
export const deleteTransact = (id) => {
  return fetch(`${remoteURL}/transactions/${id}`, { 
      method: "DELETE",
      headers:{
          "Authorization": `Token ${localStorage.getItem("insight_token")}`
      },
      body: JSON.stringify(id)
  })
}