import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Content/>
			</div>
			);
	}
}

class Header extends React.Component {
	render() {
		return (
			<h1>This is Header Tag</h1>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div>
				<p>This is content in p tag</p>
				<p>This is another content</p>
			</div>
		);
	}
}

export default App;