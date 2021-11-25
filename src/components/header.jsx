import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    console.log('header');
    return (
      <header className="header">
        <div>Create the perfect daily routine</div>
      </header>
    );
  }
}

export default Header;
