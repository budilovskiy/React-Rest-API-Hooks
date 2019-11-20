import React from 'react';
import List from "./Containers/List";
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>TaskList</h1>
          <hr />
        </div>
      </div>
      <List />
    </div>
  );
}

export default App;
