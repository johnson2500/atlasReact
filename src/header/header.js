import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="header-container">
        <div className="header-left">
          <h3>Atlas</h3>
          <img src={ require(".././imgs/atlas.png") }></img>
        </div>
      </div>
    );
  }
}

export default Header;
