import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 345}));
store.dispatch(addExpense({description: 'Gas bill', amount: 4500, createdAt: 100}));
store.dispatch(setTextFilter('water'));
store.dispatch(addExpense({description: 'Coffee', amount: 500, createdAt: 1543872664497}));
store.dispatch(addExpense({description: 'Transport', amount: 2500, createdAt: 1545393600000}));
store.dispatch(addExpense({description: 'Shopping', amount: 12500, createdAt: 1545739200000}));

store.dispatch(addExpense({description: 'Rent', amount: 109500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

//console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);

ReactDom.render(jsx, document.getElementById('app'));