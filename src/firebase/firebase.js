import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBHMFu3mmmoZUo0IiVzmBRn67FAx4I3bes",
  authDomain: "expensify-2179.firebaseapp.com",
  databaseURL: "https://expensify-2179.firebaseio.com",
  projectId: "expensify-2179",
  storageBucket: "expensify-2179.appspot.com",
  messagingSenderId: "910316574331"
};

firebase.initializeApp(config);
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// });

// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// });

// database.ref('expenses').push({
//   description: "rent",
//   note: '',
//   amount: 198400,
//   createdat: 9534425243
// }).then(()=>{
//     console.log('data has saved');
// }).catch((e)=>{
//     console.log('Something went wrong ', e);
// });

// database.ref('name').set('pppp');