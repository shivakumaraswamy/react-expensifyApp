import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import "../styles/style.css";

const ExpenseList = (props) => (
    <div className="container listContainer">
        <h3 className="listHeading">Expense List</h3>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key = {expense.id} {...expense} />
        })}
       
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
