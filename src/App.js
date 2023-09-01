import { Component } from "react";
import "./App.css";

class App extends Component {
  //constructor starts first
  constructor() {
    super();

    this.state = {
      monsters: [],
    };

    console.log("constructor 1");
  }

  componentDidMount() {
    console.log("componentDidMount 3");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
//render starts second
  render() {
    console.log("render 2");
    return (
      <div className="App">
        <input 
        className="search-box" 
        type="search" 
        placeholder="Search Monsters" 
        onChange={(event) => {
          console.log(event.target.value)
          const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.includes(event.target.value);
          })

          this.setState(() => {
            return { monsters: filteredMonsters };
          });
        }}/>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
