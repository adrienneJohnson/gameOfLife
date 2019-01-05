import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Wrapper from './Wrapper'
import '../public/style.css'

ReactDOM.render(
  <Provider store={store}>
    <Wrapper />
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
