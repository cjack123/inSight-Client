import React, { useState } from "react";
// import {useParams, useHistory} from "react-router-dom"
// import { getProjectById, deleteProject } from "../../modules/ProjectManager";
// import { getGoalById, deleteGoal } from "../../modules/GoalManager";
import { TransactList } from "../transactions/TransactList";


export const CardTransact = () => {
    const [transact, setTransact] = useState({ 
        transaction_date: "", 
        transaction_type: 0, 
        store: 0, 
        amount: "", 
    });
    
    const [isLoading, setIsLoading] = useState(true);


    return (
        <>
        <TransactList />
        </>
    )

}