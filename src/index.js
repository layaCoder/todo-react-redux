import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { createStore } from 'react-redux';
import reducer from './reducers/index';


// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('content'));

const store = createStore(reducer);
store.subscribe(()=>
	console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
     <App>
    </Provider>,
    document.getElementById('root')
	);