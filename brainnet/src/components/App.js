import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
