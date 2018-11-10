import React, { Component } from 'react';
import {Provider}from 'react-redux';
import {configureStore} from "../store";
import {BrowserRouter} from 'react-router-dom'

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        Hello World
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
