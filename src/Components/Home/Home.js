import React, { Component } from "react";
import homeImage from "../../imgs/bg-drinks.jpg";
import "./Home.css";

export default class home extends Component {
  render() {
    return (
      <div>
        <div className="container-img">
          <h1 className="titulo-home">Bons Drinks</h1>
          <img src={homeImage}></img>
        </div>
      </div>
    );
  }
}
