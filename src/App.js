import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionoList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';


function App() {
  return (
    <div>
    <Header />
    <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionoList />
    <AddTransaction />
    </div>
    </div>
  );
}

export default App;
