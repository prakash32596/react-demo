import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <form>
        <div>
        <label>Name</label>
        <input type="text" placeholder="Name"/>
        </div>
        <div>
        <label>Dob</label>
        <input type="text" placeholder="dob"/>
        </div>
        <div>
        <label>Age</label>
        <input type="text" placeholder="Name"/>
        </div>
        <div>
        <label>Address</label>
        <textarea rows="4" cols="50">
At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
</textarea>

        </div>
        </form>
      </div>
    );
  }
}

export default App;
