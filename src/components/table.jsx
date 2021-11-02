import React, { Component } from 'react';
import Caption from './caption';
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

  handleReset = (habit) => {
    this.props.onReset(habit);
  };

  render() {
    return (
      <>
        <table className="table">
          <Caption
            onReset={this.handleReset}
            totalCount={
              this.props.habits.filter((habit) => habit.count > 0).length
            }
          />
          <thead className="thead">
            <tr className="thead-tr">
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>
          <tbody className="tbody">
            <Habits
              habits={this.props.habits}
              onDelete={this.handleDelete}
              onIncrement={this.countIncrement}
              onDecrement={this.countDecrement}
            />
          </tbody>
          <tfoot className="tfoot">
            <tr colspan="7"></tr>
          </tfoot>
        </table>
      </>
    );
  }
}

export default Table;
