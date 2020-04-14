import React from "react";
import Modal from "react-modal";

function Header(props) {
  return (
    <div class="header">
      <header className="main-title">{props.title}</header>
    </div>
  );
}

function AddNewBtns(props) {
  const handleNewFriend = e => {
    props.openModal(e);
  };
  return (
    <div className="add-data">
      <div className="add-friend">
        <button
          onClick={handleNewFriend}
          className="add-friend-btn add-new-btn"
        >
          Add new Friend
        </button>
      </div>
      <div className="add-expense">
        <button className="add-expense-btn add-new-btn">Add new Expense</button>
      </div>
    </div>
  );
}

function AddNewFriendModal(props) {
  return (
    <Modal
      isOpen={props.isAddFriendModalOpen}
      contentLabel="Add New Friend"
      ariaHideApp={false}
      className="add-friend-modal modal-window"
    >
      <header className="modal-header add-friend-header">Add new Friend</header>
      <form className="add-friend-form">
        <div className="friend-name-input">
          <label for="friend-name">Name:</label>
          <input id="friend-name" type="text" required />
        </div>
        <button type="submit" className="friend-btn modal-btn">
          Add Friend
        </button>
        <br />
        <button
          type="button"
          className="close-modal close-friend-modal modal-btn"
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
}

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

function UsersData() {
  return <div className="users-data" />;
}

export default class AppDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendModal: false,
      expenseModal: false
    };
  }
  togglalModal = name => {
    this.setState({ name: this.state.name });
  };
  render() {
    const addFriendData = () => {
      console.log("added Friend details");
    };
    return (
      <div className="app-dashboard">
        <Header title="Go-Dutch App" />
        <AddNewBtns togglalModal={this.togglalModal} />
        <UsersData />
        <AddNewFriendModal
          isAddFriendModalOpen={this.state.isAddFriendModalOpen}
          addFriendData={addFriendData}
        />
        <AddNewExpenseModal />
      </div>
    );
  }
}
