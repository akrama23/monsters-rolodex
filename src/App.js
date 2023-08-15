import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => console.log(users))

  }

  render(){
    return (
      <div className="App">
        
      </div>
    );
  }

}

export default App;
