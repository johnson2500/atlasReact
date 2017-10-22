import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.css';
import Footer from './footer/footer.js';
import Header from './header/header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
