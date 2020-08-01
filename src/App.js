import React from 'react';

import Header from "./components/Header";

import Balance from "./components/Balance";

import Expenses from "./components/Expenses";

import TransactionList from "./components/TransactionList";

import AddTransaction from "./components/AddTransaction";

import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
    
    <GlobalProvider>
      <div>

        <Header />

        <div className="container">
          <Balance />
          <Expenses />
          <AddTransaction />
        </div>

      </div>
      <div className="history">

        <TransactionList />
      </div>

      </GlobalProvider>

    </div>
  );
}

export default App;
