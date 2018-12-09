import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Should setup remove expense object", () => {
  const action = removeExpense({ id: "123aaa" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123aaa"
  });
});

test("Should setup edit expense object", () => {
  const action = editExpense(123, "updated value");
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: 123,
    updates: "updated value"
  });
});

test("Should setup Add expense object with details", () => {
  const expenseData = {
    description: "Coffee",
    note: "Sample note",
    amount: 100,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense:{
    description: "Coffee",
    note: "Sample note",
    createdAt: 1000,
    amount: 100,
    id: expect.any(String)
    }
  });
});

test('Should setup add expense object without details', ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense:{
        description: "",
        note: "",
        createdAt: 0,
        amount: 0,
        id: expect.any(String)
        }
    });
});
