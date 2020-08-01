import React, { useState, useContext } from 'react';

import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction, transactions } = useContext(GlobalContext);

    const InserirTexto = e => {

        setText(e.target.value);
    }

    const InserirQuantidade = e => {

        setAmount(e.target.value);
    }

    const onSubmit = e => {

        e.preventDefault();

        const newTransaction = {

            id: transactions.length + 1,
            text,
            amount: +amount
        }

        addTransaction(newTransaction);

    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={InserirTexto} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" value={amount} onChange={InserirQuantidade} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
