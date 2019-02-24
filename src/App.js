import React, { Component, Fragment } from 'react';
import './App.css';
import Form from './form';
import Table from './table';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Form />
        <Table content={'dfgdf'}/>
      </Fragment>
    );
  }
}

export default App;
