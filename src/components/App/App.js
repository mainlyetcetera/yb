import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
          <h1>Le Staff</h1>
        </header>
        <Cohort staffMembers={this.state.staff} />
      </div>
    );
  }
}

export default App;
