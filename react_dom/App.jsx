import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	constructor() {
		super();

		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	}

	findDomNodeHandler() {
		let target = document.getElementById('myNode');
		ReactDom.findDOMNode(target).style.color = 'red';
	}

	render() {
		return(
			<div>
				<button onClick={this.findDomNodeHandler}>Change Dom Node Style</button>
				<div id="myNode">My Node</div>
			</div>
		); 
	}
}

export default App;