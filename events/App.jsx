import React from 'react';

class App extends React.Component {
	constructor () {
		super();

		this.state = {
			data: "init state..."
		}

		this.updateState = this.updateState.bind(this);
	}

	updateState() {
		this.setState({data: "update state"});
	}

	render() {
		return (
			<div>
				<button onClick={this.updateState}> update state </button>
				<h1> {this.state.data} </h1>
			</div>
			);
	}
}

export default App;