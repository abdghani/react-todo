import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';

import Todos from './containers/Todos/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Todos />
        </Layout>
      </div>
    );
  }
}

export default App;
