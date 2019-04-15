import React, { Component } from 'react';
import TodoApp from './components/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="container is-fluid">
        <div className="columns is-centered">
          <div className="column is-5">
            <h1 className="is-size-1">Todos</h1>
            <TodoApp />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
