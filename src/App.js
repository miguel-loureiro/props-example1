import React, { Component } from 'react'
import './App.css';
import Person from './Person';
import AnotherPerson from './AnotherPerson';

class App extends Component {

  render() {

    return (
      <div className="App-header">
        <h1>I'm building a React app!</h1>
        <Person name = "MikeMazter" age = "45"> and I love to be wild </Person>
        <AnotherPerson name = "MarthaPowers" age = "47"/>
      </div>
    );
  };
}

export default App;
