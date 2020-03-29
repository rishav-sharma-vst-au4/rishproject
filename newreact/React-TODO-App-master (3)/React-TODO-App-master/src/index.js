import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from "./Redux/state";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);

// 1. Expose the family to the service provider
// Here we will expose the redux STORE, to the react application
