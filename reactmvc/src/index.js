import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Completed from './Completed';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Link } from 'react-router-dom';
const root = document.getElementById('root')

ReactDOM.render(
  <HashRouter>
    <Route exact path="/" component={App}></Route>
    <Route path="/completed" component={Completed}></Route>
  </HashRouter>,  
   root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
