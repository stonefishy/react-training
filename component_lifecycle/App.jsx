import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: 0
		}

		this.increaseNumber = this.increaseNumber.bind(this);
	}

	increaseNumber () {
		this.setState({data: this.state.data + 1});
	}

	render() {
		return(
			<div>
				<button onClick={this.increaseNumber}>Increase Number</button>
				<DisplayNumber number={this.state.data} />
			</div>
			)
	}
}

class DisplayNumber extends React.Component {
	componentWillMount() {
		console.log("component will mount");
	}

	componentDidMount() {
		console.log("component did mount");
	}

	componentWillReceiveProps(newProps) {
		console.log("new props: ", newProps);
		console.log("componnet will receive props");
	}

	shouldComponentUpdate(newProps, newState) {
		return true;
	}

	componentWillUpate(nextProps, nextState) {
		console.log("next Props: ", nextProps);
		console.log("next State: ", nextState);
		console.log("component will update");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("prevProps ", prevProps);
		console.log("prevState ", prevState);
		console.log("component did update");
	}

	componentWillUnmount() {
		console.log("component will unmount");
	}

	render() {
		return (
			<h1>{this.props.number}</h1>
		);
	}
}

export default App;

