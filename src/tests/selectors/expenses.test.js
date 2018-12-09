import selectExpenses from "../../selectors/expenses";

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
test("Should filter by text valur", () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
      expenses[2],expenses[1]
  ]);
});
