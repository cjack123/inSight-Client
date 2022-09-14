// import React, { useState, useEffect } from "react";
// import {useParams, useHistory} from "react-router-dom"
// import { getTransactById } from "./TransactManager";
// // import "./TransactDetail.css";

// export const TransactDetail = () => {
//   const [transact, setTransact] = useState({ amount: "", transaction_date: "" });
//   const [isLoading, setIsLoading] = useState(true);

//   const {transactId} = useParams();
//   const {storeId} = useParams();
//   const history = useHistory();

//   useEffect(() => {
//     getTransactById(transactId)
//         .then(data => setTransact(data))
// }, [])

//   useEffect(() => {
//     if ((transact.store)?.length > 1)
//     (transact.store).forEach(store => {
//         if (transact.store.id === storeId) {
//             setTransact({
//                 id: transact.store.id,
//                 name: transact.store.name,
//             })
//         }
//     })
// }, [transact.store])

//   return (
//     <section className="transact">
//       {/* <div className="transact__type">{transact.transaction_type.type}</div> */}
//       {/* What's up with the question mark???? See below.*/}
//       {/* <div className="transact__storeName">Location: {transact.store.name}</div> */}
//       <div className="transact__amount">Amount: {transact.amount}</div>
//       {/* <button type="button" disabled={isLoading} onClick={handleDelete}>
//           Discharge
//         </button> */}
//     </section>
//   );
// };
