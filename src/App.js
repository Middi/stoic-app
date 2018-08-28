import React, { Component } from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

const quotes = require('./quotes.json');

class App extends Component {
  state = {
		quote: {quote: 'Loading'}
  };

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
		const random = quotes[Math.floor(Math.random()*quotes.length)];
    const quote = random;
    this.setState({ quote });
  };

  render() {
    return (
      <div className="App">
				<div className="wrapper">
						<TransitionGroup component={null}>
							<CSSTransition
								key={uuid()}
								timeout={1000}
								classNames="fade"
							>
								<div className="bubble">
									<h1 className="quote">{this.state.quote.quote}</h1>
									<h3>- {this.state.quote.author}</h3>
								</div>
							</CSSTransition>
						</TransitionGroup>
						<button onClick={() => this.getQuote()} />
				</div>
			</div>
    );
  }
}

export default App;
