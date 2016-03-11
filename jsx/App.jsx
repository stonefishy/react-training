import React from 'react';

class App extends React.Component {
	render() {
		var flag =1;

		var header = {
			fontSize: 30,
			color: '#FF00EF'
		};

		return(
			<div>
				<h1 style={header}>Header</h1>
				<h2>Content</h2>
				<span>1 + 1 = {1 + 1}</span>
				<p>{flag = 1? 'True' : 'False'}</p>
			</div>
			);
	}
}

export default App;