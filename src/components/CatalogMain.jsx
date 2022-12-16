import React, { Component} from "react";
import Catalog from "./Catalog";
import CatalogClassic from "./Classic";
import Mini from "./Mini";


export default class CatalogMain extends Component {
  render() {
    return (
      <>
      <Catalog />
      <CatalogClassic />
      <Mini />
      </>
    
    )
  }
}