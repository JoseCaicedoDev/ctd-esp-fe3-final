import { Link } from "react-router-dom";
import imgDoc from '../assets/doc.jpg'

let favoritesArray = [];

const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      favoritesArray = JSON.parse(storedFavorites);
    }
    const isDuplicate = favoritesArray.some((favorite) => favorite.id === id);

    if (!isDuplicate) {
      const newFavorite = { name, username, id };
      favoritesArray.push(newFavorite);
      localStorage.setItem("favorites", JSON.stringify(favoritesArray));
    }
  }

  return (
    <div className="card text-center rounded-md">
      <Link to={`/dentist/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <img src={imgDoc}
          className="rounded-md"
          alt="image doc" />
        <p className="my-1 font-semibold text-gray-700">{name}</p >
        <p className="text-sm">{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link >
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
