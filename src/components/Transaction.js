import React, { useContext } from 'react';

import { GlobalContext } from "../context/GlobalState";

export default function Transaction({transactions: {id,text,amount}}) {
    
    console.log(id,text,amount);

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = amount > 0 ? "+" : "-";

    return (
        <li className={amount > 0 ? "plus" : "minus"}>
            {text} <span>{sign}R$ {Math.abs(amount).toFixed(2)}</span>
            <button className="delete-btn" onClick={() => {alert(id);deleteTransaction(id)}}>x</button>
        </li>
    )
}
