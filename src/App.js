import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Background from './components/background/Background.js';
import Home from './components/home/home.js';
import About from './components/aboutUs/AboutUs.js';
import Contact from './components/contact/contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Background />
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
