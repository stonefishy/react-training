import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

// import App from './App.jsx';
// import App from './JSX/App.jsx';
// import App from './component/App.jsx';
// import App2 from './component/App2.jsx';
// import App from './state/App.jsx';
// import App from './props/App.jsx';
// import DefaultPropsApp from './props/DefaultPropsApp.jsx';
// import StatePropsApp from './props/StatePropsApp.jsx';
// import App from './validating_props/App.jsx';
// import App from './set_state/App.jsx';
// import App from './force_update/App.jsx';
// import App from './react_dom/App.jsx';		
// import App from './component_lifecycle/App.jsx';
// import App from './form/App.jsx';
// import ParentChildApp from './form/ParentChildApp.jsx';
// import App from './events/App.jsx';
// import App from './events/ChildApp.jsx';
// import App from './refs/App.jsx';
// import App from './keys/App.jsx';
import App from './router/App.jsx';
import Home from './router/Home.jsx';
import About from './router/About.jsx';
import Contact from './router/Contact.jsx';

// ReactDom.render(<App />, document.getElementById('app'));

ReactDom.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="home" component= {Home} />
			<Route path="about" component={About}/>
			<Route path="contact" component={Contact}/>
		</Route>
	</Router>
	), document.getElementById('app'));

// setTimeout( () => {
	// ReactDom.unmountComponentAtNode(document.getElementById('app'));
// }, 10000);