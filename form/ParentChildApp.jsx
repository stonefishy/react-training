import React from 'react';

class ParentChildApp extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			data: "init state.."
		}

		this.updateState = this.updateState.bind(this);
	}

	updateState(e) {
		this.setState({data: e.target.value});
	}

	render () {
		return (
			<div>
				<h1>Parent: {this.state.data}</h1>
				<Child propsData = {this.state.data} updateStateProp = {this.updateState}/>
			</div>
			);
	}
}

class Child extends React.Component {

	render() {
		return (
			<div>
				<input type="text" value={this.props.propsData} onChange={this.props.updateStateProp} />
				<h2>Child: {this.props.propsData}</h2>
			</div>
			);
	}
}

export default ParentChildApp;