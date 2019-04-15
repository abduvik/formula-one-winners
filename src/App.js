import React, { Component, Fragment } from 'react';
import './App.scss';
import Router from './router/Router';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Router />
      </Fragment>
    );
  }
}

export default App;
