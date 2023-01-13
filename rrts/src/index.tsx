import { applyMiddleware, createStore } from 'redux';

import { App }                          from './components/App';
import { Provider }                     from 'react-redux';
import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { reducers }                     from './reducers';
import thunk                            from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
