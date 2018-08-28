import React, { Component } from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

const stoicapi = require("stoic-api");

class App extends Component {
  state = {
		quote: "",
		appearQuote: true
  };

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    const quote = stoicapi.random();
    this.setState({ quote });
  };

  render() {
    return (
      <div className="App">
					<TransitionGroup className="wrapper">
						<CSSTransition
							key={uuid()}
							in={this.state.appearQuote}
							appear={true}
							timeout={1000}
							classNames="fade"
						>
							<h1 className="quote">{this.state.quote}</h1>
						</CSSTransition>
						<button onClick={() => this.getQuote()} />
					</TransitionGroup>
      </div>
    );
  }
}

export default App;
