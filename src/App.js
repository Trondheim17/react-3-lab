import React, { Component } from 'react';
import './App.css';
import data from './data';
import Card from './components/card'
import ButtonRow from './components/button-row'


class App extends Component {
  constructor() {
    super()

    this.state = {
      people: data,
      index: 0
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }




  handleOnClick(e) {
    if (e === 'next' && this.state.index >= 0 && this.state.index < 24) {
      this.setState({ index: this.state.index + 1 })
    }
    if (e === 'next' && this.state.index === 24) {
      this.setState({ index: 0 })
    }
    if (e === 'previous' && this.state.index <= 24 && this.state.index > 0) {
      this.setState({ index: this.state.index - 1 })
    }
    if (e === 'previous' && this.state.index === 0) {
      this.setState({ index: 24 })
    }
  }



  render() {
    return (
      <div className="App">
        <div className='Container'>
          <header>
            <h2> Home </h2>
          </header>
          <div className='card-container'>
            <Card person={this.state.people[this.state.index]} />
            <ButtonRow handleOnClick={this.handleOnClick} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
