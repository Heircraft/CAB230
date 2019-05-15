import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import LoginPage from './Components/LoginPage.js'

import Home from './Components/Home.js'
import DisplayQuery from './Components/DisplayQuery.js'
import Graph from './Components/DisplayGraphs.js'
import Map from './Components/DisplayMap.js'


ReactDOM.render(<LoginPage />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();