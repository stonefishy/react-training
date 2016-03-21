import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			data: ''
		}

		this.updateState = this.updateState.bind(this);
		this.clearInput = this.clearInput.bind(this);
	}

	updateState(e) {
		this.setState({data: e.target.value});
	}

	clearInput() {
		this.setState({data: ''});
		ReactDom.findDOMNode(this.refs.myInput).focus();
	}

	render() {
		return (
			<div>
				<input ref="myInput" value={this.state.data} onChange={this.updateState} />
				<button onClick={this.clearInput}>Reset </button>
				<h1>{this.state.data}</h1>
			</div>
			);
	}
}

export default App;