import selectExpensesTotal from '../../selectors/expenses-total';
const expenses = [
    {
      id: "1",
      description: "gum",
      amount: 321,
      createdAt: 1000,
      note: ""
    },
    {
      id: "2",
      description: "rent",
      amount: 3212,
      createdAt: 4000,
      note: ""
    },
    {
      id: "3",
      description: "Coffee",
      amount: 3214,
      createdAt: 5000,
      note: ""
    }
  ];

test('Should return 0 if no expenses', ()=>{
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('Should correctly add up a single expense', ()=>{
    const res = selectExpensesTotal(expenses[0]);
    expect(res).toBe(321);
});

test('Should correctly add up multiple expenses',()=>{
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(6747);
});