import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Array: {this.props.propArray}</h1>
				<h1>Bool: {this.props.propBool ? "True" : "False"}</h1>
				<h1>Func: {this.props.propFunc(3)}</h1>
				<h1>Number: {this.props.propNumber}</h1>
				<h1>String: {this.props.propString}</h1>
				<h1>Object: {this.props.propObj.objName1}</h1>
				<h1>Object: {this.props.propObj.objName2}</h1>
			</div>
			)
	}
}

App.propTypes = {
	propArray: React.PropTypes.array.isRequired,
	propBool: React.PropTypes.bool.isRequired,
	propFunc: React.PropTypes.func,
	propNumber: React.PropTypes.number,
	propString: React.PropTypes.string,
	propObj: React.PropTypes.object
}

App.defaultProps = {
	propArray: [1,2,3,4,5],
	propBool: true,
	propFunc: function(e) {return e * e},
	propNumber: 1,
	propString: 'this is string',
	propObj: {
		objName1: 'object value 1',
		objName2: 'object value 2'
	}
}

export default App;
