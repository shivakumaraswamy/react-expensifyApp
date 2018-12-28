import React from "react";
import ReactDom from "react-dom";
import AppRouter, {history} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { setStartExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase";
import {login, logout} from './actions/auth';

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

let hasRendred =false;
const renderApp = () => {
    if(!hasRendred){
        ReactDom.render(jsx, document.getElementById("app"));
        hasRendred=true;
    }
};
ReactDom.render(<p>Loading...</p>, document.getElementById("app"));


firebase.auth().onAuthStateChanged(user => {
  if (user) {
      store.dispatch(login(user.uid));
    store.dispatch(setStartExpenses()).then(() => {
        renderApp();
        console.log('uid:', user.uid);
        if(history.location.pathname === '/'){
            history.push('/dashboard');
        }
      });
  } else {
      store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
