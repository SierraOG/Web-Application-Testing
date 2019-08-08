import React from 'react';
import './App.css';

import Display from './components/Display'

import Dashboard from './components/Dashboard'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      balls: 0,
      strikes: 0
    }
  }

  strikeHappened = () =>{
    this.setState((prevState) => ({strikes: prevState.strikes + 1}), this.checkResest)
    console.log(this.state)
  }

  ballHappened = () =>{
    this.setState((prevState) => ({balls: prevState.balls + 1}), this.checkResest)
  }

  hitHappened = () => {
    this.setState({balls: 0, strikes:0})
  }

  foulHappened = () => {
    if (this.state.strikes === 0) {
      this.setState({strikes: 1})
    }
    else if (this.state.strikes === 1) {
      this.setState({strikes: 2})
    }
  }

  checkResest = () => {
    if (this.state.strikes === 3 || this.state.balls === 4) {
      this.setState({strikes: 0, balls: 0})
    }
  }

  render(){
    return (
      <>
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
        <Dashboard ball={this.ballHappened} strike={this.strikeHappened} hit={this.hitHappened} foul={this.foulHappened} />
      </>
    )
  }
}

export default App;
