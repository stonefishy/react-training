import React from 'react';

class StatePropsApp extends React.Component {
	constructor() {
		super();

		this.state = {
			header: 'This is header',
			content: 'This is content'
		}
	}

	render() {
		return (
			<div>
				<Header headerProp={this.state.header} />
				<Content contentProp={this.state.content} />
			</div>	
			);
	}
}

class Header extends React.Component {
	render() {
		return (
			<h1>{this.props.headerProp}</h1>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<h2>{this.props.contentProp}</h2>
		)
	}
}

export default StatePropsApp;