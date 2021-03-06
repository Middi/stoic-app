import React, { Component } from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

const quotes = require('./quotes.json');

class App extends Component {
	state = {
		quote: {}
	};

	componentDidMount() {
		this.getQuote();
	}

	getQuote = () => {
		const quote = quotes[Math.floor(Math.random() * quotes.length)];
		this.setState({ quote });
	};

	render() {
		return (
			<div className="App">
				<div className="wrapper">
					{this.state.quote.quote &&
						<TransitionGroup component={null}>
							<CSSTransition
								key={uuid()}
								timeout={1400}
								classNames="fade"
							>
								<div className="bubble">
									<h1 className="quote">{this.state.quote.quote}</h1>
									{this.state.quote.author ? <h3>- {this.state.quote.author}</h3> : ''}
								</div>
							</CSSTransition>
						</TransitionGroup>
					}

					<button onClick={() => this.getQuote()} />
				</div>
			</div>
		);
	}
}

export default App;
