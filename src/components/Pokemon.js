import React, { Component } from "react";

export default class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      userInput: ``,
    };
  }

  toggleEdit() {}
  handleChange(ev) {}
  handleSaveName() {}

  render() {
    return <div>Pokemon.js</div>;
  }
}
