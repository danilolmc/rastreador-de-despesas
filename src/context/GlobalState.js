import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";


//Inicial State
const inicialState = {

    transactions: []
};


// Create COntext
export const GlobalContext = createContext(inicialState);

// Provider Component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, inicialState);

    //Actions
    function deleteTransaction(id){

        dispatch({
            type: "DELETE_TANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction){

        dispatch({
            type: "ADD_TANSACTION",
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}> 
            {children}
        </GlobalContext.Provider>
    )
}