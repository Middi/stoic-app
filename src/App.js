import React, { Component } from 'react';
import './App.css';

const stoicapi = require("stoic-api");

class App extends Component {

  state = {
    quote: 'hell'
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    let quote = stoicapi.random();
    this.setState({quote});
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="quote">{this.state.quote}</h1>
          <button onClick={() => this.getQuote() }></button>
        </div>
      </div>
    );
  }
}

export default App;
