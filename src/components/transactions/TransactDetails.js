import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom"
import { getTransactById, updateTransact } from "./TransactManager";
// import "./TransactDetail.css";

export const TransactDetail = () => {
  const {transactionId} = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [ transact, setTransact ] = useState({
    card: {card_number: 0},
    transaction_type: {type: 0},
    amount: "",
    transaction_date: "",
    store: {name:0}
  })

  // const loadTransact = () => {
  //   return getTransactById(transactionId)
  //     .then(data => {
  //       setTransact(data)
  //     })
  // }

  // useEffect(() => {
  //   console.log("useEffect", transactionId)
  //   loadTransact()
  //   console.log(transact)
  // }, [])


  useEffect(() => {
    //getCardById(id) from CardManager and hang on to the data; put it into state
    console.log("useEffect", transactionId)
    getTransactById(transactionId)
      .then(transact => {
        setTransact(transact);
        setIsLoading(false);
      });
  }, [transactionId]);


  return (
    <>
      <h1>Hello</h1>
        <section className="transact">
          <div className="transact__name">Card Number: {transact.card.card_number}</div>
          <div className="transact__date">Transaction Date: {transact.transaction_date}</div>
          <div className="transact__type">Transaction Type: {transact.transaction_type.type}</div>
          <div className="transact__storeName">Store: {transact.store.name}</div>
          <div className="transact__amount">Amount: {transact.amount}</div>
          {/* <button type="button" disabled={isLoading} onClick={handleDelete}>
              Discharge
            </button> */}
            </section>
    </>
  );
};
