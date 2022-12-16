import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

const machines = [
  { id: 1, label: "Machine1", description: "Description1" },
  { id: 2, label: "Machine2", description: "Description2" },
  { id: 3, label: "Machine3", description: "Description3" },
  { id: 4, label: "Machine4", description: "Description4" },
];

const App = () => {
  return (
    <BrowserRouter>
      <NavLink to="/catalog">Catalog</NavLink>
        <Route path="/catalog" exact={true} component={CatalogPreview} />
        <Route path="/catalog/:id" component={ProductCard} />
    </BrowserRouter>
  );
};

const CatalogPreview = () => {
  return (
    <div className="preview_container">
      <h2>Catalog:</h2>
      {machines.map((item) => (
        <MashinesCoverage key={item.id} {...item} />
      ))}
    </div>
  );
};

const MashinesCoverage = ({ label, id }) => {
  return (
    <div className="products-card-coverage">
      <NavLink to={`/catalog/${id}`} className="card-link">
        Link to {label}
      </NavLink>
    </div>
  );
};

const ProductCard = ({ match }) => {
  const id = Number(match.params.id);
  const cardToShow = machines.find((item) => item.id === id);
  return (
    <div>
      <h2>ProductCard:</h2>
      <h3>Label: {cardToShow.label}</h3>
      <h3>Description: {cardToShow.description}</h3>
      <h3>ID: {cardToShow.id}</h3>
    </div>
  );
};

export default App;