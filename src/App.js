import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {counter:0};
  }

  render() {
    return (
      <div className="App" data-test="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h1 data-test='counter-display'>
              This counter is incrementing {this.state.counter}
            </h1>
          <button data-test="inc-button" onClick={()=>this.setState({counter : this.state.counter+1})}> 
            Increment Counter
          </button>   
        </header>
      </div>
    );
  }
}

export default App;
