import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span>Weekly Habit Tracker</span>
        <span className="count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
