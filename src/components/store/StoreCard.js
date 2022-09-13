import React from "react"
import { useHistory } from "react-router-dom"
import "./store.css"

export const StoreCard = ({ store,removeStore }) => {
    const history = useHistory()

    return (
        <>
            <br></br>
            <section className="store_card">
            <h3 className="store__name">Store Name: {store.name}</h3>
            <div className="buttons">
                <button type="button" onClick={() => removeStore(store.id)}>Delete Store</button>
                </div>
            </section>
            <br></br>
        </>
    )
}

