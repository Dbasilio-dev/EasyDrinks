import React, { Component } from "react";

export default class label extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor={this.props.htmlFor}>{this.props.children}</label>
          <input type={this.props.type} name={this.props.name}></input>
        </form>
      </div>
    );
  }
}
