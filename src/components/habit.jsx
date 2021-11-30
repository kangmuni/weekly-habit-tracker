import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  handleClick = (event) => {
    const target = event.target;
    if (target.className === 'isCheck') {
      target.style.backgroundColor = 'rgb(28, 190, 73)';
      target.classList.toggle('checked');
      this.countIncrement();
      return;
    }
    if (target.className === 'isCheck checked') {
      target.style.backgroundColor = 'rgb(231, 228, 228)';
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
    console.log('habit');
    const { name, count } = this.props.habit;
    return (
      <>
        <tr className="tbody-tr1">
          <td className="tr1-info" colspan="6">
            {count}&nbsp;
            {name}
          </td>
          <td className="tr1-delete" onClick={this.handleDelete}>
            <i className="fas fa-minus-circle"></i>
          </td>
        </tr>
        <tr className="tbody-tr2" onClick={this.handleClick}>
          <td className="isCheck"></td>
          <td className="isCheck"></td>
          <td className="isCheck"></td>
          <td className="isCheck"></td>
          <td className="isCheck"></td>
          <td className="isCheck"></td>
          <td className="isCheck"></td>
        </tr>
      </>
    );
  }
}

export default Habit;
