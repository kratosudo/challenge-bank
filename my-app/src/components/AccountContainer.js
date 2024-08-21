import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([]);
  const [searchTerm, setSearchTerm] =
  useState('');

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransaction(data));
  }, []);
   const handleAddTransaction = (newTransaction) => {
     fetch("http://localhost:3000/transactions", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(newTransaction),
     })
       .then((response) => response.json())
       .then((data) => setTransaction([...transaction, data]));
   };

   const filteredTransactions = transaction.filter((transaction) =>
     transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
   );

  return (
    <div>
      <Search  searchTerm={searchTerm}/>
      <AddTransactionForm  onAddTransaction={handleAddTransaction}/>
      <TransactionsList transaction={filteredTransactionsTransaction} />
    </div>
  );
}

export default AccountContainer;
