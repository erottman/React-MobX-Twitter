import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const config = {
  databaseURL: 'https://twitter-copy-eeb7f.firebaseio.com',
}

ReactDOM.render(
  <App config={config} />
  document.getElementById('root')
);
