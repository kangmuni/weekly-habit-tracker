import React, { Component } from 'react';
import AddHabit from './addHabit';
import Header from './header';
import Table from './table';

class Section extends Component {
  state = {
    habits: [
      { id: 1, name: 'Yoga', count: 0 },
      { id: 2, name: 'Swim', count: 0 },
      { id: 3, name: 'Wake up early', count: 0 },
      { id: 4, name: 'Stand', count: 0 },
      { id: 5, name: 'Walk', count: 0 },
      { id: 6, name: 'Stretch', count: 0 },
      { id: 7, name: 'Diary', count: 0 },
      { id: 8, name: 'Meditate', count: 0 },
      { id: 9, name: 'Keep a diary', count: 0 },
      { id: 10, name: 'Drink water', count: 0 },
    ],
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  countIncrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    habits[idx].count++;
    this.setState({ habits });
  };

  countDecrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    const count = habits[idx].count - 1;
    habits[idx].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  render() {
    return (
      <section className="section">
        <>
          <Header
            totalCount={
              this.state.habits.filter((habit) => habit.count > 0).length
            }
          />
          <Table
            habits={this.state.habits}
            onDelete={this.handleDelete}
            onIncrement={this.countIncrement}
            onDecrement={this.countDecrement}
          />
          <AddHabit />
        </>
      </section>
    );
  }
}

export default Section;
