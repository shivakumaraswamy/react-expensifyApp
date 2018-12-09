import React from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

const now = moment();
console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description:"",
      note: props.expense? props.expense.note:"",
      amount: props.expense? (props.expense.amount/100).toString(): "",
      createdAt: props.expense? moment(props.expense.createdAt):moment(),
      calendarFocused: false,
      error: ''
    };
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onNoteChange(e) {
    const note = e.target.value;
    this.setState({
      note: note
    });
  }

  onAmountChange(e) {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onDateChange(createdAt) {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  onFocusChange({ focused }) {
    this.setState(() => ({
      calendarFocused: focused
    }));
  }
  onSubmit(e) {
    console.log('submit called');
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      this.setState(()=> ({error:'Please provide amount description'}));
    }
    else{
      this.setState({
        error: ''
      });
      console.log('submitted');
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={(event)=>{this.onSubmit(event)}}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoComplete
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            id="SDP"
          />
          <textarea
            placeholder="Add a note for Expense (Optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
