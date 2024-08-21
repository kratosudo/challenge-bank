import React, { useState } from "react";

const AddTransactionForm = ({ onAddTransaction}) => {
  const [formData, setFormData] = useState ({
    date:"",
    description:"",
    category:"",
    amount:"",
  });
  //handle form input changes
  const handleChange =(e) => {
    setFormData({
      ...formData, [e.target.name]:
      e.target.value,
    });
  };
  //handle form submission
  const handleSubmit =(e) => {
    e.preventDefault();
    onAddTransaction(formData);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  }
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date"
            required
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
