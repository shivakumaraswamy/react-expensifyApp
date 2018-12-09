import filtersReducer from '../../reducers/filters';
import moment from'moment';

test('Should setup default filter values',()=>{
    const result = filtersReducer(undefined,{type:'@@INIT'});
    expect(result).toEqual({
        text: '',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortby to amount',()=>{
    const result = filtersReducer(undefined,{type:'SET_SORTBY_AMOUNT'});
    expect(result.sortBy).toBe('amount');
});