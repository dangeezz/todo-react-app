import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';
import App from './App';
// import * as serviceWorker from './serviceWorker';


console.log("%c Hello React", "color:blue;font-size:26px;font-weight:bold");
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
