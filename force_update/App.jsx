import React from 'react';

class App extends React.Component {
	constructor() {
		super();

		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
	};

	forceUpdateHandler() {
		this.forceUpdate();
	}

	render() {
		return (
			<div>
				<button onClick={this.forceUpdateHandler}>Force Update State</button>
				<h1>{Math.random()}</h1>
			</div>
			);
	}
}

export default App;