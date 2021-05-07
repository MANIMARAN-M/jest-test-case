import React, { Component } from "react";

export default class InputComponent extends Component {
  updateState(event) {
    this.setState({
      input: event.target.value,
    });
  }
  render() {
    return (
      <div data-testid="inputtest-1">
        <input type="text" onChange={this.updateState.bind(this)} id="" />
      </div>
    );
  }
}
