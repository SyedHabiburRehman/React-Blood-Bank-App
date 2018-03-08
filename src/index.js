import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux'
import { store } from './store'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC_Es4CClzxfm1ZXpo9BEHZRsnHrQ9XZ8w",
    authDomain: "redux-app-a5dfa.firebaseapp.com",
    databaseURL: "https://redux-app-a5dfa.firebaseio.com",
    projectId: "redux-app-a5dfa",
    storageBucket: "redux-app-a5dfa.appspot.com",
    messagingSenderId: "303387613626"
  };
  firebase.initializeApp(config);





ReactDOM.render(
  <MuiThemeProvider  >
  <Provider store={store}>
    
    <Routes />
    
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);  