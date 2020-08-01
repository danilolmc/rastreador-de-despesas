import React, { useContext } from 'react';

import { GlobalContext } from "../context/GlobalState";

export default function Expenses() {

    const { transactions } = useContext(GlobalContext);

    const receita = transactions
        .filter(({ amount }) => amount > 0)
        .reduce((acc, { amount }) => (acc + amount), 0).toFixed(2);


    const despesa = (transactions
        .filter(({ amount }) => amount < 0)
        .reduce((acc, { amount }) => (acc + amount), 0) * -1).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">R${receita.replace(".",",")}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">R${despesa.replace(".",",")}</p>
            </div>
        </div>
    )
}
