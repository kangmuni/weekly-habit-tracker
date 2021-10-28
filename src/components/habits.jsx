import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
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
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onDelete={this.handleDelete}
            onIncrement={this.countIncrement}
            onDecrement={this.countDecrement}
          />
        ))}
      </>
    );
  }
}

export default Habits;
