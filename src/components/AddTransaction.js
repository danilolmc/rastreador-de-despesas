import React, { useState } from 'react'

export default function AddTransaction() {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);


    const InserirTexto = e => { 

        setText(e.target.value);
    }

    const InserirQuantidade = e => { 

        setAmount(e.target.value);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={InserirTexto} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" value={amount} onChange={InserirQuantidade}  placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
