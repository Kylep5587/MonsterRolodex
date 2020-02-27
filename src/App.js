import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component { // the render method is built into Component
  constructor() {
    super(); // Calls React.Component's constructor

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // Called when a component is rendered on the page for the first time
  componentDidMount() { // Populates monsters array with data from the url
    fetch('https://jsonplaceholder.typicode.com/users')   // Makes call to the url
    .then(response => response.json())                    // Gets JSON object from url if a response is recieved
    .then(users => this.setState({ monsters: users }));   // Gets users portion of the JSON object and populates the monsters array
  }

  handleChange = e => { // e => ensures that the "this" keyword is set to the proper context
    this.setState({ searchField: e.target.value });
  };

  // When state changes, render() is called again
  // const {} = this.state is destructuring properties from the state object and setting them to constant values placed inside the { }
  render() {
    const { monsters, searchField } = this.state;
    // Same as  const monsters = this.state.monsters 
    // and const searchField = this.state.searchField
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox // Uses the compoennt defined in search-box.component.jsx file 
          placeholder='Search Monsters'
          handleChange={ this.handleChange }
        />

        <CardList monsters={filteredMonsters} /> 
      </div>
    );
          // <CardList> is referencing cardlist.component.js in the components/card-list folder
  }
}

export default App;
