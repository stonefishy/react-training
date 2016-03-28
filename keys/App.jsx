import React from 'react';

class App extends React.Component {
	constructor () {
		super();

		this.state = {
			data : [
				{
					id: 1,
					content: "First"
				}, {
					id: 2,
					content: "Second"
				}, {
					id: 3,
					content: "Third"
				}
			]
		}
	}

	render () {
		return (
			<div>
				{this.state.data.map((item, i) => <Content key = {i} propItem = {item} />)}
			</div>
		);
	}
}

class Content extends React.Component {
	render () {
		return (
			<div>
				<div>{this.props.propItem.id}</div>
				<div>{this.props.propItem.content}</div>
			</div>
		);
	}
}

export default App;