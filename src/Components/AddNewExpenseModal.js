import React from "react";

const AddNewExpenseModal = () => (
  <div className="add-expense-modal modal-window">
    <form className="add-expense-form">
      <header className="modal-header add-expense-header">
        Add new Expense
      </header>
      <div className="expense-name-input input-div">
        <label for="expense-name">Expense Name</label>
        <input id="expense-name" type="text" required />
      </div>
      <div className="expense-amt-input input-div">
        <label for="expense-amount">Amount</label>
        <input id="expense-amount" type="number" required />
      </div>
      <div className="expense-partner-input input-div">
        <label for="expense-partner">Select expense partner</label>
        <select name="expense-partner" id="expense-partner" required>
          <option value="choose">-Choose a friend-</option>
        </select>
      </div>
      <div className="payer-input input-div">
        <label for="payer">Paid by:</label>
        <select name="payer" id="payer" required />
      </div>
      <button type="submit" className="expense-btn modal-btn">
        Add Expense
      </button>
      <br />
      <button
        type="button"
        className="close-modal close-expense-modal modal-btn"
      >
        Cancel
      </button>
    </form>
  </div>
);

export default AddNewExpenseModal;
