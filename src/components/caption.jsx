import React, { Component } from 'react';

class Caption extends Component {
  handleReset = () => {
    this.props.onReset();
    window.location.replace('/main');
  };

  render() {
    console.log('caption');
    return (
      <caption className="caption">
        <button className="habit-reset" onClick={this.handleReset}>
          🌱
        </button>
        <div className="subtitle">
          <span className="name">My habits</span>
          <span className="count">
            {this.props.totalCount <= 0 ? '♥' : this.props.totalCount}
          </span>
        </div>
      </caption>
    );
  }
}

export default Caption;
