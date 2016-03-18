import React from 'react';
import ReactDom from 'react-dom';

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
import App from './form/App.jsx';

ReactDom.render(<App />, document.getElementById('app'));

// setTimeout( () => {
	// ReactDom.unmountComponentAtNode(document.getElementById('app'));
// }, 10000);