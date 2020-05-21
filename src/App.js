import React, { Component } from "react";
import Header from "./components/Header.js";
import Finder from "./components/Finder.js";
import Pokedex from "./components/Pokedex.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      caughtPkmn: [],
    };
    this.catchPkmn = this.catchPkmn.bind(this);
    this.saveName = this.saveName.bind(this);
    this.releasePkmn = this.releasePkmn.bind(this);
  }

  componentDidMount() {}
  catchPkmn() {}
  saveName(id, newName) {}
  releasePkmn(id) {}

  render() {
    return (
      <div className="App">
        <Header />
        POKEMON APP
        <Finder catchPkmn={this.catchPkmn} />
        <Pokedex
          caughtPkmn={this.state.caughtPkmn}
          saveName={this.saveName}
          releasePkmn={this.releasePkmn}
        />
      </div>
    );
  }
}

export default App;
