import moment from 'moment';

// Filters Reducer
const filtersReducersDefaultState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  
  export default (state = filtersReducersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        };
        case 'SET_SORTBY_DATE':
          return {
            ...state,
            sortBy: 'date'
          }
        case 'SET_SORTBY_AMOUNT':
          return {
            ...state,
            sortBy: 'amount'
          }
        case 'SET_START_DATE':
          return {
            ...state,
            startdate: action.startDate
          }
        case 'SET_END_DATE':
          return {
            ...state,
            endDate: action.endDate
          }
      default:
        return state;
    }
  };