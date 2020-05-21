import React, { Component } from "react";
import Grass from "./Grass";

export default class Finder extends Component {
  constructor() {
    super();
    this.state = {
      wildPkmn: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        Finder.js
        <Grass />
      </div>
    );
  }
}
