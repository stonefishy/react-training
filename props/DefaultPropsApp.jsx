import React from 'react';

class DefaulPropsApp extends React.Component {
	render() {
		return(
			<div>
				<h1>{this.props.headerProp}</h1>
				<h2>{this.props.contentProp}</h2>
			</div>
			);
	}
}

DefaulPropsApp.defaultProps = {
	headerProp: "header from default props...",
	contentProp: 'contentProp from default props...'
}

export default DefaulPropsApp;