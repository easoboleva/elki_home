import React, { Component } from "react";
import fon  from "../assets/img/fon1.png"

export default class CarouselBox extends Component {
  render() {
    return (
      <div className="bg-fixed" style={{ backgroundImage: `url(${fon})` }}></div>
    )
  }
}
