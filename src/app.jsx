import React, { Component } from 'react';
import './app.css';
import AddHabit from './components/addHabit';
import Section from './components/section';
import Header from './components/header';

class App extends Component {
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
    const habits = this.state.habits.map((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  countIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
    // const habits = [...this.state.habits];
    // const idx = habits.indexOf(habit);
    // habits[idx].count++;
    // this.setState({ habits });
  };

  countDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
    // const habits = [...this.state.habits];
    // const idx = habits.indexOf(habit);
    // const count = habits[idx].count - 1;
    // habits[idx].count = count < 0 ? 0 : count;
    // this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });
    // this.setState({ habits });
  };

  render() {
    return (
      <>
        <Header />
        <Section
          habits={this.state.habits}
          onDelete={this.handleDelete}
          onIncrement={this.countIncrement}
          onDecrement={this.countDecrement}
          onReset={this.handleReset}
        />
        <AddHabit onAdd={this.handleAdd} />
      </>
    );
  }
}

export default App;
