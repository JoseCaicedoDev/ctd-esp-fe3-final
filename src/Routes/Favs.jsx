import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const getFavorite = localStorage.getItem("favorites")
  const data = JSON.parse(getFavorite)

  return (
    <>
      <h1 className="my-4 text-xl font-semibold">Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {
          data.map(favorite => <Card name={favorite.name} username={favorite.username} key={favorite.id} />)
        }
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
