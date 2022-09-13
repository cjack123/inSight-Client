import React, { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { getAllStores, deleteStore } from "./StoreManager"
import { StoreCard } from "./StoreCard"

export const StoreList = () => {
    const [ stores, setStores ] = useState([])
    const history = useHistory();
    const {storeId} = useParams();

    useEffect(() => {
        getAllStores().then(data => setStores(data))
    }, [])

    const removeStore = (id) => {
        deleteStore(storeId)
            .then(() => getAllStores().then(setStores));
    }

    return (
        <article className="stores">
            <h2>Stores</h2>
            <button className="btn" id="createBtn"
                onClick={() => {
                    history.push({ pathname: "/cards" })
            }}>Return to Cards</button>

            {stores.map(store => 
                <StoreCard
                key={store.id}
                store={store}
                removeStore={removeStore} />
            )}

            
        </article>
    )

}