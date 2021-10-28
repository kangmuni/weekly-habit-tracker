import React, { Component } from 'react';
import Habits from './habits';

class Table extends Component {
  countIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  countDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <td></td>
              <td>Mon</td>
              <td>Tue</td>
              <td>Wed</td>
              <td>Thu</td>
              <td>Fri</td>
              <td>Sat</td>
              <td>Sun</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <Habits
              habits={this.props.habits}
              onDelete={this.handleDelete}
              onIncrement={this.countIncrement}
              onDecrement={this.countDecrement}
            />
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
