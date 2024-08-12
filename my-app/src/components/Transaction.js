import React from "react";

function Transaction({ transaction }) {
  const { date, description, category, amount } = transaction;
  return (
    // Have a table
    <tr>
      {/*Headings*/}
      <td></td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
