import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'firebase/auth';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import firebase from 'firebase/app';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

require('dotenv').config();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#008ffe',
    },
    secondary: blueGrey,
  },
});

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIR_API_KEY,
  authDomain: process.env.REACT_APP_FIR_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIR_DATABASE_URL,
  projectId: process.env.REACT_APP_FIR_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIR_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIR_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIR_APP_ID,
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
