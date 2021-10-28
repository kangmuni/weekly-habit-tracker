import React, { Component } from 'react';

class Habit extends Component {
  handleClick = (event) => {
    const target = event.target;
    if (target.className === 'isCheck') {
      target.style.backgroundColor = 'white';
      target.classList.toggle('checked');
      this.countIncrement();
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
    this.props.onIncrement(this.props.habit);
  };

  countDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <tr onClick={this.handleClick}>
        <td>{name}</td>
        <td className="isCheck"></td>
        <td className="isCheck"></td>
        <td className="isCheck"></td>
        <td className="isCheck"></td>
        <td className="isCheck"></td>
        <td className="isCheck"></td>
        <td className="isCheck"></td>
        <td className="total">{count}</td>
        <td className="delete" onClick={this.handleDelete}>
          <i className="fas fa-minus-circle"></i>
        </td>
      </tr>
    );
  }
}

export default Habit;
