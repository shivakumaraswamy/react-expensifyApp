import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {startEditExpense} from '../actions/expenses';
import {startRemoveExpense} from '../actions/expenses';
import "../styles/style.css";

const EditExpensePage = props => {
  console.log(props);
  return (
    <div className="container">
      <ExpenseForm
      expense={props.expense}
        onSubmit={expense => {
            props.dispatch(startEditExpense(props.expense.id, expense));
            props.history.push('/dashboard');
          console.log("updated", expense);
        }}
      />
      <button className="removeExpense" onClick={() => {
            props.dispatch(startRemoveExpense({id:props.expense.id}));
            props.history.push('/dashboard');
        }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};
export default connect(mapStateToProps)(EditExpensePage);
