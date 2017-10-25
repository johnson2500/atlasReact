import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
  }

  render() {
    return (
      <div className="conatiner header-container">
        <div className='row'>
          <div className="col-xs-2 text-center">
            <h5><b>Atlas</b></h5>
            <img src="" />
          </div>
          <input className="col-xs-8 header-search-bar" placeholder="Search"/>
          <div className="col-xs-2 text-center" ></div>
        </div>
      </div>
    );
  }
}

export default Header;
