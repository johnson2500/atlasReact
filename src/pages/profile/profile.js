import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
  constructor(){
    super();
    //this.centerHeight();
  }


  render() {
    return (
      <div className='main-content'>
        <div className="row">
          <h1 className="col-xs-12 col-12 text-center">test</h1>
        </div>
        <div className="row">
          <div className="col-xs-1 col-1"></div>
          <div className="col-xs-10 col-10 text-center">test</div>
          <div className="col-xs-1 col-1"></div>
        </div>
      </div>
    );
  }
}

export default Profile;
