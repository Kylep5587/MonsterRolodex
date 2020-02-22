import React, { Component } from 'react';
import './App.css';

class App extends Component { // the render method is built into Component
  constructor() {
    super(); // Calls React.Component's constructor

    this.state = {
      monsters: []
    };
  }

  // Called when a component is rendered on the page for the first time
  componentDidMount() { // Populates monsters array with data from the url
    fetch('https://jsonplaceholder.typicode.com/users')   // Makes call to the url
    .then(response => response.json())                    // Gets JSON object from url
    .then(users => this.setState({ monsters: users }));   // Gets users portion of the JSON object and populates the monsters array
  }

  // When state changes, render() is called again
  render() {
    return (
      <div className="App">
        {
          // map causes the return of the method to iterate through each element in the array
          //.monsters.map() will iterate through each element in the monsters array
          // key tells react which element in the monster array to update
          this.state.monsters.map(monster => (
            <h1 key={monster.id}> { monster.name }</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
