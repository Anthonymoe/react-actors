import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';

class App extends Component {
  render() {
    return (
      <form className="App">
        <Header />
        <About />
        <Contact />
        <Body />
        <Footer />
      </form>
    );
  }
}

export default App; 