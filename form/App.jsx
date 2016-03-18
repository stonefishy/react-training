import React from 'react';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			data: "init state..."
		}

		this.updateState = this.updateState.bind(this);
	}

	updateState(e) {
		this.setState({data: e.target.value});
	}

	render() {
		return(
			<div>
				<input type="text" value={this.state.data} onChange={this.updateState}/>
				<h1>{this.state.data}</h1>
			</div>
			);
	}
}

export default App;