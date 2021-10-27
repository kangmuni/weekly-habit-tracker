import React, { Component } from 'react';

class Table extends Component {
  state = {
    count: 0,
    // habits: [
    //   { id: 1, name: 'Yoga', count: 0 },
    //   { id: 2, name: 'Swim', count: 0 },
    //   { id: 4, name: 'Stand', count: 0 },
    //   { id: 5, name: 'Walk', count: 0 },
    //   { id: 6, name: 'Stretch', count: 0 },
    //   { id: 7, name: 'Diary', count: 0 },
    //   { id: 8, name: 'Meditate', count: 0 },
    //   { id: 9, name: 'Keep a diary', count: 0 },
    //   { id: 10, name: 'Drink water', count: 0 },
    // ],
  };

  onClick = (event) => {
    const target = event.target;
    if (target.className === 'isCheck') {
      target.style.backgroundColor = 'white';
      target.classList.toggle('checked');
      return;
    }
    if (target.className === 'isCheck checked') {
      target.style.backgroundColor = 'transparent';
      target.classList.toggle('checked');
      this.countDecrement();
      return;
    }
  };

  countIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  countDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
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
            <tr onClick={this.onClick}>
              <td>요가</td>
              <td className="isCheck" onClick={this.countIncrement}></td>
              <td className="isCheck" onClick={this.countIncrement}></td>
              <td className="isCheck" onClick={this.countIncrement}></td>
              <td className="isCheck" onClick={this.countIncrement}></td>
              <td className="isCheck" onClick={this.countIncrement}></td>
              <td className="isCheck" onClick={this.countIncrement}></td>
              <td className="isCheck" onClick={this.countIncrement}></td>
              <td className="total">{this.state.count}</td>
              <td>
                <i className="fas fa-minus-circle"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
