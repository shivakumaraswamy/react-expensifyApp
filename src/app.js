import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {setStartExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import './firebase/firebase';

const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

//console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);

ReactDom.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(setStartExpenses()).then(()=>{
    ReactDom.render(jsx, document.getElementById('app'));
});
