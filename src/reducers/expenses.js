
// Expenses Reducer
const expensesreducerDefaultstate = [];
export default (state = expensesreducerDefaultstate, action) => {
  switch (action.type) {
      case 'ADD_EXPENSE':
      return [
          ...state,
          action.expense
      ];
      case 'REMOVE_EXPENSE':
      return state.filter(({id})=> id != action.id);
      case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
            console.log('matched');
            return {
                ...expense,
                ...action.updates
            }
        }
        else {
            console.log('not matched');
            return expense;
        }
      });
    default:
      return state;
  }
};
