import React, { Component } from 'react';
import AddHabit from './addHabit';
import Header from './header';
import Table from './table';

class Section extends Component {
  render() {
    return (
      <section className="section">
        <>
          <Header />
          <Table />
          <AddHabit />
        </>
      </section>
    );
  }
}

export default Section;
