import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import "../styles/style.css";

export class AddExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(expense) {
    this.props.startAddExpense(expense);
    this.props.history.push("/dashboard");
  }
  render() {
    return (
      <div className="container">
        <h3 className="addExpenseHeading">Expense form</h3>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined,mapDispatchToProps)(AddExpensePage);
