// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      {/* <Navigation /> */}
      <Router />
    </BrowserRouter>
    </Provider>
  );
}

export default App;

