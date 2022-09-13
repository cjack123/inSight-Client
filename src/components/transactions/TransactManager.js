const remoteURL = "http://localhost:8088"

export const getTransactionById = (transactionId) => {
  //be sure your transactions have good data and related to a card, store and transaction type
  return fetch(`${remoteURL}/transactions/${transactionId}?_expand=card&_expand=store&_transactiontype`)
  .then(res => res.json())
}

export const getTransactions = () => {
  return fetch(`${remoteURL}/transactions`)
  .then(res => res.json())
}
