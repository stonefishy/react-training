import React from 'react';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			data : []
		}

		this.setStateHandler = this.setStateHandler.bind(this);
	};

	setStateHandler() {
		let itemArr = this.state.data;
		let item = "State..";
		itemArr.push(item);
		this.setState({data: itemArr});
	};

	render() {
		return (
			<div>
				<button onClick={this.setStateHandler}>Set State</button>
				<h1>{this.state.data}</h1>
			</div>
			);
	}
}

export default App;