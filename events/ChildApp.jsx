import React from 'react';

class ChildApp extends React.Component {
	constructor () {
		super();

		this.state = {
			data : "init state..."
		}

		this.updateStateFromChild = this.updateStateFromChild.bind(this);
	}

	updateStateFromChild () {
		this.setState({data: "update the state from child component"})
	}

	render() {
		return (
			<div>
				<Child propData={this.state.data} propUpdateState = {this.updateStateFromChild} />
			</div>
			);
	}
}

class Child extends React.Component {
	render () {
		return (
			<div>
				<h1>{this.props.propData}</h1>
				<button onClick={this.props.propUpdateState}>Update State </button>
			</div>
			);
	}
}

export default ChildApp;