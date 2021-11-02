import React, { Component } from 'react';
import Table from './table';

class Section extends Component {
  countIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  countDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  handleReset = (habit) => {
    this.props.onReset(habit);
  };

  render() {
    return (
      <section className="section">
        <Table
          habits={this.props.habits}
          onDelete={this.handleDelete}
          onIncrement={this.countIncrement}
          onDecrement={this.countDecrement}
          onReset={this.handleReset}
        />
      </section>
    );
  }
}

export default Section;
