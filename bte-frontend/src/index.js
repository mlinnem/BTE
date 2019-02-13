import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import App from "./App"

import * as ar from "./actionsAndReducers";
const ReactRedux = require('react-redux');


ReactDOM.render(
<ReactRedux.Provider store={ar.store}>
  <App/>
</ReactRedux.Provider>, document.getElementById('root')
);

startup();

function isIOSSafari() {
  var ua = window.navigator.userAgent;
  var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  var webkit = !!ua.match(/WebKit/i);
  var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
  return iOSSafari;
}

function startup() {

    var WebFont = require('webfontloader');

    WebFont.load({
      google: {
        families: ['Alfa Slab One', 'Special Elite', 'Roboto Slab']
      }
    });

  ar.store.dispatch(ar.fetchAuthKeyIfNeeded());

  if (true) {
    loadIOSSafariCSS();
  }
}

function loadIOSSafariCSS() {

    var cssPath = "/iosSafari.css";

    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssPath;
    link.media = 'all';
    head.appendChild(link);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
