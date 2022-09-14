import React from "react"
import { useHistory } from "react-router-dom"
import "./store.css"

export const TypeCard = ({ type }) => {
    const history = useHistory()

    return (
        <>
            <br></br>
            <section className="type_card">
            <h3 className="type__name">type Name: {type.type}</h3>
            </section>
            <br></br>
        </>
    )
}