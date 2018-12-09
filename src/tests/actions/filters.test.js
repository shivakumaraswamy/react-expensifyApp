import { setTextFilter, sortByDate, setStartDate } from "../../actions/filters";

test("Should setup Set filter action object", () => {
  const action = setTextFilter("Date");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Date"
  });
});

test('Should setup sortby filter action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SET_SORTBY_DATE'
    });
});

test('Should setup set start date filter action object',()=>{
    const action = setStartDate(12345);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: 12345
    });
});
