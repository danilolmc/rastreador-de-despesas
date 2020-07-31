import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";


//Inicial State
const inicialState = {

    transactions: [

        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
};


// Create COntext
export const GlobalContext = createContext(inicialState);

// Provider Component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, inicialState);

    return (<GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}