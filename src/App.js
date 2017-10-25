import React, { Component } from 'react'; 
import './App.css';
import Footer from './footer/footer.js';
import Header from './header/header.js';
import Profile from './pages/profile/profile.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Profile></Profile>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
