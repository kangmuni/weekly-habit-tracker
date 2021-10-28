import React, { Component } from 'react';
import Habits from './habits';

class Table extends Component {
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
            <Habits />
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
