import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import LoginPage from './Components/LoginPage.js'
import DisplayGraph from './Components/DisplayGraph.js'
import Tabletest from './Components/tabletest.js'




ReactDOM.render(<LoginPage />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
